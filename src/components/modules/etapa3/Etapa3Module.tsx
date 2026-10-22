import React from 'react';
import { 
  Cpu, 
  TrendingUp, 
  ShieldCheck
} from 'lucide-react';
import { QuickActionsPanel } from './QuickActionsPanel';
import { PredictiveMatrix } from './PredictiveMatrix';
import { etapa3SummaryData } from '../../../data/etapa3Data';

export const Etapa3Module: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-[#11161d] via-[#101416] to-[#121212] border border-cyan-900/40 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>ETAPA 3 • MATRIZ PREDITIVA & AÇÕES EM 1 CLIQUE</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Inteligência Preditiva
          </h1>
          <p className="text-sm text-text-secondary mt-1.5 max-w-2xl leading-relaxed">
            Painel preditivo avançado que correlaciona o desempenho dos anúncios, a velocidade de atendimento no WhatsApp e o faturamento real no ERP Kota Dental.
          </p>
        </div>

        {/* Quick Highlights Metrics Bar */}
        <div className="flex items-center gap-3 relative z-10 self-start md:self-auto flex-wrap sm:flex-nowrap">
          <div className="bg-[#0b0e12] border border-cyan-900/40 p-3 rounded-xl min-w-[120px]">
            <div className="text-[10px] font-mono uppercase text-zinc-400 flex items-center gap-1">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span>Funcionalidades</span>
            </div>
            <div className="text-xl font-black text-white font-mono mt-0.5">
              {etapa3SummaryData.totalFeatures}
            </div>
            <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
              4 Pilares Ativos
            </div>
          </div>

          <div className="bg-[#0b0e12] border border-emerald-900/40 p-3 rounded-xl min-w-[130px]">
            <div className="text-[10px] font-mono uppercase text-zinc-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span>Upside de Receita</span>
            </div>
            <div className="text-xl font-black text-emerald-400 font-mono mt-0.5">
              {etapa3SummaryData.projectedRevenueUplift}
            </div>
            <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
              Via Rebalanceamento
            </div>
          </div>

          <div className="bg-[#0b0e12] border border-zinc-800 p-3 rounded-xl min-w-[120px]">
            <div className="text-[10px] font-mono uppercase text-zinc-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              <span>Redução CAC</span>
            </div>
            <div className="text-xl font-black text-white font-mono mt-0.5">
              {etapa3SummaryData.cacReductionPotential}
            </div>
            <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
              Margem Protegida
            </div>
          </div>
        </div>
      </div>

      {/* Part 1: Quick Operational Actions (1-Click) */}
      <QuickActionsPanel />

      {/* Part 2: The 20 Predictive Features across 4 Pillars */}
      <PredictiveMatrix />
    </div>
  );
};

export default Etapa3Module;
