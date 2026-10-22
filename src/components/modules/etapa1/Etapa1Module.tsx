import React from 'react';
import { BigNumbersGrid } from './BigNumbersGrid';
import { DiarizationCharts } from './DiarizationCharts';
import { DemographicsGrid } from './DemographicsGrid';
import { CreativesTable } from './CreativesTable';
import { Database, ShieldCheck } from 'lucide-react';

interface Etapa1ModuleProps {
  onOpenModal: (metricId: string) => void;
}

export const Etapa1Module: React.FC<Etapa1ModuleProps> = ({ onOpenModal }) => {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Banner de Contexto da Etapa 1 */}
      <div className="bg-gradient-to-r from-[#11161b] via-[#101419] to-[#0c0d10] border border-cyan-900/40 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700 uppercase">
              Etapa 1 • Módulo Mídia & Demografia
            </span>
            <span className="text-xs text-text-muted">• Substituição Integral do PDF de 35 páginas</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Painel Executivo de Tráfego & Audiências Meta Ads
          </h1>
          <p className="text-xs md:text-sm text-text-secondary max-w-3xl leading-relaxed">
            Consolidação em tempo real dos 30 dias de Setembro com comparativo MoM (vs Agosto/Abril), diarização contínua de custos e matriz de público orientada a alta renda.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 border border-border text-xs font-mono">
            <Database className="w-4 h-4 text-cyan-400" />
            <div>
              <div className="text-[10px] text-text-muted">Fonte Primária:</div>
              <div className="font-semibold text-white">Meta Marketing API</div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 border border-border text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="text-[10px] text-text-muted">Acurácia Auditada:</div>
              <div className="font-semibold text-emerald-400">100% dos Dados Reais</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. SEÇÃO DE BIG NUMBERS MoM */}
      <section id="bignumbers" className="space-y-4">
        <BigNumbersGrid onOpenModal={onOpenModal} />
      </section>

      {/* 2. SEÇÃO DE DIARIZAÇÃO (INVESTIMENTO VS LEADS E CPL DIÁRIO) */}
      <section id="diarization" className="space-y-4">
        <DiarizationCharts />
      </section>

      {/* 3. SEÇÃO DE MATRIZ DEMOGRÁFICA (6 EIXOS) */}
      <section id="demographics" className="space-y-4">
        <DemographicsGrid />
      </section>

      {/* 4. SEÇÃO DE PERFORMANCE POR CRIATIVO */}
      <section id="creatives" className="space-y-4">
        <CreativesTable onOpenModal={onOpenModal} />
      </section>
    </div>
  );
};
