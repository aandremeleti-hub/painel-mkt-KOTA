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
  Briefcase,
  Filter,
  Target,
  HelpCircle
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
            <div className="text-xs font-bold text-white">Alinhamento Estratégico</div>
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
            <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Período Consolidado</div>
          </div>
          <button
            onClick={() => openMetricModal('funnel_stage_1_clicks')}
            className="mt-2 text-[10px] text-zinc-400 hover:text-amber-400 font-mono text-left flex items-center gap-1"
          >
            <span>4.930 cliques gerados</span>
            <span>→</span>
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
            className="mt-2 text-[10px] text-amber-400 hover:text-amber-300 font-mono text-left font-semibold flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Entender Faturamento</span>
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
            className="mt-2 text-[10px] text-emerald-400 hover:text-emerald-300 font-mono text-left font-semibold flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Entender ROAS</span>
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
            className="mt-2 text-[10px] text-zinc-400 hover:text-amber-400 font-mono text-left flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Entender CAC</span>
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
            className="mt-2 text-[10px] text-emerald-400 hover:text-emerald-300 font-mono text-left font-semibold flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Entender TMPCC</span>
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
            className="mt-2 text-[10px] text-cyan-400 hover:text-cyan-300 font-mono text-left font-semibold flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Entender CPDQ</span>
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
      <div className="bg-[#141414] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Síntese Executiva para a Diretoria da Kota Dental
              </h3>
              <p className="text-xs text-zinc-400">
                Alinhamento Estratégico • Dados consolidados dos últimos 30 dias
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full self-start sm:self-auto flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Auditoria ERP Validada</span>
          </span>
        </div>

        {/* High-Impact Executive Grid of 7 Mini-Cards / Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {/* 1. Investimento em Anúncios */}
          <div className="bg-[#0f0f0f] border border-blue-500/20 hover:border-blue-500/40 p-3.5 rounded-xl flex flex-col justify-between transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Investimento</span>
              <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <DollarSign className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-lg font-mono font-black text-white group-hover:text-blue-300 transition-colors">
                R$ 7.546
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                4.930 cliques gerados
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-zinc-800/60 text-[9px] font-mono text-zinc-400">
              CPC Médio: R$ 1,53
            </div>
          </div>

          {/* 2. Vendas Fechadas */}
          <div className="bg-[#0f0f0f] border border-indigo-500/20 hover:border-indigo-500/40 p-3.5 rounded-xl flex flex-col justify-between transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Vendas Fechadas</span>
              <div className="p-1.5 rounded-md bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-lg font-mono font-black text-indigo-200 group-hover:text-indigo-100 transition-colors">
                12 contratos
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                35,3% conv. de demos
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-zinc-800/60 text-[9px] font-mono text-zinc-400">
              CAC: R$ 628,83
            </div>
          </div>

          {/* 3. Ticket Médio */}
          <div className="bg-[#0f0f0f] border border-purple-500/20 hover:border-purple-500/40 p-3.5 rounded-xl flex flex-col justify-between transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Ticket Médio</span>
              <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <Target className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-lg font-mono font-black text-purple-200 group-hover:text-purple-100 transition-colors">
                R$ 3.000
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                Por pedido faturado
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-zinc-800/60 text-[9px] font-mono text-zinc-400">
              Equipamentos & Estética
            </div>
          </div>

          {/* 4. Faturamento Real (Destaque Principal) */}
          <div className="bg-gradient-to-b from-[#181510] to-[#0f0f0f] border border-amber-500/40 hover:border-amber-500/70 p-3.5 rounded-xl flex flex-col justify-between transition-all group shadow-lg shadow-amber-500/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">Faturamento Real</span>
              <div className="p-1.5 rounded-md bg-amber-500/15 text-amber-400 group-hover:bg-amber-500/30 transition-colors">
                <Building2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-lg font-mono font-black text-amber-400 group-hover:text-amber-300 transition-colors">
                R$ 36.000
              </div>
              <div className="text-[10px] font-mono text-emerald-400 mt-0.5 font-semibold">
                +140% vs histórico
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-amber-500/20 text-[9px] font-mono text-amber-300/80">
              Auditado no ERP Kota
            </div>
          </div>

          {/* 5. Retorno (ROAS) */}
          <div className="bg-[#0f0f0f] border border-emerald-500/20 hover:border-emerald-500/40 p-3.5 rounded-xl flex flex-col justify-between transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Retorno (ROAS)</span>
              <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-lg font-mono font-black text-emerald-400 group-hover:text-emerald-300 transition-colors">
                4,77x
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                R$ 4,77 p/ R$ 1 invest.
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-zinc-800/60 text-[9px] font-mono text-zinc-400">
              Rentabilidade Alta
            </div>
          </div>

          {/* 6. Tempo de Atendimento */}
          <div className="bg-[#0f0f0f] border border-cyan-500/20 hover:border-cyan-500/40 p-3.5 rounded-xl flex flex-col justify-between transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Speed-to-Lead</span>
              <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <Clock className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-lg font-mono font-black text-cyan-300 group-hover:text-cyan-200 transition-colors">
                4.8 min
              </div>
              <div className="text-[10px] font-mono text-emerald-400 mt-0.5 font-semibold">
                78,4% Janela Áurea
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-zinc-800/60 text-[9px] font-mono text-zinc-400">
              Queda de 73,6% no tempo
            </div>
          </div>

          {/* 7. Leads Descartados (Filtro Anti-Curioso) */}
          <div className="bg-[#0f0f0f] border border-rose-500/20 hover:border-rose-500/40 p-3.5 rounded-xl flex flex-col justify-between transition-all group col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Filtro Anti-Curioso</span>
              <div className="p-1.5 rounded-md bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20 transition-colors">
                <Filter className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-lg font-mono font-black text-rose-300 group-hover:text-rose-200 transition-colors">
                112 contatos
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                Descarte inteligente
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-zinc-800/60 text-[9px] font-mono text-emerald-400">
              Tempo nobre poupado
            </div>
          </div>
        </div>

        {/* 3 Compact Strategic Directorial Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="bg-[#0e0e0e] border border-zinc-800/70 p-3.5 rounded-xl flex items-start gap-3">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
              1
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Alavancagem Financeira Comprovada</span>
              </h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                R$ 36.000 faturados no ERP com CAC controlado de R$ 628,83 e ROAS de 4,77x sobre R$ 7.546 de mídia paga.
              </p>
            </div>
          </div>

          <div className="bg-[#0e0e0e] border border-zinc-800/70 p-3.5 rounded-xl flex items-start gap-3">
            <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
              2
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Filtro Anti-Curioso & Foco Tier A</span>
              </h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                112 contatos desqualificados foram filtrados sem custo operacional, concentrando a equipe em 118 decisores e donos de clínicas.
              </p>
            </div>
          </div>

          <div className="bg-[#0e0e0e] border border-zinc-800/70 p-3.5 rounded-xl flex items-start gap-3">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
              3
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Domínio da Janela Áurea (&lt; 5 min)</span>
              </h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                78,4% dos leads abordados em menos de 5 minutos (TMPCC de 4.8 min), reduzindo o risco de no-show em demonstrações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Etapa2Module;
