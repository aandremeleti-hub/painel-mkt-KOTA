import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import {
  demographicsDevices,
  demographicsPlatforms,
  demographicsPlacements,
  demographicsAge,
  demographicsGender,
  demographicsStates
} from '../../../data/etapa1Data';
import { Smartphone, Globe, Layers, UserCheck, MapPin, Sparkles } from 'lucide-react';

export const DemographicsGrid: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header da Seção Demográfica */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Matriz Demográfica Multidimensional (Meta Audience Insights)
            </h2>
          </div>
          <p className="text-xs text-text-muted mt-0.5">
            Mapeamento comportamental em 6 eixos estratégicos substituindo as páginas 29 a 34 do relatório tradicional.
          </p>
        </div>

        {/* Badge Especial: Virada Histórica iOS */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-950/40 border border-orange-700/50 text-orange-300 text-xs font-medium">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span>
            Virada Histórica: <strong>iOS 52,3%</strong> (Público Alta Renda)
          </span>
        </div>
      </div>

      {/* Grid com os 6 Eixos Demográficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {/* 1. DISPOSITIVOS (Destaque Virada Histórica) */}
        <div className="bg-card border border-border hover:border-border-active rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-orange-400" />
                <h3 className="text-sm font-bold text-white">1. Alcance por Dispositivo</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800">
                Pico de Poder Aquisitivo
              </span>
            </div>
            <p className="text-xs text-text-muted mb-4">
              Pela 1ª vez na série histórica de 12 meses, os usuários de iPhone/iPad superaram o Android, concentrando mais da metade da audiência.
            </p>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demographicsDevices}
                    dataKey="percentage"
                    nameKey="device"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={3}
                  >
                    {demographicsDevices.map((entry, index) => (
                      <Cell key={`device-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#141414', borderColor: '#333', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(value: any) => [`${value}%`, 'Participação']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-border-subtle space-y-1.5 text-xs font-mono">
            {demographicsDevices.map((d) => (
              <div key={d.device} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-text-secondary">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                  {d.device}:
                </span>
                <span className="font-bold text-white">{d.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. PLATAFORMAS (Instagram vs Facebook) */}
        <div className="bg-card border border-border hover:border-border-active rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-pink-400" />
                <h3 className="text-sm font-bold text-white">2. Plataforma de Origem</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950 text-pink-300 border border-pink-800">
                Monopólio Instagram
              </span>
            </div>
            <p className="text-xs text-text-muted mb-4">
              95% do alcance e conversão estão concentrados no ecossistema Instagram, com mínima tração residual no Facebook (5%).
            </p>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demographicsPlatforms}
                    dataKey="percentage"
                    nameKey="platform"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={4}
                  >
                    {demographicsPlatforms.map((entry, index) => (
                      <Cell key={`platform-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#141414', borderColor: '#333', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(value: any) => [`${value}%`, 'Alcance']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-border-subtle space-y-1.5 text-xs font-mono">
            {demographicsPlatforms.map((p) => (
              <div key={p.platform} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-text-secondary">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.platform}:
                </span>
                <span className="font-bold text-white">{p.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. POSICIONAMENTOS (Stories vs Feed vs Reels) */}
        <div className="bg-card border border-border hover:border-border-active rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">3. Posicionamento do Criativo</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Stories Lidera (52%)
              </span>
            </div>
            <p className="text-xs text-text-muted mb-4">
              Mais da metade do consumo ocorre em Stories verticais (52%), seguido de Feed (29,7%) e Reels (18,3%).
            </p>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demographicsPlacements} layout="vertical" margin={{ left: -15, right: 10, top: 5, bottom: 5 }}>
                  <XAxis type="number" domain={[0, 60]} stroke="#555" fontSize={10} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="placement" stroke="#888" fontSize={10} width={90} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#141414', borderColor: '#333', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(value: any) => [`${value}%`, 'Volume']}
                  />
                  <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                    {demographicsPlacements.map((entry, index) => (
                      <Cell key={`placement-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-border-subtle grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div>
              <div className="text-text-muted text-[10px]">Stories</div>
              <div className="font-bold text-amber-400">52,0%</div>
            </div>
            <div>
              <div className="text-text-muted text-[10px]">Feed</div>
              <div className="font-bold text-blue-400">29,7%</div>
            </div>
            <div>
              <div className="text-text-muted text-[10px]">Reels</div>
              <div className="font-bold text-pink-400">18,3%</div>
            </div>
          </div>
        </div>

        {/* 4. FAIXAS ETÁRIAS (Concentração 25 a 54 anos) */}
        <div className="bg-card border border-border hover:border-border-active rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">4. Distribuição por Faixa Etária</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Core: 25-54 anos (70,9%)
              </span>
            </div>
            <p className="text-xs text-text-muted mb-4">
              Liderança da faixa de 25-34 anos (31,7%) e 35-44 anos (20,9%), correspondendo aos profissionais donos de clínica e tomadores de decisão.
            </p>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demographicsAge} margin={{ left: -25, right: 10, top: 5, bottom: 5 }}>
                  <XAxis dataKey="range" stroke="#777" fontSize={9} />
                  <YAxis stroke="#555" fontSize={10} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#141414', borderColor: '#333', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(value: any) => [`${value}%`, 'Audiência']}
                  />
                  <Bar dataKey="percentage" fill="#2dd4bf" radius={[4, 4, 0, 0]}>
                    {demographicsAge.map((entry, index) => (
                      <Cell key={`age-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
            <span className="text-text-muted">Top 3 Faixas:</span>
            <span className="text-emerald-400 font-bold">25-34 (31,7%) • 35-44 (20,9%) • 45-54 (18,3%)</span>
          </div>
        </div>

        {/* 5. GÊNERO (81% Feminino) */}
        <div className="bg-card border border-border hover:border-border-active rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-rose-400" />
                <h3 className="text-sm font-bold text-white">5. Distribuição por Gênero</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                81% Feminino
              </span>
            </div>
            <p className="text-xs text-text-muted mb-4">
              Predominância expressiva do público feminino (81,0%), refletindo a demografia médica e estética do mercado brasileiro de harmonização facial.
            </p>

            <div className="h-44 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demographicsGender}
                    dataKey="percentage"
                    nameKey="gender"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={3}
                  >
                    {demographicsGender.map((entry, index) => (
                      <Cell key={`gender-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#141414', borderColor: '#333', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(value: any) => [`${value}%`, 'Volume']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-border-subtle flex items-center justify-around text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="text-text-secondary">Feminino:</span>
              <span className="font-bold text-rose-400">81,0%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-text-secondary">Masculino:</span>
              <span className="font-bold text-blue-400">19,0%</span>
            </div>
          </div>
        </div>

        {/* 6. GEOGRAFIA POR ESTADOS (SP com 33,8%) */}
        <div className="bg-card border border-border hover:border-border-active rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">6. Concentração por Estados (UF)</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                SP Líder (33,8%)
              </span>
            </div>
            <p className="text-xs text-text-muted mb-4">
              Forte concentração comercial no Sudeste com São Paulo e Rio de Janeiro somando 44,5% de toda a audiência de médicos e dentistas.
            </p>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demographicsStates} layout="vertical" margin={{ left: -10, right: 10, top: 5, bottom: 5 }}>
                  <XAxis type="number" domain={[0, 40]} stroke="#555" fontSize={10} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="uf" stroke="#888" fontSize={10} width={45} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#141414', borderColor: '#333', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(value: any, _name: any, props: any) => [`${value}%`, props.payload.name]}
                  />
                  <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                    {demographicsStates.map((entry, index) => (
                      <Cell key={`state-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
            <span className="text-text-muted">Top 3 Estados:</span>
            <span className="text-white font-bold">1º SP (33,8%) • 2º RJ (10,7%) • 3º MG (7,5%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
