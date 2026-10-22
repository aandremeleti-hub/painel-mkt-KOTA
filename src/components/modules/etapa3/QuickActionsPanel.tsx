import React, { useState } from 'react';
import { 
  Zap, 
  Terminal, 
  CheckCircle2, 
  Loader2, 
  TrendingUp, 
  ShieldCheck, 
  PauseCircle, 
  ChevronDown, 
  ChevronUp, 
  Server,
  Play
} from 'lucide-react';
import { quickActionsData } from '../../../data/etapa3Data';
import { QuickActionItem } from '../../../types/predictiveTypes';

export const QuickActionsPanel: React.FC = () => {
  // Track action execution state per action id: 'idle' | 'executing' | 'success'
  const [actionStates, setActionStates] = useState<Record<string, 'idle' | 'executing' | 'success'>>({});
  // Track open telemetry terminal per action id
  const [activeTerminalId, setActiveTerminalId] = useState<string | null>(null);
  // Terminal log lines per action
  const [terminalLogs, setTerminalLogs] = useState<Record<string, string[]>>({});
  // View raw payload toggle
  const [expandedPayloads, setExpandedPayloads] = useState<Record<string, boolean>>({});

  const handleExecuteAction = (action: QuickActionItem) => {
    // Set executing state
    setActionStates(prev => ({ ...prev, [action.id]: 'executing' }));
    setActiveTerminalId(action.id);
    
    // Initialize log stream
    setTerminalLogs(prev => ({
      ...prev,
      [action.id]: [
        `[${new Date().toLocaleTimeString()}] INICIANDO CHAMADA MCP: ${action.mcpTool}...`,
        `[${new Date().toLocaleTimeString()}] Conectando ao Meta Marketing API Sidecar via stdio...`,
        `[${new Date().toLocaleTimeString()}] Autenticação Bearer Token confirmada para act_204128509890123.`
      ]
    }));

    // Step 2
    setTimeout(() => {
      setTerminalLogs(prev => ({
        ...prev,
        [action.id]: [
          ...(prev[action.id] || []),
          `[${new Date().toLocaleTimeString()}] POST ${action.endpoint}`,
          `[${new Date().toLocaleTimeString()}] Payload validado contra schema oficial Meta Graph API v21.0.`
        ]
      }));
    }, 700);

    // Step 3 (Success)
    setTimeout(() => {
      setActionStates(prev => ({ ...prev, [action.id]: 'success' }));
      setTerminalLogs(prev => ({
        ...prev,
        [action.id]: [
          ...(prev[action.id] || []),
          `[${new Date().toLocaleTimeString()}] RESPOSTA RECEBIDA: HTTP 200 OK`,
          `[${new Date().toLocaleTimeString()}] Mutação confirmada: ${action.responsePayload.mutation_id || 'COMMITTED'}`,
          `[${new Date().toLocaleTimeString()}] Impacto aplicado: ${action.projectedImpact}`
        ]
      }));
    }, 1500);
  };

  const togglePayloadView = (actionId: string) => {
    setExpandedPayloads(prev => ({ ...prev, [actionId]: !prev[actionId] }));
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
    if (state === 'success') return 'border-emerald-500/80 bg-emerald-950/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]';
    if (state === 'executing') return 'border-cyan-500/80 bg-cyan-950/10 animate-pulse';
    if (action.severity === 'critical') return 'border-rose-900/50 hover:border-rose-600/60 bg-[#141414]';
    if (action.severity === 'warning') return 'border-amber-900/50 hover:border-amber-600/60 bg-[#141414]';
    return 'border-border hover:border-emerald-800/60 bg-[#141414]';
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white tracking-tight">
                Gatilhos de Ação Operacional em 1 Clique
              </h2>
              <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 font-semibold">
                Meta MCP Ready
              </span>
            </div>
            <p className="text-xs text-text-muted">
              Comandos com telemetria direta para a API de Marketing da Meta sem necessidade de navegação manual.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 bg-zinc-900/90 px-3 py-1.5 rounded-lg border border-zinc-800 self-start sm:self-auto">
          <Server className="w-3.5 h-3.5 text-cyan-400" />
          <span>Sidecar: <strong className="text-emerald-400 font-normal">Online</strong> (Latência: 14ms)</span>
        </div>
      </div>

      {/* 3 Action Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {quickActionsData.map((action) => {
          const state = actionStates[action.id] || 'idle';
          const isTerminalOpen = activeTerminalId === action.id;
          const isPayloadExpanded = !!expandedPayloads[action.id];
          const logs = terminalLogs[action.id] || [];

          return (
            <div
              key={action.id}
              className={`rounded-xl border p-5 transition-all duration-200 flex flex-col justify-between ${getBorderColor(action, state)}`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      {getActionIcon(action.id)}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-cyan-400 font-semibold px-1.5 py-0.5 rounded bg-cyan-950/50 border border-cyan-800/40">
                        {action.mcpTool}
                      </span>
                      <h3 className="text-sm font-bold text-white mt-1 leading-snug">
                        {action.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded whitespace-nowrap ${
                    action.severity === 'critical'
                      ? 'bg-rose-950/60 border border-rose-800/60 text-rose-300'
                      : action.severity === 'warning'
                      ? 'bg-amber-950/60 border border-amber-800/60 text-amber-300'
                      : 'bg-emerald-950/60 border border-emerald-800/60 text-emerald-300'
                  }`}>
                    {action.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                  {action.description}
                </p>

                {/* Projected Impact Box */}
                <div className="bg-[#0e0e0e] border border-zinc-800/80 rounded-lg p-2.5 mb-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 mb-0.5">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span>IMPACTO ESTIMADO NO CAIXA:</span>
                  </div>
                  <p className="text-xs font-medium text-emerald-300">
                    {action.projectedImpact}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                {/* Main 1-Click Execution Button */}
                <button
                  onClick={() => handleExecuteAction(action)}
                  disabled={state === 'executing'}
                  className={`w-full py-2.5 px-4 rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    state === 'success'
                      ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-600/40'
                      : state === 'executing'
                      ? 'bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-not-allowed'
                      : action.severity === 'critical'
                      ? 'bg-rose-950/80 text-rose-200 border border-rose-800 hover:bg-rose-900/90 hover:border-rose-600 shadow-sm'
                      : action.severity === 'warning'
                      ? 'bg-amber-950/80 text-amber-200 border border-amber-800 hover:bg-amber-900/90 hover:border-amber-600 shadow-sm'
                      : 'bg-emerald-950/80 text-emerald-200 border border-emerald-800 hover:bg-emerald-900/90 hover:border-emerald-600 shadow-sm'
                  }`}
                >
                  {state === 'executing' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                      <span>Transmitindo via Meta MCP...</span>
                    </>
                  ) : state === 'success' ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Comando Aplicado com Sucesso</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{action.buttonLabel}</span>
                    </>
                  )}
                </button>

                {/* Toggle Telemetry & Payload Buttons */}
                <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1">
                  <button
                    onClick={() => setActiveTerminalId(isTerminalOpen ? null : action.id)}
                    className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                  >
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>{isTerminalOpen ? 'Ocultar Terminal' : 'Ver Terminal Telemetria'}</span>
                  </button>

                  <button
                    onClick={() => togglePayloadView(action.id)}
                    className="flex items-center gap-0.5 hover:text-zinc-200 transition-colors cursor-pointer font-mono text-[10px]"
                  >
                    <span>Payload</span>
                    {isPayloadExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {/* Simulated Telemetry Terminal */}
                {isTerminalOpen && (
                  <div className="mt-2 bg-[#090909] border border-cyan-900/50 rounded-lg p-3 font-mono text-[11px] text-zinc-300 space-y-1 shadow-inner">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 mb-2 text-[10px] text-zinc-400">
                      <div className="flex items-center gap-1.5 text-cyan-400">
                        <Terminal className="w-3 h-3" />
                        <span>MCP Console • {action.mcpTool}</span>
                      </div>
                      <span className="text-[9px] text-zinc-400">stdio://meta_marketing_api</span>
                    </div>

                    <div className="max-h-36 overflow-y-auto space-y-1 pr-1 font-mono text-[10px] leading-relaxed">
                      {logs.length > 0 ? (
                        logs.map((log, idx) => (
                          <div 
                            key={idx} 
                            className={
                              log.includes('RESPOSTA') || log.includes('Mutação confirmada')
                                ? 'text-emerald-400' 
                                : log.includes('POST') 
                                ? 'text-cyan-300' 
                                : 'text-zinc-400'
                            }
                          >
                            {log}
                          </div>
                        ))
                      ) : (
                        <div className="text-zinc-400 italic">
                          Aguardando disparo. Clique em "{action.buttonLabel}" para inicializar a sessão MCP.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Raw JSON Payload Inspector */}
                {isPayloadExpanded && (
                  <div className="mt-2 bg-[#0a0a0a] border border-zinc-800 rounded-lg p-2.5 font-mono text-[10px] text-zinc-400 overflow-x-auto">
                    <div className="text-zinc-400 font-semibold mb-1 uppercase tracking-wider text-[9px]">
                      // Payload enviado ao endpoint Meta MCP:
                    </div>
                    <pre className="text-cyan-300">
                      {JSON.stringify(action.payload, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
