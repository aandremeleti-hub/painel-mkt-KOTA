import React from 'react';
import { useDashboard } from '../../layout/DashboardLayout';
import { 
  BarChart3, 
  Layers, 
  Cpu, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { consolidatedMoMData } from '../../../data/etapa1Data';
import { speedToLeadData } from '../../../data/etapa2Data';
import { etapa3SummaryData } from '../../../data/etapa3Data';

export const ExecutiveOverviewModule: React.FC = () => {
  const { setActiveTab, openMetricModal } = useDashboard();
  const d = consolidatedMoMData;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* C-Level Hero Header */}
      <div className="bg-gradient-to-r from-[#111720] via-[#0f141a] to-[#0c0d10] border border-cyan-900/50 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-52 bg-gradient-to-bl from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Painel Executivo C-Level
              </span>
              <span className="text-xs text-text-muted">• Kota Saúde e Beleza</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Visão Geral Executiva Integrada
            </h1>
            <p className="text-xs md:text-sm text-text-secondary max-w-3xl leading-relaxed">
              Visão integrada de investimento em anúncios e vendas geradas: acompanhamento em tempo real do tráfego até o dinheiro faturado na Kota.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Master Golden KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Investimento Total */}
        <div 
          onClick={() => openMetricModal('total_spend')}
          className="bg-[#141414] hover:bg-[#181818] border border-zinc-800 hover:border-cyan-500/40 p-5 rounded-xl transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-bold">Investimento Total</span>
              <DollarSign className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-black font-mono text-white">
              R$ {d.spend.toLocaleString('pt-BR')}
            </div>
            <p className="text-[11px] text-zinc-400 mt-1 leading-tight">
              Investimento em veiculação de anúncios pagos nas plataformas Meta.
            </p>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mt-3 pt-2 border-t border-zinc-800/80">
            <span>-1,8% vs mês anterior</span>
            <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
              Detalhes <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* KPI 2: Faturamento Confirmado */}
        <div 
          onClick={() => openMetricModal('funnel_stage_7_revenue')}
          className="bg-gradient-to-b from-[#141414] to-[#181510] hover:from-[#181818] hover:to-[#201a12] border border-amber-500/30 hover:border-amber-500/60 p-5 rounded-xl transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-amber-400 mb-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold block">Faturamento Confirmado</span>
                <span className="text-[10px] text-zinc-400 font-normal">(Vendas registradas no sistema de gestão/caixa)</span>
              </div>
              <Building2 className="w-4 h-4 shrink-0" />
            </div>
            <div className="text-2xl font-black font-mono text-amber-400">
              R$ 36.000
            </div>
            <div className="mt-1.5">
              <span className="inline-block text-[10px] font-mono bg-amber-950/40 border border-amber-800/40 text-amber-300 px-1.5 py-0.5 rounded leading-tight">
                ERP: Sistema interno de emissão de pedidos e notas fiscais
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 mt-2 leading-tight">
              <strong className="text-emerald-400">+140% vs Histórico:</strong> Mais que o dobro da média mensal anterior de vendas originadas por anúncios digitais.
            </p>
          </div>
          <div className="flex items-center justify-end text-[11px] font-mono text-amber-400 mt-3 pt-2 border-t border-zinc-800/80">
            <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
              12 Vendas Faturadas <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* KPI 3: ROAS Comercial Real */}
        <div 
          onClick={() => openMetricModal('roas_comercial')}
          className="bg-[#141414] hover:bg-[#181818] border border-emerald-500/30 hover:border-emerald-500/60 p-5 rounded-xl transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-emerald-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-bold">ROAS Comercial</span>
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-2xl font-black font-mono text-emerald-400">
              4,77x
            </div>
            <p className="text-[11px] text-zinc-400 mt-1 leading-tight">
              R$ 4,77 de retorno para cada R$ 1,00 investido.
            </p>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mt-3 pt-2 border-t border-zinc-800/80">
            <span>Retorno Comercial</span>
            <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
              Explicar <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* KPI 4: Tempo de Resposta Inicial */}
        <div 
          onClick={() => openMetricModal('tmpcc')}
          className="bg-[#141414] hover:bg-[#181818] border border-cyan-500/30 hover:border-cyan-500/60 p-5 rounded-xl transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-cyan-400 mb-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold block">Tempo de Resposta ao Cliente</span>
                <span className="text-[10px] text-zinc-400 font-normal">Primeiro contato comercial via WhatsApp</span>
              </div>
              <Clock className="w-4 h-4 shrink-0" />
            </div>
            <div className="text-2xl font-black font-mono text-cyan-400">
              {speedToLeadData.tmpccMinutes} min
            </div>
            <p className="text-[11px] text-zinc-400 mt-1 leading-tight">
              Tempo médio que a equipe de vendas leva para mandar a primeira mensagem no WhatsApp assim que o cliente clica no anúncio ({speedToLeadData.tmpccMinutes} minutos).
            </p>
            <div className="mt-2 p-1.5 rounded bg-cyan-950/40 border border-cyan-800/40 text-[10px] text-cyan-300 leading-tight">
              <strong className="text-white">Janela Áurea:</strong> Primeiros 5 minutos após o lead solicitar contato, momento de máxima chance de fechar venda ({speedToLeadData.goldenWindowRate}% dos contatos atendidos nesse prazo).
            </div>
          </div>
          <div className="flex items-center justify-end text-[11px] font-mono text-cyan-400 mt-3 pt-2 border-t border-zinc-800/80">
            <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
              Ver Análise <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* 3 Executive Pillars Navigation Cards (Deep Dive into each Module) */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <span>Pilares Operacionais do Ecossistema</span>
          <span className="text-xs font-mono text-text-muted font-normal">• Navegue com profundidade nos módulos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Module 1 Card */}
          <div className="bg-[#121212] border border-zinc-800 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold uppercase">
                  Etapa 1
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Mídia & Demografia
                </h3>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Consolidação do Meta Ads Manager: 133k alcance, 780 cadastros captados, diarização de investimento e matriz de público 6 eixos.
                </p>
              </div>

              <div className="bg-[#0b0d10] border border-zinc-800/80 p-3 rounded-xl space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>CPL Médio Direto:</span>
                  <span className="text-emerald-400 font-bold">R$ 6,42</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Top Criativo (Arocell):</span>
                  <span className="text-cyan-400 font-bold">R$ 3,84 (55,7%)</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>CTR Médio:</span>
                  <span className="text-white font-bold">2,15%</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('media')}
              className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-cyan-600 hover:text-black font-semibold text-xs text-white transition-all cursor-pointer"
            >
              <span>Acessar Módulo Mídia & Demografia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 2 Card */}
          <div className="bg-[#121212] border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold uppercase">
                  Etapa 2
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  Funil Comercial & Velocidade
                </h3>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Esteira de 7 etapas da Kota Dental: 4.930 cliques → 320 WABA → 208 válidos → 118 decisores → 34 demos → 12 vendas ERP.
                </p>
              </div>

              <div className="bg-[#0b0d10] border border-zinc-800/80 p-3 rounded-xl space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Filtro Anti-Curioso:</span>
                  <span className="text-emerald-400 font-bold">112 descartados</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>CPDQ Real:</span>
                  <span className="text-amber-400 font-bold">R$ 25,38</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>CAC Comercial:</span>
                  <span className="text-white font-bold">R$ 628,83</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('funnel')}
              className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-amber-400 hover:text-black font-semibold text-xs text-white transition-all cursor-pointer"
            >
              <span>Acessar Módulo Funil & Velocidade</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 3 Card */}
          <div className="bg-[#121212] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-indicator-green">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold uppercase">
                  Etapa 3
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Matriz Preditiva & 1-Clique
                </h3>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  20 funcionalidades preditivas distribuídas em 4 pilares com execução em 1 clique para otimização de campanhas e vendas.
                </p>
              </div>

              <div className="bg-[#0b0d10] border border-zinc-800/80 p-3 rounded-xl space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Funcionalidades:</span>
                  <span className="text-indicator-green font-bold">{etapa3SummaryData.totalFeatures} ativas</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Upside Projetado:</span>
                  <span className="text-emerald-400 font-bold">{etapa3SummaryData.projectedRevenueUplift}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Redução CAC:</span>
                  <span className="text-white font-bold">{etapa3SummaryData.cacReductionPotential}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('predictive')}
              className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-emerald-500 hover:text-black font-semibold text-xs text-white transition-all cursor-pointer"
            >
              <span>Acessar Matriz Preditiva</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Board Synthesis Section */}
      <div className="bg-[#141414] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              Diretrizes Estratégicas para a Diretoria
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#0d0d0d] border border-zinc-800/80 p-4 rounded-xl space-y-1.5">
            <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">1. Escalabilidade Validada</span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Com retorno de R$ 4,77 por real investido e frequência saudável de 2.09x (sem cansaço de público), a empresa pode aumentar o investimento em até 30% sem encarecer o custo de novos clientes e sem sobrecarregar a equipe comercial.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-zinc-800/80 p-4 rounded-xl space-y-1.5">
            <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">2. Blindagem de Audiência</span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              O criativo da Dra. Cíntia é o motor principal (CPL R$ 3,84). A recomendação é desdobrar 3 variações com novos ganchos para evitar saturação futura.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-zinc-800/80 p-4 rounded-xl space-y-1.5">
            <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase">3. Agilidade no Primeiro Atendimento</span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Com 78,4% dos contatos abordados em menos de 5 minutos, a operação atingiu maturidade de atendimento, sustentando velocidade máxima de resposta durante todo o horário comercial para converter oportunidades quentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveOverviewModule;
