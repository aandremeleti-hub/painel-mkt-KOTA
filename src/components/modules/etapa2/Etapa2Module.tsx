import React from 'react';
import { CommercialFunnelPipeline } from './CommercialFunnelPipeline';
import { SpeedToLeadMonitor } from './SpeedToLeadMonitor';
import { useDashboard } from '../../layout/DashboardLayout';
import { 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Briefcase
} from 'lucide-react';

export const Etapa2Module: React.FC = () => {
  const { openMetricModal } = useDashboard();

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Hero Banner - Executive Synthesis */}
      <div className="bg-gradient-to-r from-[#161616] via-[#141414] to-[#121212] border border-zinc-800 p-6 rounded-2xl shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>MÓDULO ETAPA 2 • VISÃO COMERCIAL & ERP KOTA</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Funil Comercial & Velocidade Speed-to-Lead
          </h1>
          <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
            Conexão direta entre o investimento de tráfego Meta Ads (R$ 7.546) e os contratos faturados no ERP da Kota Dental (R$ 36.000), mapeando cada segundo do tempo de resposta da equipe comercial.
          </p>
        </div>

        {/* Board Alignment Status Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#0c0c0c] p-3.5 rounded-xl border border-zinc-800 shrink-0">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-zinc-400">DEMANDA DIRETORIA KOTA</div>
            <div className="text-xs font-bold text-white">Alinhamento Waldir Ward & Lucas</div>
            <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3" />
              <span>Rastreamento Pós-Clique Homologado</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Executive KPI Synthesis Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5">
        {/* Investimento Mídia */}
        <div className="bg-[#141414] border border-zinc-800 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-700 transition-all">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-[11px] font-mono uppercase">Invest. Mídia</span>
            <DollarSign className="w-3.5 h-3.5 text-zinc-400" />
          </div>
          <div>
            <div className="text-xl font-mono font-black text-white">R$ 7.546</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Setembro/2026</div>
          </div>
          <button
            onClick={() => openMetricModal('funnel_stage_1_clicks')}
            className="mt-2 text-[10px] text-zinc-400 hover:text-amber-400 font-mono text-left"
          >
            4.930 cliques gerados →
          </button>
        </div>

        {/* Faturamento ERP */}
        <div className="bg-[#141414] border border-amber-500/30 p-4 rounded-xl flex flex-col justify-between hover:border-amber-500/50 transition-all bg-gradient-to-b from-[#141414] to-[#181510]">
          <div className="flex items-center justify-between text-amber-400 mb-2">
            <span className="text-[11px] font-mono uppercase font-bold">Faturado ERP</span>
            <Building2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xl font-mono font-black text-amber-400">R$ 36.000</div>
            <div className="text-[10px] text-emerald-400 font-mono mt-0.5">+140% vs histórico</div>
          </div>
          <button
            onClick={() => openMetricModal('funnel_stage_7_revenue')}
            className="mt-2 text-[10px] text-amber-400 hover:text-amber-300 font-mono text-left font-semibold"
          >
            [ ? Explicar Faturamento ]
          </button>
        </div>

        {/* ROAS Comercial */}
        <div className="bg-[#141414] border border-emerald-500/30 p-4 rounded-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all">
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <span className="text-[11px] font-mono uppercase font-bold">ROAS Comercial</span>
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xl font-mono font-black text-emerald-400">4,77x</div>
            <div className="text-[10px] text-zinc-400 font-mono mt-0.5">R$ 4,77 p/ R$ 1 invest.</div>
          </div>
          <button
            onClick={() => openMetricModal('roas_comercial')}
            className="mt-2 text-[10px] text-emerald-400 hover:text-emerald-300 font-mono text-left font-semibold"
          >
            [ ? Explicar ROAS ]
          </button>
        </div>

        {/* CAC Comercial */}
        <div className="bg-[#141414] border border-zinc-800 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-700 transition-all">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-[11px] font-mono uppercase">CAC Comercial</span>
            <DollarSign className="w-3.5 h-3.5 text-zinc-400" />
          </div>
          <div>
            <div className="text-xl font-mono font-black text-white">R$ 628,83</div>
            <div className="text-[10px] text-emerald-400 font-mono mt-0.5">-45.3% vs meses ant.</div>
          </div>
          <button
            onClick={() => openMetricModal('cac_comercial')}
            className="mt-2 text-[10px] text-zinc-400 hover:text-amber-400 font-mono text-left"
          >
            [ ? Explicar CAC ]
          </button>
        </div>

        {/* TMPCC Speed-to-Lead */}
        <div className="bg-[#141414] border border-emerald-500/30 p-4 rounded-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all">
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <span className="text-[11px] font-mono uppercase font-bold">TMPCC Resposta</span>
            <Clock className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xl font-mono font-black text-emerald-400">4.8 min</div>
            <div className="text-[10px] text-emerald-300 font-mono mt-0.5">Meta &le; 5 min (Superada)</div>
          </div>
          <button
            onClick={() => openMetricModal('tmpcc')}
            className="mt-2 text-[10px] text-emerald-400 hover:text-emerald-300 font-mono text-left font-semibold"
          >
            [ ? Explicar TMPCC ]
          </button>
        </div>

        {/* CPDQ Diálogo Qualificado */}
        <div className="bg-[#141414] border border-cyan-500/30 p-4 rounded-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all">
          <div className="flex items-center justify-between text-cyan-400 mb-2">
            <span className="text-[11px] font-mono uppercase font-bold">CPDQ Real</span>
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xl font-mono font-black text-cyan-400">R$ 25,38</div>
            <div className="text-[10px] text-zinc-400 font-mono mt-0.5">208 diálogos válidos</div>
          </div>
          <button
            onClick={() => openMetricModal('cpdq')}
            className="mt-2 text-[10px] text-cyan-400 hover:text-cyan-300 font-mono text-left font-semibold"
          >
            [ ? Explicar CPDQ ]
          </button>
        </div>
      </div>

      {/* Component 1: Commercial Funnel Pipeline (7 Stages) */}
      <section>
        <CommercialFunnelPipeline />
      </section>

      {/* Component 2: Speed to Lead Monitor & Latency Simulator */}
      <section>
        <SpeedToLeadMonitor />
      </section>

      {/* Executive Directorial Takeaways for Board */}
      <div className="bg-[#141414] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              Síntese Executiva para a Diretoria da Kota Dental
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Relatório de Performance Setembro/2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#0e0e0e] border border-zinc-800/80 p-4 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center font-mono">1</span>
              <span>Retorno Financeiro Comprovado</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              O investimento de R$ 7.546 em anúncios gerou 12 vendas diretas contabilizadas no ERP com ticket médio de R$ 3.000, perfazendo R$ 36.000 faturados (ROAS 4,77x) e CAC saudável de R$ 628,83.
            </p>
          </div>

          <div className="bg-[#0e0e0e] border border-zinc-800/80 p-4 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <span className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center font-mono">2</span>
              <span>Eficiência do Filtro Anti-Curioso</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Dos 320 contatos brutos no WhatsApp, 208 foram validados e 118 confirmados como proprietários de clínicas Tier A. O filtro descartou 112 curiosos sem gastar tempo nobre dos consultores.
            </p>
          </div>

          <div className="bg-[#0e0e0e] border border-zinc-800/80 p-4 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
              <span className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center font-mono">3</span>
              <span>Domínio da Janela Áurea (&lt; 5 min)</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              O tempo de primeiro contato caiu de 18.2 min para 4.8 min, com 78,4% dos contatos abordados em menos de 5 minutos, garantindo que o lead fosse atendido no pico do interesse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Etapa2Module;
