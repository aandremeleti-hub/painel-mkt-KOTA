import React, { useState, useId } from 'react';
import { speedToLeadData, latencyCorrelationData } from '../../../data/etapa2Data';
import { useDashboard } from '../../layout/DashboardLayout';
import { 
  Zap, 
  DollarSign, 
  AlertTriangle, 
  TrendingDown, 
  TrendingUp, 
  Sliders, 
  HelpCircle, 
  ShieldCheck, 
  Timer
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

export const SpeedToLeadMonitor: React.FC = () => {
  const { openMetricModal } = useDashboard();
  const sliderId = useId();

  // Interactive latency simulator state: average response time in minutes (default 4.8 min)
  const [simulatedMinutes, setSimulatedMinutes] = useState<number>(4.8);

  // Simulation calculations based on Kota's base:
  // Base volume: 320 raw leads, Ticket Medio: R$ 3.000
  // When response time is <= 5 min, conversion to sale is ~3.75% (12 sales out of 320 raw leads)
  // For each minute over 5 min, conversion drops by an empirical factor:
  const calculateSimulation = (minutes: number) => {
    let projectedDeals = 12;
    let revenueAtScenario = 36000;
    const baselineRevenue = 36000;

    if (minutes <= 5) {
      // Near optimal or slightly better: potential +1 to +3 deals if instant (< 2 min)
      const efficiencyBonus = Math.max(0, (5 - minutes) * 0.4);
      projectedDeals = Math.min(14, +(12 + efficiencyBonus).toFixed(1));
    } else if (minutes <= 15) {
      // Moderate penalty
      const penalty = (minutes - 5) * 0.35;
      projectedDeals = Math.max(8, +(12 - penalty).toFixed(1));
    } else if (minutes <= 30) {
      // Heavy penalty
      const penalty = 3.5 + (minutes - 15) * 0.25;
      projectedDeals = Math.max(4, +(12 - penalty).toFixed(1));
    } else {
      // Extreme delay > 30 min
      const penalty = 7.25 + (minutes - 30) * 0.12;
      projectedDeals = Math.max(1.5, +(12 - penalty).toFixed(1));
    }

    revenueAtScenario = Math.round(projectedDeals * 3000);
    const varianceRevenue = revenueAtScenario - baselineRevenue;
    const projectedRoas = (revenueAtScenario / 7546).toFixed(2);

    return {
      projectedDeals,
      revenueAtScenario,
      varianceRevenue,
      projectedRoas
    };
  };

  const simulation = calculateSimulation(simulatedMinutes);

  // Chart data for response distribution
  const chartData = speedToLeadData.intervals.map(item => ({
    name: item.rangeLabel,
    leads: item.leadVolume,
    percentage: item.percentageOfTotal,
    conversion: item.conversionRate,
    color: item.status === 'healthy' ? '#10b981' : item.status === 'warning' ? '#f59e0b' : '#ef4444'
  }));

  return (
    <div className="bg-[#141414] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>VELOCIDADE COMERCIAL & SLA DE RESPOSTA</span>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            Speed-to-Lead & Matriz de Latência
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Monitoramento cronometrado do tempo decorrido entre a mensagem no WhatsApp e a primeira abordagem do consultor da Kota Dental, com correlação direta de faturamento.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-[#1a2e22] border border-emerald-500/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-semibold">Janela Áurea Ativa</span>
          </div>
        </div>
      </div>

      {/* 3 Core Metric KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* TMPCC Card */}
        <div className="bg-[#101010] border border-emerald-500/30 rounded-xl p-5 relative overflow-hidden group hover:border-emerald-500/60 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Timer className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white">TMPCC Comercial</span>
                <span className="text-[10px] font-mono text-zinc-500 block">Speed-to-Lead</span>
              </div>
            </div>
            <button
              onClick={() => openMetricModal('tmpcc')}
              className="p-1 text-zinc-400 hover:text-emerald-400 rounded-md transition-colors"
              title="Entender Indicador TMPCC"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>

          <div className="my-3">
            <div className="text-3xl font-black font-mono text-emerald-400 tracking-tight flex items-baseline gap-1.5">
              <span>{speedToLeadData.tmpccMinutes}</span>
              <span className="text-sm font-semibold text-zinc-400">minutos</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-emerald-400">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>-73.6% vs mês anterior (18.2 min)</span>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Meta Operacional:</span>
            <span className="text-emerald-300 font-bold">≤ 5.0 min (Atingida)</span>
          </div>

          <button
            onClick={() => openMetricModal('tmpcc')}
            className="mt-3 w-full py-2 rounded-lg bg-zinc-900 hover:bg-emerald-500/10 hover:border-emerald-500/40 border border-zinc-800 text-[11px] font-mono font-medium text-zinc-300 hover:text-emerald-300 transition-all flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Entender Indicador TMPCC</span>
          </button>
        </div>

        {/* Golden Window Card */}
        <div className="bg-[#101010] border border-amber-500/30 rounded-xl p-5 relative overflow-hidden group hover:border-amber-500/60 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white">Taxa Janela Áurea</span>
                <span className="text-[10px] font-mono text-zinc-500 block">&lt; 5 minutos</span>
              </div>
            </div>
            <button
              onClick={() => openMetricModal('golden_window')}
              className="p-1 text-zinc-400 hover:text-amber-400 rounded-md transition-colors"
              title="Entender Janela Áurea"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>

          <div className="my-3">
            <div className="text-3xl font-black font-mono text-amber-400 tracking-tight flex items-baseline gap-1.5">
              <span>{speedToLeadData.goldenWindowRate}%</span>
              <span className="text-sm font-semibold text-zinc-400">dos leads</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>251 de 320 contatos atendidos a tempo</span>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Benchmark Setor:</span>
            <span className="text-amber-300 font-bold">&gt; 70% (Excelente)</span>
          </div>

          <button
            onClick={() => openMetricModal('golden_window')}
            className="mt-3 w-full py-2 rounded-lg bg-zinc-900 hover:bg-amber-500/10 hover:border-amber-500/40 border border-zinc-800 text-[11px] font-mono font-medium text-zinc-300 hover:text-amber-300 transition-all flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Entender Janela Áurea</span>
          </button>
        </div>

        {/* CPDQ Card */}
        <div className="bg-[#101010] border border-cyan-500/30 rounded-xl p-5 relative overflow-hidden group hover:border-cyan-500/60 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white">CPDQ</span>
                <span className="text-[10px] font-mono text-zinc-500 block">Custo Diálogo Qualificado</span>
              </div>
            </div>
            <button
              onClick={() => openMetricModal('cpdq')}
              className="p-1 text-zinc-400 hover:text-cyan-400 rounded-md transition-colors"
              title="Entender CPDQ"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>

          <div className="my-3">
            <div className="text-3xl font-black font-mono text-cyan-400 tracking-tight flex items-baseline gap-1.5">
              <span className="text-xl font-normal text-zinc-400">R$</span>
              <span>{speedToLeadData.cpdq.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-emerald-400">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>-47.3% vs custo histórico (R$ 48,15)</span>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Base Útil Gerada:</span>
            <span className="text-cyan-300 font-bold">208 diálogos válidos</span>
          </div>

          <button
            onClick={() => openMetricModal('cpdq')}
            className="mt-3 w-full py-2 rounded-lg bg-zinc-900 hover:bg-cyan-500/10 hover:border-cyan-500/40 border border-zinc-800 text-[11px] font-mono font-medium text-zinc-300 hover:text-cyan-300 transition-all flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Entender Indicador CPDQ</span>
          </button>
        </div>
      </div>

      {/* Grid: Response Distribution Chart & Interactive Latency Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Bar Chart of Response Distribution (7 cols) */}
        <div className="lg:col-span-7 bg-[#101010] border border-zinc-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Distribuição do Tempo de Atendimento</span>
                <span className="text-xs font-normal text-zinc-400 font-mono">(320 Leads)</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Volume e taxa de conversão em cada faixa de tempo decorrido.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              78,4% em &lt; 5 min
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#71717a" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={{ stroke: '#333' }}
                />
                <YAxis 
                  stroke="#71717a" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={{ stroke: '#333' }}
                  tickFormatter={(val) => `${val}`}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[#18181b] border border-zinc-600 rounded-xl p-3 shadow-2xl font-mono text-xs z-50">
                          <div className="text-zinc-300 font-bold border-b border-zinc-700/80 pb-1.5 mb-1.5 flex items-center justify-between gap-4">
                            <span className="text-[#FFFFFF]">Faixa: {label}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-zinc-800 text-amber-300 border border-zinc-700">
                              Conv: {data.conversion}%
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between gap-4">
                              <span className="text-zinc-400">Volume de Contatos:</span>
                              <span className="text-[#FFFFFF] font-bold text-sm">{data.leads} contatos</span>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                              <span className="text-zinc-400">Percentual da Base:</span>
                              <span className="text-emerald-400 font-bold">{data.percentage}%</span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="leads" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Compact Interval Legend with details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-zinc-800/60 font-mono text-xs">
            {speedToLeadData.intervals.map((interval) => (
              <div 
                key={interval.rangeLabel}
                className="bg-[#141414] p-2.5 rounded-lg border border-zinc-800/80"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-[11px]">{interval.rangeLabel}</span>
                  <span className={`text-[10px] font-bold ${
                    interval.status === 'healthy' ? 'text-emerald-400' : interval.status === 'warning' ? 'text-amber-400' : 'text-rose-400'
                  }`}>
                    {interval.percentageOfTotal}%
                  </span>
                </div>
                <div className="text-[10px] text-zinc-400 mt-1">
                  Conv: <strong className="text-zinc-200">{interval.conversionRate}%</strong>
                </div>
                <div className="text-[9px] text-zinc-500 mt-0.5 truncate" title={interval.impactDescription}>
                  {interval.impactDescription}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Latency Calculator (5 cols) */}
        <div className="lg:col-span-5 bg-[#101010] border border-amber-500/30 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Calculadora de Impacto de Latência</h3>
              </div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Simulador Dinâmico
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Arraste o tempo de resposta da equipe para simular a variação direta de faturamento sobre o tráfego da Kota Dental.
            </p>
          </div>

          {/* Highlighted Visual Instruction */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 flex items-start gap-2.5 shadow-sm">
            <span className="text-base select-none shrink-0 leading-tight">👉</span>
            <p className="text-xs text-amber-200 font-medium leading-relaxed">
              Arraste o botão abaixo para escolher o tempo médio de resposta da sua equipe e veja a simulação do impacto no faturamento em tempo real.
            </p>
          </div>

          {/* Slider Control */}
          <div className="bg-[#161616] p-4 rounded-xl border border-zinc-800 space-y-3.5 shadow-inner">
            <div className="flex items-center justify-between">
              <label htmlFor={sliderId} className="text-xs font-mono text-zinc-300 font-semibold flex items-center gap-1.5">
                <Timer className="w-3.5 h-3.5 text-amber-400" />
                <span>Tempo de Resposta Médio:</span>
              </label>
              <div className="text-xl font-mono font-black text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-lg shadow-inner">
                {simulatedMinutes} min
              </div>
            </div>

            <div className="relative py-1">
              <input
                id={sliderId}
                type="range"
                min="1"
                max="60"
                step="0.5"
                value={simulatedMinutes}
                onChange={(e) => setSimulatedMinutes(parseFloat(e.target.value))}
                aria-label="Tempo de Resposta Médio em minutos"
                className="w-full accent-amber-500 cursor-pointer h-2.5 bg-zinc-700/80 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/50 hover:bg-zinc-600 transition-colors"
              />
            </div>

            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span className="font-semibold text-emerald-400">1 min (Imediato)</span>
              <span className="text-emerald-300 font-bold border-b border-emerald-500/40 pb-0.5">5 min (Janela Áurea)</span>
              <span>15 min</span>
              <span>30 min</span>
              <span className="text-rose-400 font-semibold">60 min (Perda)</span>
            </div>
          </div>

          {/* Simulation Output Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#141414] border border-zinc-800 p-3 rounded-lg">
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Contratos Projetados</div>
              <div className="text-xl font-mono font-bold text-white mt-1">
                {simulation.projectedDeals}{' '}
                <span className="text-xs text-zinc-400 font-normal">vendas</span>
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                Atual Setembro: 12 vendas
              </div>
            </div>

            <div className="bg-[#141414] border border-zinc-800 p-3 rounded-lg">
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Receita Estimada</div>
              <div className="text-xl font-mono font-bold text-amber-300 mt-1">
                R$ {simulation.revenueAtScenario.toLocaleString('pt-BR')}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                ROAS Projetado: {simulation.projectedRoas}x
              </div>
            </div>
          </div>

          {/* Variance Impact Banner */}
          <div className={`p-3 rounded-lg border flex items-center gap-3 text-xs font-mono ${
            simulation.varianceRevenue >= 0
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
          }`}>
            {simulation.varianceRevenue >= 0 ? (
              <TrendingUp className="w-5 h-5 shrink-0 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-400" />
            )}
            <div>
              <div className="font-bold">
                {simulation.varianceRevenue >= 0 ? 'Potencial de Ganho:' : 'Impacto Financeiro Negativo:'}
              </div>
              <div className="text-[11px] opacity-90">
                {simulation.varianceRevenue >= 0
                  ? `+ R$ ${simulation.varianceRevenue.toLocaleString('pt-BR')} em relação à receita base de R$ 36.000`
                  : `- R$ ${Math.abs(simulation.varianceRevenue).toLocaleString('pt-BR')} deixados na mesa por lentidão operacional`}
              </div>
            </div>
          </div>

          <button
            onClick={() => openMetricModal('loss_delay')}
            className="w-full py-2 rounded-lg bg-zinc-900 hover:bg-amber-500/20 border border-zinc-800 text-xs font-semibold text-amber-400 transition-all flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Entender Cálculo de Perda por Demora</span>
          </button>
        </div>
      </div>

      {/* Latency Correlation Table */}
      <div className="bg-[#101010] border border-zinc-800 rounded-xl p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Tabela de Correlação: Latência de Resposta vs Queda de Conversão</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Evidência empírica baseada na esteira da Kota Saúde & Beleza (320 conversas pós-anúncio).
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
            Amostra: 320 contatos rastreados
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-[11px] bg-[#141414]">
                <th className="py-2.5 px-3 font-semibold">Faixa de Resposta</th>
                <th className="py-2.5 px-3 font-semibold">Leads Amostra</th>
                <th className="py-2.5 px-3 font-semibold">Benchmark Mercado</th>
                <th className="py-2.5 px-3 font-semibold">Conversão Real Kota</th>
                <th className="py-2.5 px-3 font-semibold">Risco de Churn</th>
                <th className="py-2.5 px-3 font-semibold">Diagnóstico</th>
                <th className="py-2.5 px-3 font-semibold text-right">Impacto Financeiro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {latencyCorrelationData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#161616] transition-colors">
                  <td className="py-2.5 px-3 font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {row.interval}
                  </td>
                  <td className="py-2.5 px-3 text-zinc-300">{row.leadCount}</td>
                  <td className="py-2.5 px-3 text-zinc-400">{row.benchmarkConversion}</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">{row.actualKotaRate}</td>
                  <td className="py-2.5 px-3 text-zinc-400">{row.churnRisk}</td>
                  <td className="py-2.5 px-3 text-zinc-300">
                    <span className={`px-2 py-0.5 rounded text-[10px] ${
                      idx < 2 ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' :
                      idx === 2 ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' :
                      'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                    }`}>
                      {row.verdict}
                    </span>
                  </td>
                  <td className={`py-2.5 px-3 text-right font-bold ${
                    idx < 2 ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {row.financialImpact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default SpeedToLeadMonitor;
