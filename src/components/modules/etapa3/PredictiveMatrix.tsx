import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Server, 
  Search, 
  Filter, 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle, 
  Activity,
  Layers
} from 'lucide-react';
import { predictiveFeaturesData } from '../../../data/etapa3Data';
import { MatrixPillar, PredictiveMatrixItem } from '../../../types/predictiveTypes';
import { useDashboard } from '../../layout/DashboardLayout';

type PillarTabOption = 'ALL' | MatrixPillar;

export const PredictiveMatrix: React.FC = () => {
  const { openMetricModal } = useDashboard();
  const [selectedPillar, setSelectedPillar] = useState<PillarTabOption>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Pillar tabs definition
  const pillarTabs: { key: PillarTabOption; label: string; count: number }[] = [
    { key: 'ALL', label: 'Todas as Funcionalidades', count: 20 },
    { key: 'Leilão & Mercado', label: 'Pilar 1: Leilão & Mercado', count: 7 },
    { key: 'Sinais & Telemetria CAPI', label: 'Pilar 2: Sinais & CAPI', count: 5 },
    { key: 'Atendimento & Conversão WhatsApp', label: 'Pilar 3: WhatsApp & CRM', count: 5 },
    { key: 'Gestão de Caixa & Faturamento Real', label: 'Pilar 4: Caixa & Receita', count: 3 },
  ];

  // Filtered list
  const filteredFeatures = useMemo(() => {
    return predictiveFeaturesData.filter((item) => {
      const matchesPillar = selectedPillar === 'ALL' || item.pilar === selectedPillar;
      const matchesSearch = 
        item.sigla.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.endpointMCP.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.impactoNegocio.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPillar && matchesSearch;
    });
  }, [selectedPillar, searchQuery]);

  // Overall status counts
  const counts = useMemo(() => {
    let healthy = 0;
    let warning = 0;
    let critical = 0;
    predictiveFeaturesData.forEach((item) => {
      if (item.status === 'healthy' || item.status === 'active') healthy++;
      else if (item.status === 'warning') warning++;
      else if (item.status === 'critical') critical++;
    });
    return { healthy, warning, critical, total: predictiveFeaturesData.length };
  }, []);

  const getStatusBadge = (status: PredictiveMatrixItem['status']) => {
    switch (status) {
      case 'healthy':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
            <CheckCircle className="w-2.5 h-2.5" />
            <span>Saudável</span>
          </span>
        );
      case 'active':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
            <Activity className="w-2.5 h-2.5" />
            <span>Ativo</span>
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/60 text-amber-400">
            <AlertTriangle className="w-2.5 h-2.5" />
            <span>Atenção</span>
          </span>
        );
      case 'critical':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/60 text-rose-400">
            <AlertCircle className="w-2.5 h-2.5" />
            <span>Crítico</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
            <span>{status}</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-5">
      {/* Section Header & Status Overview */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Matriz Preditiva de 20 Funcionalidades v2.0
                </h2>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-semibold">
                  4 Pilares
                </span>
              </div>
              <p className="text-xs text-text-muted mt-0.5">
                Arquitetura de telemetria algorítmica correlacionando leilão, CAPI e faturamento ERP Kota.
              </p>
            </div>
          </div>
        </div>

        {/* Global Status Counters Pill */}
        <div className="flex items-center gap-2 bg-[#101010] p-1.5 rounded-xl border border-border-subtle self-start md:self-auto font-mono text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/40 text-emerald-400 border border-emerald-900/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{counts.healthy} Saudáveis</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/40 text-amber-400 border border-amber-900/40">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{counts.warning} Em Atenção</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-950/40 text-rose-400 border border-rose-900/40">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span>{counts.critical} Críticos</span>
          </div>
        </div>
      </div>

      {/* Tabs Bar & Search Input */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        {/* Pillar Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {pillarTabs.map((tab) => {
            const isSelected = selectedPillar === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setSelectedPillar(tab.key)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-cyan-950 text-cyan-300' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrar por sigla, nome ou MCP..."
            className="w-full bg-[#101010] border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
      </div>

      {/* Minimalist Cards Grid (#141414) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredFeatures.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#141414] border border-[#262626] hover:border-zinc-700/80 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            {/* Top row: Sigla (JetBrains Mono) + Status Badge */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-cyan-400 font-bold text-sm tracking-wide bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-900/40">
                    {feature.sigla}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {feature.pilar.split(':')[0]}
                  </span>
                </div>
                {getStatusBadge(feature.status)}
              </div>

              {/* Intuitive Title */}
              <h3 className="text-sm font-semibold text-white tracking-tight leading-snug line-clamp-1 mb-2">
                {feature.nome}
              </h3>

              {/* Value & Benchmark metrics */}
              <div className="bg-[#0c0c0c] border border-zinc-800/80 rounded-lg p-2.5 mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-400">
                    Valor Observado
                  </div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">
                    {feature.valorAtual}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase text-zinc-400">
                    Benchmark / Meta
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 font-mono mt-0.5">
                    {feature.benchmark}
                  </div>
                </div>
              </div>

              {/* Formula box */}
              <div className="mb-3 bg-zinc-900/60 border border-zinc-800/70 rounded-lg p-2 font-mono text-[11px] text-zinc-300 overflow-x-auto whitespace-nowrap scrollbar-none">
                <span className="text-zinc-400 select-none mr-1.5">ƒ:</span>
                <span className="text-cyan-300/90">{feature.formula}</span>
              </div>

              {/* Business Impact snippet */}
              <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-3">
                {feature.impactoNegocio}
              </p>
            </div>

            {/* Bottom: MCP Endpoint Badge & Mandatory Action Button */}
            <div className="pt-3 border-t border-zinc-800/60 space-y-2.5">
              {/* Endpoint MCP Badge */}
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-800/80">
                <Server className="w-3 h-3 text-cyan-400 shrink-0" />
                <span className="truncate" title={feature.endpointMCP}>
                  {feature.endpointMCP}
                </span>
              </div>

              {/* Confidence Score & Mandatory Button */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{feature.confiancaScore}% Confiança</span>
                </div>

                {/* Mandatory [ ? Entender Indicador ] button */}
                <button
                  onClick={() => openMetricModal(feature.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/90 hover:bg-cyan-950/60 hover:text-cyan-300 hover:border-cyan-800/70 border border-zinc-700/80 text-zinc-200 text-xs font-medium transition-all cursor-pointer shadow-sm"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Entender Indicador</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFeatures.length === 0 && (
        <div className="text-center py-12 bg-[#121212] rounded-xl border border-zinc-800">
          <Filter className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
          <h4 className="text-sm font-semibold text-zinc-300">Nenhuma funcionalidade encontrada</h4>
          <p className="text-xs text-zinc-500 mt-1">
            Tente buscar com outra sigla ou limpar os termos do filtro.
          </p>
        </div>
      )}
    </div>
  );
};
