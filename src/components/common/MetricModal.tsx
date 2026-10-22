import React, { useState, useEffect } from 'react';
import { 
  X, 
  HelpCircle, 
  Code2, 
  Activity, 
  Zap, 
  CheckCircle2, 
  Terminal, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { MetricExplanation } from '../../types/modalTypes';
import { StatusBadge } from './StatusBadge';

export interface MetricModalProps {
  isOpen: boolean;
  metric: MetricExplanation | null;
  onClose: () => void;
}

export const MetricModal: React.FC<MetricModalProps> = ({
  isOpen,
  metric,
  onClose,
}) => {
  const [actionState, setActionState] = useState<'idle' | 'executing' | 'success'>('idle');
  const [executionLog, setExecutionLog] = useState<string | null>(null);

  // Reset state when opening a new metric
  useEffect(() => {
    if (isOpen) {
      setActionState('idle');
      setExecutionLog(null);
    }
  }, [isOpen, metric?.metricId]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !metric) return null;

  const handleSimulateAction = () => {
    setActionState('executing');
    setExecutionLog('Conectando ao Meta Marketing API Sidecar MCP...');

    setTimeout(() => {
      setExecutionLog('Enviando mutação de otimização para adset / CRM Kota...');
    }, 600);

    setTimeout(() => {
      setActionState('success');
      setExecutionLog(`[OK 200] Ação "${metric.recommendedAction.actionId}" disparada com sucesso via MCP.`);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-[#121212] border border-border rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-[#181818]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-brand-primary">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {metric.title}
                </h2>
                <span className="font-mono text-xs text-brand-primary px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-900/60">
                  {metric.technicalCode}
                </span>
              </div>
              <p className="text-xs text-text-muted mt-0.5">
                Guia Explicativo Dual-Audience • Gestão Kota Saúde e Beleza
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with 4 Sections */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* SECTION 1: VISÃO DE NEGÓCIO */}
          <div className="bg-[#161616] border border-border-subtle rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                1. O QUE VOCÊ ESTÁ VENDO AQUI? (Visão de Negócio & Vendas)
              </span>
            </div>
            
            <p className="text-sm text-text-primary leading-relaxed">
              {metric.businessView.explanation}
            </p>

            <div className="mt-3.5 pt-3 border-t border-[#242424] flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-xs text-zinc-300 leading-snug">
                <strong className="text-white">Impacto no Caixa: </strong>
                {metric.businessView.impact}
              </p>
            </div>
          </div>

          {/* SECTION 2: VISÃO TÉCNICA META ADS */}
          <div className="bg-[#161616] border border-border-subtle rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                2. VISÃO TÉCNICA META ADS & MCP API
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-text-muted">MÉTRICA OFICIAL (GRAPH API)</span>
                <p className="text-xs font-mono text-zinc-200 bg-black/60 px-2.5 py-1.5 rounded border border-border-subtle">
                  {metric.technicalView.officialMetric}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-text-muted">EVENTO DE OTIMIZAÇÃO</span>
                <p className="text-xs font-mono text-zinc-200 bg-black/60 px-2.5 py-1.5 rounded border border-border-subtle">
                  {metric.technicalView.optimizationEvent}
                </p>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <span className="text-[11px] font-mono text-text-muted">FÓRMULA MATEMÁTICA</span>
              <p className="text-xs font-mono text-brand-primary bg-black/60 px-2.5 py-1.5 rounded border border-border-subtle">
                {metric.technicalView.formula}
              </p>
            </div>

            <div className="mt-3 space-y-1">
              <span className="text-[11px] font-mono text-text-muted">ENDPOINT MCP</span>
              <p className="text-[11px] font-mono text-zinc-400 bg-black/60 px-2.5 py-1.5 rounded border border-border-subtle truncate select-all">
                {metric.technicalView.mcpEndpoint}
              </p>
            </div>

            {metric.technicalView.auctionParameters && (
              <p className="text-xs text-text-muted mt-2">
                <strong className="text-zinc-400">Parâmetros do Leilão: </strong>
                {metric.technicalView.auctionParameters}
              </p>
            )}
          </div>

          {/* SECTION 3: DIAGNÓSTICO ATUAL NA KOTA */}
          <div className="bg-[#161616] border border-border-subtle rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  3. DIAGNÓSTICO ATUAL NA KOTA (Setembro 2026 vs Histórico)
                </span>
              </div>
              <StatusBadge status={metric.kotaDiagnosis.status} size="sm" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-3">
              <div className="bg-black/40 border border-border-subtle p-3 rounded-lg">
                <span className="text-[11px] text-text-muted">Setembro 2026</span>
                <div className="text-xl font-extrabold text-white font-mono mt-0.5">
                  {metric.kotaDiagnosis.septValue}
                </div>
              </div>

              {metric.kotaDiagnosis.aprilValue && (
                <div className="bg-black/40 border border-border-subtle p-3 rounded-lg">
                  <span className="text-[11px] text-text-muted">Abril 2026 (Anterior)</span>
                  <div className="text-xl font-extrabold text-zinc-400 font-mono mt-0.5">
                    {metric.kotaDiagnosis.aprilValue}
                  </div>
                </div>
              )}

              {metric.kotaDiagnosis.highlight && (
                <div className="col-span-2 sm:col-span-1 bg-black/40 border border-border-subtle p-3 rounded-lg flex flex-col justify-center">
                  <span className="text-[11px] text-text-muted">Variação Real</span>
                  <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {metric.kotaDiagnosis.highlight}
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed mt-2">
              {metric.kotaDiagnosis.details}
            </p>
          </div>

          {/* SECTION 4: AÇÃO RECOMENDADA EM 1 CLIQUE */}
          <div className="bg-gradient-to-br from-[#1a1714] to-[#141414] border border-amber-500/30 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indicator-amber" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indicator-amber">
                  4. AÇÃO RECOMENDADA EM 1 CLIQUE
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">Meta MCP Executor</span>
            </div>

            <h4 className="text-sm font-semibold text-white mt-1">
              {metric.recommendedAction.title}
            </h4>
            <p className="text-xs text-zinc-300 mt-1 leading-snug">
              {metric.recommendedAction.description}
            </p>

            {/* MCP Command Preview */}
            <div className="mt-3 bg-black/80 rounded-lg p-2.5 border border-zinc-800 font-mono text-[11px] text-zinc-300 flex items-center justify-between gap-2 overflow-x-auto">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-indicator-green shrink-0" />
                <span className="text-indicator-green">$</span>
                <span className="text-zinc-200 select-all">{metric.recommendedAction.mcpCommand}</span>
              </div>
            </div>

            {/* Feedback / Log */}
            {executionLog && (
              <div className="mt-3 p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center gap-2 text-xs font-mono">
                {actionState === 'executing' ? (
                  <div className="w-3 h-3 rounded-full border-2 border-indicator-amber border-t-transparent animate-spin shrink-0" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-indicator-green shrink-0" />
                )}
                <span className={actionState === 'success' ? 'text-indicator-green' : 'text-zinc-300'}>
                  {executionLog}
                </span>
              </div>
            )}

            {/* Trigger Button */}
            <div className="mt-4 flex items-center justify-end">
              <button
                onClick={handleSimulateAction}
                disabled={actionState === 'executing'}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  actionState === 'success'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-indicator-amber hover:bg-amber-400 text-black shadow-glow-amber'
                }`}
              >
                {actionState === 'executing' ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Disparando comando MCP...</span>
                  </>
                ) : actionState === 'success' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Otimização Executada com Sucesso</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 fill-black" />
                    <span>{metric.recommendedAction.buttonLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-border bg-[#151515] flex items-center justify-between text-xs text-text-muted">
          <span>StartMedia Intelligence • Conexão Meta Ads MCP Ativa</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-colors"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};
