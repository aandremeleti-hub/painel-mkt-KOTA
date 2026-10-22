import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Area,
  AreaChart
} from 'recharts';
import { dailyMediaData } from '../../../data/etapa1Data';
import { Calendar, AlertTriangle, CheckCircle2, Target } from 'lucide-react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const DualAxisTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className="bg-[#121214] border border-border-active p-3.5 rounded-xl shadow-2xl backdrop-blur-md text-xs font-sans min-w-[210px]">
        <div className="flex items-center justify-between border-b border-border-subtle pb-2 mb-2.5">
          <span className="font-bold text-white text-sm flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            {dataPoint.dayLabel} (Dia {dataPoint.dayNumber})
          </span>
          {dataPoint.isPeakLeads && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-700">
              Pico do Mês
            </span>
          )}
          {dataPoint.isCriticalCPL && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-700">
              CPL &gt; R$ 10
            </span>
          )}
          {dataPoint.isBestCPL && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-700">
              Menor CPL
            </span>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-text-muted flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500 inline-block" />
              Investimento:
            </span>
            <span className="font-mono font-semibold text-white">
              R$ {dataPoint.spend.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-text-muted flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
              Cadastros (Leads):
            </span>
            <span className="font-mono font-bold text-cyan-300">
              {dataPoint.leads} leads
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-border-subtle">
            <span className="text-text-muted flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              CPL Diário:
            </span>
            <span className={`font-mono font-bold ${dataPoint.cpl > 10 ? 'text-rose-400' : dataPoint.cpl <= 6.5 ? 'text-emerald-400' : 'text-amber-400'}`}>
              R$ {dataPoint.cpl.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const CplTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className="bg-[#121214] border border-border-active p-3.5 rounded-xl shadow-2xl backdrop-blur-md text-xs font-sans min-w-[200px]">
        <div className="border-b border-border-subtle pb-2 mb-2 flex items-center justify-between">
          <span className="font-bold text-white text-sm flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            {dataPoint.dayLabel}
          </span>
          <span className="text-[10px] font-mono text-text-muted">
            {dataPoint.leads} cadastros
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-text-muted">Custo por Lead:</span>
            <span className={`font-mono font-extrabold text-sm ${dataPoint.cpl > 10 ? 'text-rose-400' : dataPoint.cpl <= 6.5 ? 'text-emerald-400' : 'text-amber-400'}`}>
              R$ {dataPoint.cpl.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-text-muted">Meta Alvo:</span>
            <span className="font-mono text-zinc-400">R$ 6,50</span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-text-muted">Status:</span>
            <span className={`font-medium ${dataPoint.cpl > 10 ? 'text-rose-400' : dataPoint.cpl <= 6.5 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {dataPoint.cpl > 10 ? 'Crítico (> R$ 10)' : dataPoint.cpl <= 6.5 ? 'Excelente (< R$ 6,50)' : 'Atenção'}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const DiarizationCharts: React.FC = () => {
  const [activeView, setActiveView] = useState<'leads' | 'cpl'>('leads');

  return (
    <div className="space-y-6">
      {/* Cabeçalho com controles e destaques */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-primary" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Diarização Contínua de Performance (01 a 30 de Setembro)
            </h2>
          </div>
          <p className="text-xs text-text-muted mt-1">
            Análise dia a dia de investimentos, oscilações no volume de cadastros e sensibilidade de CPL ao leilão da Meta (Slides 9 e 10).
          </p>
        </div>

        {/* View Switcher */}
        <div className="inline-flex items-center bg-zinc-900 border border-border p-1 rounded-xl self-start">
          <button
            onClick={() => setActiveView('leads')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeView === 'leads'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Investimento vs Leads
          </button>
          <button
            onClick={() => setActiveView('cpl')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeView === 'cpl'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Linha de CPL Diário & Zonas
          </button>
        </div>
      </div>

      {/* Cards de Destaque da Diarização */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-card border border-cyan-900/40 hover:border-cyan-700/60 transition-all flex items-start gap-3">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-cyan-400 uppercase font-semibold">
              Pico de Cadastros (13/09)
            </div>
            <div className="text-xl font-bold text-white mt-0.5">38 Leads no Dia</div>
            <div className="text-xs text-text-muted mt-1">
              Investimento de R$ 204 com CPL ultra-eficiente de R$ 5,37.
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-emerald-900/40 hover:border-emerald-700/60 transition-all flex items-start gap-3">
          <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">
              Dia Mais Barato (07/09)
            </div>
            <div className="text-xl font-bold text-emerald-400 mt-0.5">CPL R$ 4,90</div>
            <div className="text-xs text-text-muted mt-1">
              Feriado gerou 35 leads com apenas R$ 171 investidos.
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-rose-900/40 hover:border-rose-700/60 transition-all flex items-start gap-3">
          <div className="p-2 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-rose-400 uppercase font-semibold">
              Picos de Custo (16/09 e 19/09)
            </div>
            <div className="text-xl font-bold text-rose-400 mt-0.5">CPL &gt; R$ 10,30</div>
            <div className="text-xs text-text-muted mt-1">
              Dias com fadiga nos criativos estáticos de Azulene e Phyto+.
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos Interativos */}
      <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
        {activeView === 'leads' ? (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Gráfico A: Investimento Diário (R$) vs Volume de Cadastros</span>
                  <span className="text-xs font-mono font-normal text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">
                    Eixo Duplo
                  </span>
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  Barras representam o investimento diário em reais (eixo esquerdo); a linha ciano representa os cadastros gerados (eixo direito).
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-indigo-600/80 inline-block" />
                  Investimento (R$)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1.5 rounded-full bg-cyan-400 inline-block" />
                  Cadastros (Leads)
                </span>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={dailyMediaData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis
                    dataKey="dayLabel"
                    stroke="#666"
                    fontSize={11}
                    tickLine={false}
                    interval={2}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="#666"
                    fontSize={11}
                    tickLine={false}
                    domain={[0, 240]}
                    tickFormatter={(val) => `R$${val}`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#22d3ee"
                    fontSize={11}
                    tickLine={false}
                    domain={[0, 45]}
                    tickFormatter={(val) => `${val}`}
                  />
                  <Tooltip content={<DualAxisTooltip />} />

                  {/* Linha de destaque no dia 13/09 (pico de 38 leads) */}
                  <ReferenceLine
                    x="13/09"
                    stroke="#22d3ee"
                    strokeDasharray="3 3"
                    yAxisId="right"
                    label={{
                      value: 'Pico: 38 Leads',
                      position: 'top',
                      fill: '#22d3ee',
                      fontSize: 10,
                      fontWeight: 'bold'
                    }}
                  />

                  <Bar
                    yAxisId="left"
                    dataKey="spend"
                    name="Investimento (R$)"
                    fill="#4f46e5"
                    radius={[4, 4, 0, 0]}
                    opacity={0.85}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="leads"
                    name="Cadastros"
                    stroke="#22d3ee"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: '#080808', stroke: '#22d3ee', strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: '#22d3ee', stroke: '#fff', strokeWidth: 2 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Gráfico B: Linha de CPL Diário & Zonas de Eficiência</span>
                  <span className="text-xs font-mono font-normal text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
                    Meta: R$ 6,50
                  </span>
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  Curva contínua do custo por oportunidade gerada com linha de referência alvo em R$ 6,50 e alerta nos dias acima de R$ 10,00.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  Meta (&lt; R$ 6,50)
                </span>
                <span className="flex items-center gap-1.5 text-rose-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  Crítico (&gt; R$ 10,00)
                </span>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={dailyMediaData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="cplGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis
                    dataKey="dayLabel"
                    stroke="#666"
                    fontSize={11}
                    tickLine={false}
                    interval={2}
                  />
                  <YAxis
                    stroke="#666"
                    fontSize={11}
                    tickLine={false}
                    domain={[3, 12]}
                    tickFormatter={(val) => `R$${val}`}
                  />
                  <Tooltip content={<CplTooltip />} />

                  {/* Linha de Meta R$ 6,50 */}
                  <ReferenceLine
                    y={6.50}
                    stroke="#10b981"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                    label={{
                      value: 'Meta Ideal: R$ 6,50',
                      position: 'right',
                      fill: '#10b981',
                      fontSize: 10
                    }}
                  />

                  {/* Linha de Alerta R$ 10,00 */}
                  <ReferenceLine
                    y={10.00}
                    stroke="#f43f5e"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                    label={{
                      value: 'Teto Crítico: R$ 10,00',
                      position: 'right',
                      fill: '#f43f5e',
                      fontSize: 10
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="cpl"
                    stroke="#10b981"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#cplGradient)"
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      if (payload.isCriticalCPL) {
                        return (
                          <circle
                            key={`dot-${payload.date}`}
                            cx={cx}
                            cy={cy}
                            r={5}
                            fill="#f43f5e"
                            stroke="#fff"
                            strokeWidth={1.5}
                          />
                        );
                      }
                      if (payload.isBestCPL) {
                        return (
                          <circle
                            key={`dot-${payload.date}`}
                            cx={cx}
                            cy={cy}
                            r={5}
                            fill="#10b981"
                            stroke="#fff"
                            strokeWidth={1.5}
                          />
                        );
                      }
                      return (
                        <circle
                          key={`dot-${payload.date}`}
                          cx={cx}
                          cy={cy}
                          r={2.5}
                          fill="#10b981"
                        />
                      );
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
