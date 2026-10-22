import React, { useState, useMemo } from 'react';
import { creativesPerformanceData } from '../../../data/etapa1Data';
import {
  Sparkles,
  ArrowUpDown,
  HelpCircle,
  Video,
  Image,
  AlertTriangle,
  Flame,
  Search
} from 'lucide-react';

interface CreativesTableProps {
  onOpenModal: (metricId: string) => void;
}

type SortField = 'cpl' | 'leads' | 'spend' | 'ctr' | 'hookRate';
type SortDirection = 'asc' | 'desc';
type StatusFilter = 'all' | 'winner' | 'active' | 'fatigued';

export const CreativesTable: React.FC<CreativesTableProps> = ({ onOpenModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortField, setSortField] = useState<SortField>('leads');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection(field === 'cpl' ? 'asc' : 'desc');
    }
  };

  const filteredAndSortedCreatives = useMemo(() => {
    return creativesPerformanceData
      .filter((creative) => {
        const matchesSearch =
          creative.adName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          creative.productLine.toLowerCase().includes(searchTerm.toLowerCase()) ||
          creative.adSet.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
          statusFilter === 'all' ? true : creative.status === statusFilter;

        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        const multiplier = sortDirection === 'asc' ? 1 : -1;
        return (a[sortField] - b[sortField]) * multiplier;
      });
  }, [searchTerm, statusFilter, sortField, sortDirection]);

  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-5">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Auditoria de Performance por Criativo & Anúncio
            </h2>
          </div>
          <p className="text-xs text-text-muted mt-0.5">
            Métricas de conversão individual, retenção de vídeo (Hook/Hold Rate) e alertas de fadiga (Slides 12 e 13).
          </p>
        </div>

        {/* Botão para entender o indicador geral de criativos */}
        <button
          onClick={() => onOpenModal('arocell_efficiency')}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 hover:text-cyan-200 text-xs font-semibold transition-all cursor-pointer self-start lg:self-auto group"
        >
          <HelpCircle className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span>Entender Fórmula do Top Anúncio (Dra. Cíntia)</span>
        </button>
      </div>

      {/* Barra de Filtros e Busca */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Busca por Nome */}
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por anúncio, linha ou conjunto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#121214] border border-border focus:border-cyan-500 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-text-muted outline-none transition-all"
          />
        </div>

        {/* Status Filters */}
        <div className="inline-flex items-center bg-zinc-900 border border-border p-1 rounded-lg text-xs font-mono">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              statusFilter === 'all'
                ? 'bg-zinc-800 text-white font-bold'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Todos ({creativesPerformanceData.length})
          </button>
          <button
            onClick={() => setStatusFilter('winner')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              statusFilter === 'winner'
                ? 'bg-emerald-950/80 text-emerald-300 font-bold border border-emerald-800/50'
                : 'text-text-muted hover:text-emerald-400'
            }`}
          >
            Campeões (CPL &lt; R$ 6)
          </button>
          <button
            onClick={() => setStatusFilter('active')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              statusFilter === 'active'
                ? 'bg-cyan-950/80 text-cyan-300 font-bold border border-cyan-800/50'
                : 'text-text-muted hover:text-cyan-400'
            }`}
          >
            Estáveis (R$ 6 - R$ 10)
          </button>
          <button
            onClick={() => setStatusFilter('fatigued')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              statusFilter === 'fatigued'
                ? 'bg-rose-950/80 text-rose-300 font-bold border border-rose-800/50'
                : 'text-text-muted hover:text-rose-400'
            }`}
          >
            Fadigados (&gt; R$ 10)
          </button>
        </div>
      </div>

      {/* Tabela de Dados */}
      <div className="overflow-x-auto border border-border-subtle rounded-xl">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-zinc-900/80 border-b border-border text-text-secondary font-mono text-[11px]">
              <th className="py-3 px-4">Anúncio / Formato</th>
              <th className="py-3 px-3">Linha / Conjunto</th>
              <th
                onClick={() => handleSort('spend')}
                className="py-3 px-3 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Investimento</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('leads')}
                className="py-3 px-3 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Leads</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('cpl')}
                className="py-3 px-3 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>CPL</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('ctr')}
                className="py-3 px-3 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>CTR</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('hookRate')}
                className="py-3 px-3 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Hook / Retenção</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 text-center">Status / Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle bg-card">
            {filteredAndSortedCreatives.map((ad) => {
              const isWinner = ad.status === 'winner';
              const isFatigued = ad.status === 'fatigued';

              return (
                <tr
                  key={ad.id}
                  className={`hover:bg-card-hover transition-colors ${
                    isWinner ? 'bg-emerald-950/10' : isFatigued ? 'bg-rose-950/10' : ''
                  }`}
                >
                  {/* Nome e Formato */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-zinc-800 text-zinc-300 mt-0.5">
                        {ad.format === 'Vídeo Reels' ? (
                          <Video className="w-3.5 h-3.5 text-cyan-400" />
                        ) : (
                          <Image className="w-3.5 h-3.5 text-text-muted" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-white tracking-tight flex items-center gap-1.5">
                          <span>{ad.adName}</span>
                          {isWinner && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-950 text-amber-300 border border-amber-800 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" /> Top 1
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-text-muted font-mono mt-0.5">
                          {ad.format} • {ad.impressions.toLocaleString('pt-BR')} imp.
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Linha / Conjunto */}
                  <td className="py-3.5 px-3">
                    <div className="font-medium text-white">{ad.productLine}</div>
                    <div className="text-[10px] text-text-muted font-mono">{ad.adSet}</div>
                  </td>

                  {/* Investimento */}
                  <td className="py-3.5 px-3 font-mono font-medium text-white">
                    R$ {ad.spend.toLocaleString('pt-BR')}
                  </td>

                  {/* Leads */}
                  <td className="py-3.5 px-3 font-mono font-bold text-cyan-300">
                    {ad.leads}
                    <span className="text-[10px] text-text-muted font-normal ml-1">
                      ({((ad.leads / 780) * 100).toFixed(1)}%)
                    </span>
                  </td>

                  {/* CPL */}
                  <td className="py-3.5 px-3 font-mono">
                    <div
                      className={`font-bold inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs ${
                        ad.cpl < 6.0
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                          : ad.cpl <= 9.5
                          ? 'bg-zinc-800 text-white border border-border'
                          : 'bg-rose-950/80 text-rose-300 border border-rose-800/60'
                      }`}
                    >
                      R$ {ad.cpl.toFixed(2).replace('.', ',')}
                    </div>
                  </td>

                  {/* CTR */}
                  <td className="py-3.5 px-3 font-mono">
                    <span
                      className={`font-semibold ${
                        ad.ctr >= 5.0 ? 'text-purple-300 font-bold' : 'text-text-primary'
                      }`}
                    >
                      {ad.ctr.toFixed(2).replace('.', ',')}%
                    </span>
                  </td>

                  {/* Hook / Retenção */}
                  <td className="py-3.5 px-3 font-mono text-[11px]">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center justify-between text-text-secondary">
                        <span>Hook 3s:</span>
                        <span className="font-semibold text-white">{ad.hookRate.toFixed(1)}%</span>
                      </div>
                      <div className="flex items-center justify-between text-text-muted text-[10px]">
                        <span>Hold 100%:</span>
                        <span>{ad.holdRate.toFixed(1)}%</span>
                      </div>
                    </div>
                  </td>

                  {/* Status / Ação */}
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      {isWinner ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-700">
                          CAMPEÃO
                        </span>
                      ) : isFatigued ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-950 text-rose-300 border border-rose-700 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> FADIGADO
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-zinc-800 text-zinc-300 border border-border">
                          ATIVO
                        </span>
                      )}

                      {ad.alert && (
                        <span className="text-[10px] text-text-muted max-w-[160px] truncate" title={ad.alert}>
                          {ad.alert}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Resumo da Tabela / Insights */}
      <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-text-secondary">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Conclusão Operacional:</strong> O criativo de vídeo da <strong>Dra. Cíntia Kabata</strong> entrega CPL de <strong>R$ 3,84</strong> e CTR de <strong>8,18%</strong>, gerando mais leads que todos os outros criativos estáticos combinados.
          </span>
        </div>
        <button
          onClick={() => onOpenModal('cpl')}
          className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] underline underline-offset-4 shrink-0 cursor-pointer"
        >
          Ver Diagnóstico de CPL &rarr;
        </button>
      </div>
    </div>
  );
};
