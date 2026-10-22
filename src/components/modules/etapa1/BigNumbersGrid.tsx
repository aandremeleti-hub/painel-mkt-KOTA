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
