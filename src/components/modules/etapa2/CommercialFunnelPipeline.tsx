import React, { useState } from 'react';
import { commercialFunnelStages } from '../../../data/etapa2Data';
import { useDashboard } from '../../layout/DashboardLayout';
import { 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Filter, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Layers,
  ChevronRight,
  TrendingDown,
  Info
} from 'lucide-react';

export const CommercialFunnelPipeline: React.FC = () => {
  const { openMetricModal } = useDashboard();
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'flow' | 'bars'>('flow');

  const selectedStage = commercialFunnelStages.find(s => s.id === selectedStageId) || commercialFunnelStages[0];

  return (
    <div className="bg-[#141414] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6">
      {/* Header with Title and Executive Summary Badges */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>ESTEIRA DE CONVERSÃO COMERCIAL PÓS-CLIQUE</span>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            Funil Comercial de Ponta a Ponta (7 Etapas)
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Rastreamento integrado solicitado pela diretoria da Kota Saúde e Beleza: do primeiro clique em anúncios no Instagram até a emissão da nota fiscal e faturamento no ERP Kota Dental.
          </p>
        </div>

        {/* View Switcher and Quick Indicators */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-[#0d0d0d] p-1 rounded-xl border border-zinc-800 text-xs">
            <button
              onClick={() => setViewMode('flow')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === 'flow'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Fluxo em Esteira
            </button>
            <button
              onClick={() => setViewMode('bars')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === 'bars'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Gráfico Proporcional
            </button>
          </div>

          <div className="bg-[#1c1c1c] border border-amber-500/30 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-mono">
            <span className="text-zinc-400">ROAS Comercial:</span>
            <span className="text-amber-400 font-bold">4,77x</span>
          </div>
        </div>
      </div>

      {/* Mini Executive Highlight Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0f0f0f] border border-zinc-800/60 p-3.5 rounded-xl">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] text-zinc-400">Total de Cliques</div>
            <div className="text-sm font-bold text-white font-mono">4.930</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] text-zinc-400">Retenção Anti-Curioso</div>
            <div className="text-sm font-bold text-emerald-400 font-mono">65,0% (208)</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] text-zinc-400">Vendas Fechadas</div>
            <div className="text-sm font-bold text-indigo-300 font-mono">12 contratos</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
            <DollarSign className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] text-zinc-400">Faturamento Real ERP</div>
            <div className="text-sm font-bold text-amber-400 font-mono">R$ 36.000,00</div>
          </div>
        </div>
      </div>

      {/* Main Pipeline Display - Mode Flow */}
      {viewMode === 'flow' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-3">
            {commercialFunnelStages.map((stage, idx) => {
              const isSelected = selectedStageId === stage.id;
              const isLast = idx === commercialFunnelStages.length - 1;

              return (
                <div
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`relative flex flex-col justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1e1e1e] border-amber-500/60 shadow-lg shadow-amber-500/5'
                      : 'bg-[#111111] border-zinc-800 hover:border-zinc-700 hover:bg-[#161616]'
                  }`}
                >
                  {/* Stage Order Badge & Indicator Button */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                      0{stage.order}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openMetricModal(stage.explanationMetricId);
                      }}
                      title="Entender Indicador"
                      className="p-1 rounded-md text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Stage Name */}
                  <div className="mb-3">
                    <h3 className="text-xs font-bold text-white line-clamp-2 leading-tight">
                      {stage.name}
                    </h3>
                    <p className="text-[10px] text-zinc-500 mt-0.5 line-clamp-1">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Primary Big Number */}
                  <div className="my-2 py-2 border-y border-zinc-800/50">
                    <div className="text-lg font-mono font-black text-white tracking-tight">
                      {stage.order === 7 
                        ? `R$ ${stage.volume.toLocaleString('pt-BR')}`
                        : stage.volume.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      {stage.unitLabel}
                    </div>
                  </div>

                  {/* Conversion & CPA Metrics */}
                  <div className="space-y-1.5 text-[11px] font-mono pt-1">
                    {stage.order > 1 ? (
                      <div className="flex items-center justify-between text-zinc-300">
                        <span className="text-zinc-500 text-[10px]">Conv. Etapa:</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                          <TrendingUp className="w-2.5 h-2.5" />
                          {stage.conversionFromPrevious.toFixed(1)}%
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-zinc-300">
                        <span className="text-zinc-500 text-[10px]">Base Topo:</span>
                        <span className="text-zinc-400">100%</span>
                      </div>
                    )}

                    {stage.dropOffRate > 0 && (
                      <div className="flex items-center justify-between text-zinc-400">
                        <span className="text-zinc-500 text-[10px]">Drop-off:</span>
                        <span className="text-rose-400 text-[10px] flex items-center gap-0.5">
                          <TrendingDown className="w-2.5 h-2.5" />
                          {stage.dropOffRate.toFixed(1)}%
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-zinc-300 pt-1 border-t border-zinc-800/40">
                      <span className="text-zinc-500 text-[10px] truncate">{stage.cpaLabel}:</span>
                      <span className="text-amber-300/90 font-medium">
                        R$ {stage.cpaStage.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>

                  {/* Action Link to Explain Indicator */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openMetricModal(stage.explanationMetricId);
                    }}
                    className="mt-3 w-full py-1.5 px-2 bg-zinc-900/90 hover:bg-amber-500/10 hover:border-amber-500/40 border border-zinc-800 rounded-lg text-[10px] font-medium text-zinc-300 hover:text-amber-400 transition-all flex items-center justify-center gap-1"
                  >
                    <span>Entender Indicador</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>

                  {/* Flow Arrow for wide screens */}
                  {!isLast && (
                    <div className="hidden xl:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-[#141414] border border-zinc-700 rounded-full items-center justify-center text-zinc-400 shadow">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bar Comparison Mode */}
      {viewMode === 'bars' && (
        <div className="space-y-3 bg-[#0e0e0e] border border-zinc-800/80 p-5 rounded-xl">
          <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-zinc-400" />
            <span>Visualização de afunilamento de volume e taxas de conversão acumuladas:</span>
          </div>

          <div className="space-y-4">
            {commercialFunnelStages.map((stage) => {
              // Using visual scaling so small stages like 12 contracts don't disappear completely
              const displayWidth = stage.order === 1 ? 100 : Math.max(12, Math.min(100, Math.log10(stage.volume + 1) * 27));

              return (
                <div key={stage.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-semibold text-zinc-200 flex items-center gap-2">
                      <span className="text-zinc-500">0{stage.order}.</span>
                      {stage.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400 font-bold">
                        {stage.order === 7 ? `R$ ${stage.volume.toLocaleString('pt-BR')}` : `${stage.volume} ${stage.unitLabel}`}
                      </span>
                      <button
                        onClick={() => openMetricModal(stage.explanationMetricId)}
                        className="group flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/60 hover:border-zinc-500 rounded-lg shadow-sm transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98]"
                        title={`Entender Etapa 0${stage.order}: ${stage.name}`}
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform duration-200" />
                        <span>Entender Etapa</span>
                      </button>
                    </div>
                  </div>

                  <div className="h-6 w-full bg-zinc-900 rounded-lg overflow-hidden flex items-center p-1 border border-zinc-800">
                    <div
                      className={`h-full rounded transition-all duration-700 flex items-center px-2 text-[10px] font-mono font-bold text-black ${
                        stage.order === 7
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-300'
                          : stage.order === 6
                          ? 'bg-gradient-to-r from-emerald-400 to-green-300'
                          : stage.order >= 3
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-400'
                          : 'bg-gradient-to-r from-zinc-400 to-zinc-300'
                      }`}
                      style={{ width: `${displayWidth}%` }}
                    >
                      {stage.order > 1 && (
                        <span>Conv: {stage.conversionFromPrevious.toFixed(1)}%</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono px-1">
                    <span>{stage.subtitle}</span>
                    <span>{stage.cpaLabel}: R$ {stage.cpaStage.toFixed(2)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Stage Detail Insight Drawer */}
      {selectedStage && (
        <div className="bg-[#101010] border border-zinc-800/90 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Detalhe da Etapa 0{selectedStage.order}: {selectedStage.name}
              </span>
              <span className="text-xs text-zinc-400">• {selectedStage.subtitle}</span>
            </div>
            <p className="text-xs text-zinc-300 max-w-3xl leading-relaxed">
              {selectedStage.description}
            </p>

            {/* Clarification for Stage 01: CPC vs CPL breakdown */}
            {selectedStage.order === 1 && (
              <div className="mt-3 p-3 rounded-lg bg-[#161616] border border-amber-500/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 font-mono">
                  <Info className="w-3.5 h-3.5" />
                  <span>Esclarecimento Técnico de Custo: CPC vs CPL</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="text-zinc-300">
                    • <strong className="text-white">R$ 1,53</strong> é o <span className="text-amber-400">CPC</span> (Custo por Clique no anúncio).
                  </span>
                  <span className="text-zinc-300">
                    • <strong className="text-emerald-400">R$ 6,42</strong> é o <span className="text-emerald-400">CPL Direto</span> (Custo por Lead na campanha direta).
                  </span>
                  <span className="text-zinc-300">
                    • <strong className="text-cyan-400">R$ 9,66</strong> é o <span className="text-cyan-400">CPL Geral</span> (consolidado de todas as fontes).
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Essa distinção comprova que o lead não custou caro: com R$ 1,53 compramos a atenção qualificada e convertemos em leads diretos a R$ 6,42.
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 self-end lg:self-center shrink-0">
            <div className="text-right">
              <div className="text-[10px] text-zinc-500 font-mono">CUSTO POR AVANÇO</div>
              <div className="text-sm font-mono font-bold text-amber-300">
                R$ {selectedStage.cpaStage.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
            </div>

            <button
              onClick={() => openMetricModal(selectedStage.explanationMetricId)}
              className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition-all shadow-md hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Ver Diagnóstico Completo</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CommercialFunnelPipeline;
