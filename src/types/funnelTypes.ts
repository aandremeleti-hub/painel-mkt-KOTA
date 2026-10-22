export type FunnelStageId = 
  | 'stage_1_clicks'
  | 'stage_2_raw_whatsapp'
  | 'stage_3_valid_leads'
  | 'stage_4_tier_a'
  | 'stage_5_meetings'
  | 'stage_6_deals'
  | 'stage_7_revenue'
  | 'stage_1_leads'
  | 'stage_2_contacted'
  | 'stage_3_qualified'
  | 'stage_4_scheduled'
  | 'stage_5_attended'
  | 'stage_6_proposal'
  | 'stage_7_won'
  | string;

export interface FunnelStage {
  id: FunnelStageId;
  order: number;
  name: string;
  subtitle?: string;
  description: string;
  volume: number;
  unitLabel: string; // Ex: "cliques", "conversas", "proprietários", "contratos"
  conversionFromPrevious: number; // Percentual de conversão sobre a etapa anterior (ex: 65%)
  dropOffRate: number; // Percentual de perda na etapa (ex: 35%)
  dropOffVolume: number; // Volume numérico perdido
  overallConversion: number; // Percentual sobre a primeira etapa (topo)
  cpaStage: number; // Custo unitário nesta etapa (ex: CPL, CAC, CPDQ)
  cpaLabel?: string; // Ex: "CPC", "CP Conversa", "CPDQ", "CAC"
  monetaryValue?: number; // Ex: R$ 36.000 para faturamento
  monetaryLabel?: string;
  benchmarkRate?: number; // Benchmark de mercado
  status: 'healthy' | 'warning' | 'critical';
  explanationMetricId: string; // Id da métrica para abrir modal educativo
}

export interface SpeedToLeadInterval {
  rangeLabel: string; // "< 5 min", "5 - 15 min", "15 - 60 min", "> 1 hora"
  rangeDescription: string;
  leadVolume: number;
  percentageOfTotal: number;
  conversionRate: number; // Taxa de agendamento/venda para este intervalo
  dropVsGoldenWindow: number; // Queda percentual em relação à janela áurea (<5 min)
  estimatedLossBrl: number; // Perda financeira estimada por não contatar na janela áurea
  impactDescription: string;
  status: 'healthy' | 'warning' | 'critical';
}

export interface SpeedToLeadSummary {
  tmpccMinutes: number; // Tempo Médio do Primeiro Contato Comercial em minutos (4.8 min)
  previousMonthTmpccMinutes: number; // vs mês anterior (ex: 18 min)
  targetMinutes: number; // Meta ideal (5 min)
  goldenWindowRate: number; // Taxa de Janela Áurea (< 5 min) - 78.4%
  contactRateWithin15Min: number; // % contatados em < 15 min (92.6%)
  contactRateWithin60Min: number;
  cpdq: number; // Custo por Diálogo Comercial Qualificado (R$ 25,38)
  ticketMedio: number; // R$ 3.000,00
  cacComercial: number; // R$ 628,83
  roasComercial: number; // 4.77x
  totalInvested: number; // R$ 7.546,00
  totalRevenue: number; // R$ 36.000,00
  lossAttributedToDelayPercentage: number; // Perda de conversão atribuída à demora
  estimatedRevenueLossBrl: number; // Perda financeira estimada total
  intervals: SpeedToLeadInterval[];
}

export interface CommercialRepPerformance {
  repId: string;
  name: string;
  role: 'SDR' | 'Closer' | 'Consultor';
  leadsAssigned: number;
  leadsContacted: number;
  avgResponseTimeMinutes: number;
  scheduledAppointments: number;
  attendanceRate: number;
  dealsWon: number;
  conversionRate: number;
  revenueGenerated: number;
}
