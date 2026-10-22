import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  Loader2, 
  TrendingUp, 
  ShieldCheck, 
  PauseCircle, 
  Play,
  ArrowUpRight,
  Info
} from 'lucide-react';
import { quickActionsData } from '../../../data/etapa3Data';
import { QuickActionItem } from '../../../types/predictiveTypes';

export const QuickActionsPanel: React.FC = () => {
  // Track action execution state per action id: 'idle' | 'executing' | 'success'
  const [actionStates, setActionStates] = useState<Record<string, 'idle' | 'executing' | 'success'>>({});

  const handleExecuteAction = (action: QuickActionItem) => {
    // Set executing state
    setActionStates(prev => ({ ...prev, [action.id]: 'executing' }));
    
    // Simulate application to ads manager cleanly
    setTimeout(() => {
      setActionStates(prev => ({ ...prev, [action.id]: 'success' }));
    }, 1200);
  };

  const getActionIcon = (actionId: string) => {
    switch (actionId) {
      case 'rebalance_budget':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'lock_scale_poe':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'pause_fatigued_creative':
        return <PauseCircle className="w-5 h-5 text-rose-400" />;
      default:
        return <Zap className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getBorderColor = (action: QuickActionItem, state?: string) => {
    if (state === 'success') return 'border-emerald-500/80 bg-emerald-950/15 shadow-[0_0_24px_rgba(16,185,129,0.18)]';
    if (state === 'executing') return 'border-cyan-500/80 bg-cyan-950/10 animate-pulse';
    if (action.severity === 'critical') return 'border-rose-900/50 hover:border-rose-600/60 bg-[#141414]';
    if (action.severity === 'warning') return 'border-amber-900/50 hover:border-amber-600/60 bg-[#141414]';
    return 'border-zinc-800 hover:border-emerald-800/60 bg-[#141414]';
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white tracking-tight">
                Ações Recomendadas em 1 Clique
              </h2>
              <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 font-semibold">
                Otimização Pronta
              </span>
            </div>
            <p className="text-xs text-text-muted mt-0.5">
              Ações estratégicas orientadas a faturamento para aplicar no gerenciador de anúncios com um único clique.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-300 bg-zinc-900/90 px-3 py-1.5 rounded-lg border border-zinc-800 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Monitoramento Ativo: <strong className="text-emerald-400 font-normal">3 Oportunidades Identificadas</strong></span>
        </div>
      </div>

      {/* 3 Action Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {quickActionsData.map((action) => {
          const state = actionStates[action.id] || 'idle';
          const isSuccess = state === 'success';

          return (
            <div
              key={action.id}
              className={`rounded-xl border p-5 transition-all duration-200 flex flex-col justify-between ${getBorderColor(action, state)}`}
            >
              <div>
                {/* Header row: Icon, Category Badge & Severity Pill */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      {getActionIcon(action.id)}
                    </div>
                    <div>
                      {action.categoryBadge && (
                        <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
                          {action.categoryBadge}
                        </span>
                      )}
                      <h3 className="text-sm font-bold text-white mt-0.5 leading-snug">
                        {action.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded whitespace-nowrap ${
                    action.severity === 'critical'
                      ? 'bg-rose-950/60 border border-rose-800/60 text-rose-300'
                      : action.severity === 'warning'
                      ? 'bg-amber-950/60 border border-amber-800/60 text-amber-300'
                      : 'bg-emerald-950/60 border border-emerald-800/60 text-emerald-300'
                  }`}>
                    {action.badge}
                  </span>
                </div>

                {/* Business Description */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  {action.description}
                </p>

                {/* Key Business Highlights */}
                {action.businessHighlights && action.businessHighlights.length > 0 && (
                  <div className="space-y-1.5 mb-3.5 bg-black/30 p-2.5 rounded-lg border border-zinc-800/60">
                    <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                      <Info className="w-3 h-3 text-cyan-400" />
                      <span>Detalhes da Aplicação:</span>
                    </div>
                    <ul className="space-y-1">
                      {action.businessHighlights.map((hl, i) => (
                        <li key={i} className="text-[11px] text-zinc-300 flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold shrink-0">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Projected Impact Box */}
                <div className="bg-[#0e0e0e] border border-zinc-800/80 rounded-lg p-2.5 mb-4">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-zinc-400 mb-0.5">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span>Impacto Estimado no Caixa:</span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-300">
                    {action.projectedImpact}
                  </p>
                </div>
              </div>

              {/* Bottom Actions & Success Confirmation */}
              <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                {isSuccess && action.appliedSummary ? (
                  <div className="bg-emerald-950/30 border border-emerald-800/60 rounded-lg p-3 space-y-2 animate-fadeIn">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{action.appliedSummary.title}</span>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed">
                      {action.appliedSummary.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-emerald-900/40">
                      {action.appliedSummary.metrics.map((m, idx) => (
                        <div key={idx} className="bg-black/40 p-1.5 rounded border border-emerald-900/30">
                          <div className="text-[9px] uppercase text-zinc-400 font-medium">{m.label}</div>
                          <div className="text-[11px] font-bold text-emerald-300">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* 1-Click Execution Button */}
                <button
                  onClick={() => handleExecuteAction(action)}
                  disabled={state === 'executing' || isSuccess}
                  className={`w-full py-2.5 px-4 rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isSuccess
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                      : state === 'executing'
                      ? 'bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-not-allowed'
                      : action.severity === 'critical'
                      ? 'bg-rose-950/80 text-rose-200 border border-rose-800 hover:bg-rose-900 hover:border-rose-600 shadow-sm'
                      : action.severity === 'warning'
                      ? 'bg-amber-950/80 text-amber-200 border border-amber-800 hover:bg-amber-900 hover:border-amber-600 shadow-sm'
                      : 'bg-emerald-950/80 text-emerald-200 border border-emerald-800 hover:bg-emerald-900 hover:border-emerald-600 shadow-sm'
                  }`}
                >
                  {state === 'executing' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                      <span>Aplicando otimização no gerenciador...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Recomendação Aplicada com Sucesso</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{action.buttonLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
