import React from 'react';
import { MetricCard } from '../../common/MetricCard';
import { consolidatedMoMData } from '../../../data/etapa1Data';
import {
  DollarSign,
  Users,
  Target,
  Percent,
  Video,
  Heart,
  UserPlus,
  Eye,
  MousePointer,
  Sparkles,
  Award
} from 'lucide-react';

interface BigNumbersGridProps {
  onOpenModal: (metricId: string) => void;
}

export const BigNumbersGrid: React.FC<BigNumbersGridProps> = ({ onOpenModal }) => {
  const d = consolidatedMoMData;

  const tooltipControlado = (
    <div className="space-y-1.5 text-xs">
      <div className="font-bold text-emerald-400 border-b border-zinc-700/60 pb-1 flex items-center justify-between">
        <span>Status: Controlado</span>
        <span className="text-[10px] text-zinc-400 font-mono">Orçamento</span>
      </div>
      <p className="text-zinc-200 leading-snug">
        <strong className="text-white">Estado Atual:</strong> Orçamento consumido no ritmo ideal (R$ 7.546 / mês), mantendo previsibilidade diária e sem desvios de verba.
      </p>
      <div className="pt-1.5 text-[11px] space-y-1 border-t border-zinc-800 text-zinc-400">
        <div className="font-semibold text-zinc-300">Cenários de Gestão Orçamentária:</div>
        <div>• <span className="text-amber-400 font-medium">&lt; R$ 6.000 (Subgasto):</span> Travamento ou entrega lenta de anúncios.</div>
        <div>• <span className="text-emerald-400 font-medium">R$ 7.000 a R$ 8.000 (Controlado - Atual):</span> Consumo linear e ritmo ideal.</div>
        <div>• <span className="text-rose-400 font-medium">&gt; R$ 9.000 (Desperdício):</span> Gasto acelerado sem conversão proporcional.</div>
      </div>
    </div>
  );

  const tooltipExpansao = (
    <div className="space-y-1.5 text-xs">
      <div className="font-bold text-cyan-400 border-b border-zinc-700/60 pb-1 flex items-center justify-between">
        <span>Status: Expansão</span>
        <span className="text-[10px] text-zinc-400 font-mono">Alcance</span>
      </div>
      <p className="text-zinc-200 leading-snug">
        <strong className="text-white">Estado Atual:</strong> Ganho contínuo de novas contas: 133.473 profissionais únicos alcançados (+9,3% vs mês anterior), ampliando a base de clientes médicos e odontológicos.
      </p>
      <div className="pt-1.5 text-[11px] space-y-1 border-t border-zinc-800 text-zinc-400">
        <div className="font-semibold text-zinc-300">Cenários de Alcance de Mercado:</div>
        <div>• <span className="text-rose-400 font-medium">&lt; 100k (Retração):</span> Perda de visibilidade para concorrentes.</div>
        <div>• <span className="text-amber-400 font-medium">100k a 120k (Estabilidade):</span> Manutenção da base sem novos clientes.</div>
        <div>• <span className="text-cyan-400 font-medium">&gt; 120k (Expansão - Atual):</span> Conquista ativa de novas clínicas e consultórios.</div>
      </div>
    </div>
  );

  const tooltipFrequencia = (
    <div className="space-y-1.5 text-xs">
      <div className="font-bold text-indigo-400 border-b border-zinc-700/60 pb-1 flex items-center justify-between">
        <span>Status: Frequência 2,09x</span>
        <span className="text-[10px] text-zinc-400 font-mono">Exposição</span>
      </div>
      <p className="text-zinc-200 leading-snug">
        <strong className="text-white">Estado Atual:</strong> Cada pessoa viu o anúncio cerca de 2 vezes no mês (2,09x), garantindo excelente memorização sem fadiga do público.
      </p>
      <div className="pt-1.5 text-[11px] space-y-1 border-t border-zinc-800 text-zinc-400">
        <div className="font-semibold text-zinc-300">Cenários de Frequência de Exposição:</div>
        <div>• <span className="text-amber-400 font-medium">&lt; 1.5x (Baixa):</span> Anúncio pouco memorizado; baixa fixação da mensagem.</div>
        <div>• <span className="text-emerald-400 font-medium">1.5x a 3.0x (Ideal/Controlado - Atual):</span> Memorização ótima sem irritar o público.</div>
        <div>• <span className="text-rose-400 font-medium">&gt; 3.5x (Saturado/Crítico):</span> Público cansa, custo por lead sobe e exige troca de criativo.</div>
      </div>
    </div>
  );

  const tooltipDentroDaMeta = (
    <div className="space-y-1.5 text-xs">
      <div className="font-bold text-emerald-400 border-b border-zinc-700/60 pb-1 flex items-center justify-between">
        <span>Status: Dentro da Meta</span>
        <span className="text-[10px] text-zinc-400 font-mono">Eficiência CPL</span>
      </div>
      <p className="text-zinc-200 leading-snug">
        <strong className="text-white">Estado Atual:</strong> Custo médio por lead geral de R$ 9,67, mantendo-se dentro do teto operacional de R$ 10,00 estipulado para a operação.
      </p>
      <div className="pt-1.5 text-[11px] space-y-1 border-t border-zinc-800 text-zinc-400">
        <div className="font-semibold text-zinc-300">Cenários de Custo por Lead (CPL):</div>
        <div>• <span className="text-cyan-400 font-medium">&lt; R$ 7,00 (Super Eficiente):</span> Excelente atratividade criativa.</div>
        <div>• <span className="text-emerald-400 font-medium">R$ 7,00 a R$ 10,00 (Dentro da Meta - Atual):</span> Custo equilibrado e viabilidade econômica garantida.</div>
        <div>• <span className="text-rose-400 font-medium">&gt; R$ 10,00 (Acima da Meta):</span> Exige revisão imediata de segmentação e criativos.</div>
      </div>
    </div>
  );

  const tooltipLeadsCampanha = (
    <div className="space-y-1.5 text-xs">
      <div className="font-bold text-cyan-400 border-b border-zinc-700/60 pb-1 flex items-center justify-between">
        <span>Status: 780 Campanha Direta</span>
        <span className="text-[10px] text-zinc-400 font-mono">Volume</span>
      </div>
      <p className="text-zinc-200 leading-snug">
        <strong className="text-white">Estado Atual:</strong> 780 dos 808 cadastros foram captados na campanha focada em conversão, com pico de 38 cadastros no dia 13/09.
      </p>
    </div>
  );

  const tooltipCplDireto = (
    <div className="space-y-1.5 text-xs">
      <div className="font-bold text-amber-400 border-b border-zinc-700/60 pb-1 flex items-center justify-between">
        <span>Status: Super Eficiente</span>
        <span className="text-[10px] text-zinc-400 font-mono">CPL Direto</span>
      </div>
      <p className="text-zinc-200 leading-snug">
        <strong className="text-white">Estado Atual:</strong> R$ 6,42 por lead na campanha direta (R$ 5.005 / 780 cadastros), 35,8% abaixo do teto de R$ 10,00.
      </p>
    </div>
  );

  const tooltipCtr = (
    <div className="space-y-1.5 text-xs">
      <div className="font-bold text-purple-400 border-b border-zinc-700/60 pb-1 flex items-center justify-between">
        <span>Status: 5,51% em Leads</span>
        <span className="text-[10px] text-zinc-400 font-mono">CTR</span>
      </div>
      <p className="text-zinc-200 leading-snug">
        <strong className="text-white">Estado Atual:</strong> A taxa de cliques da campanha direta de cadastros atingiu 5,51%, superando com folga o benchmark de mercado (1,0% a 2,0%).
      </p>
    </div>
  );

  const tooltipTopAd = (
    <div className="space-y-1.5 text-xs">
      <div className="font-bold text-amber-300 border-b border-zinc-700/60 pb-1 flex items-center justify-between">
        <span>Status: 55,7% dos Leads</span>
        <span className="text-[10px] text-zinc-400 font-mono">Top Criativo</span>
      </div>
      <p className="text-zinc-200 leading-snug">
        <strong className="text-white">Estado Atual:</strong> Criativo Dra. Cíntia concentrou 435 cadastros a R$ 3,84 cada, sendo o grande motor de tração da operação.
      </p>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Header do Bloco */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Big Numbers de Mídia & Eficiência (Setembro vs Agosto / Abril)
            </h2>
          </div>
          <p className="text-xs text-text-muted mt-0.5">
            Dados consolidados auditados do Meta Ads Manager da Kota Saúde e Beleza (Ref: Slide 4 do Report Oficial).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-border text-zinc-300">
            Período: <strong className="text-cyan-400">Setembro 2026</strong>
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/40 text-emerald-400">
            Comparativo: <strong>MoM vs Agosto</strong>
          </span>
        </div>
      </div>

      {/* Grid de 12 Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* 1. Investimento Total */}
        <MetricCard
          id="total_spend"
          title="Investimento Total em Mídia"
          technicalCode="SPEND"
          value={`R$ ${d.spend.toLocaleString('pt-BR')}`}
          variationMoM={{
            value: d.spendMoM,
            isPositiveGood: false,
            text: "vs Agosto (R$ 7.683)"
          }}
          status="healthy"
          statusLabel="Controlado"
          statusTooltip={tooltipControlado}
          subtext="66,3% em Cadastros • 31,1% Branding"
          icon={<DollarSign className="w-4 h-4 text-emerald-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 2. Alcance Único */}
        <MetricCard
          id="reach"
          title="Alcance Único de Contas"
          technicalCode="REACH"
          value={d.reach.toLocaleString('pt-BR')}
          variationMoM={{
            value: d.reachMoM,
            isPositiveGood: true,
            text: "vs Agosto (122.085)"
          }}
          status="healthy"
          statusLabel="Expansão"
          statusTooltip={tooltipExpansao}
          subtext="+11.388 profissionais alcançados"
          icon={<Users className="w-4 h-4 text-cyan-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 3. Impressões Totais */}
        <MetricCard
          id="impressions"
          title="Impressões Totais"
          technicalCode="IMPR"
          value={d.impressions.toLocaleString('pt-BR')}
          status="healthy"
          statusLabel="Frequência 2,09x"
          statusTooltip={tooltipFrequencia}
          subtext="52% Stories • 29,7% Feed • 18,3% Reels"
          icon={<Eye className="w-4 h-4 text-indigo-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 4. Cadastros / Leads Totais */}
        <MetricCard
          id="leads_total"
          title="Cadastros Totais Captados"
          technicalCode="LEADS"
          value={d.leads.toLocaleString('pt-BR')}
          variationMoM={{
            value: d.leadsMoM,
            isPositiveGood: true,
            text: "vs Agosto (825)"
          }}
          status="healthy"
          statusLabel="780 Campanha"
          statusTooltip={tooltipLeadsCampanha}
          subtext="Pico de 38 cadastros no dia 13/09"
          icon={<Target className="w-4 h-4 text-cyan-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 5. CPL Médio Geral */}
        <MetricCard
          id="cpl"
          title="Custo por Lead Geral"
          technicalCode="CPL"
          value={`R$ ${d.cplAvg.toFixed(2).replace('.', ',')}`}
          variationMoM={{
            value: d.cplAvgMoM,
            isPositiveGood: false,
            text: "vs Agosto (R$ 9,31)"
          }}
          status="healthy"
          statusLabel="Dentro da Meta"
          statusTooltip={tooltipDentroDaMeta}
          subtext="Meta operacional: < R$ 10,00"
          icon={<DollarSign className="w-4 h-4 text-emerald-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 6. CPL Campanha Direta de Leads */}
        <MetricCard
          id="cpl_leads_campaign"
          title="CPL Campanha Direta"
          technicalCode="CPL-Direct"
          value={`R$ ${d.cplLeadsCampaign.toFixed(2).replace('.', ',')}`}
          status="healthy"
          statusLabel="Super Eficiente"
          statusTooltip={tooltipCplDireto}
          subtext="R$ 5.005 investidos / 780 cadastros"
          icon={<Award className="w-4 h-4 text-amber-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 7. CTR Taxa de Cliques */}
        <MetricCard
          id="ctr"
          title="Taxa de Cliques no Link"
          technicalCode="CTR"
          value={`${d.ctr.toFixed(2).replace('.', ',')}%`}
          variationMoM={{
            value: d.ctrMoM,
            isPositiveGood: true,
            text: "vs Agosto (2,05%)"
          }}
          status="healthy"
          statusLabel="5,51% em Leads"
          statusTooltip={tooltipCtr}
          subtext="ArocellCintia2 atingiu 8,18% de CTR"
          icon={<Percent className="w-4 h-4 text-purple-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 8. Criativo Campeão (Arocell Dra. Cíntia) */}
        <MetricCard
          id="arocell_efficiency"
          title="Top Criativo Arocell Cíntia"
          technicalCode="TOP-AD"
          value="R$ 3,84"
          status="healthy"
          statusLabel="55,7% dos Leads"
          statusTooltip={tooltipTopAd}
          subtext="435 leads a R$ 3,84 (menor CPL histórico)"
          icon={<Sparkles className="w-4 h-4 text-amber-300" />}
          onOpenModal={onOpenModal}
        />

        {/* 9. ThruPlays (Vídeos >= 15s) */}
        <MetricCard
          id="thruplays"
          title="Visualizações Qualificadas"
          technicalCode="THRUPLAY"
          value={d.thruplays.toLocaleString('pt-BR')}
          variationMoM={{
            value: d.thruplaysMoM,
            isPositiveGood: true,
            text: "vs Agosto (25.722)"
          }}
          status="warning"
          statusLabel="CPMt R$ 70"
          subtext="Fadiga no vídeo Andrea Tedesco"
          icon={<Video className="w-4 h-4 text-amber-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 10. Engajamentos Globais */}
        <MetricCard
          id="engagements"
          title="Engajamento Global"
          technicalCode="ENGAJ"
          value={d.engagements.toLocaleString('pt-BR')}
          variationMoM={{
            value: d.engagementsMoM,
            isPositiveGood: true,
            text: "vs Agosto (68.747)"
          }}
          status="healthy"
          statusLabel="CPMe R$ 126"
          subtext="59,7k curtidas, comentários e shares"
          icon={<Heart className="w-4 h-4 text-rose-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 11. Novos Seguidores no Instagram */}
        <MetricCard
          id="new_followers"
          title="Novos Seguidores no IG"
          technicalCode="IG-GROWTH"
          value={`+${d.newFollowers.toLocaleString('pt-BR')}`}
          status="healthy"
          statusLabel="52% Pago"
          subtext="Crescimento de base de dentistas e médicos"
          icon={<UserPlus className="w-4 h-4 text-pink-400" />}
          onOpenModal={onOpenModal}
        />

        {/* 12. Custo por Clique (CPC) */}
        <MetricCard
          id="cpc"
          title="Custo por Clique no Link"
          technicalCode="CPC"
          value={`R$ ${d.cpc.toFixed(2).replace('.', ',')}`}
          variationMoM={{
            value: d.cpcMoM,
            isPositiveGood: false,
            text: "vs Agosto (R$ 1,46)"
          }}
          status="healthy"
          statusLabel="R$ 1,18 em Leads"
          subtext="4.930 cliques totais direcionados"
          icon={<MousePointer className="w-4 h-4 text-blue-400" />}
          onOpenModal={onOpenModal}
        />
      </div>
    </div>
  );
};
