export type MetricStatus = 'healthy' | 'warning' | 'critical';

export interface MetaKpiSummary {
  totalSpend: number;
  impressions: number;
  reach: number;
  frequency: number;
  clicks: number;
  ctr: number; // Percent (e.g. 1.85%)
  cpc: number; // R$
  cpm: number; // R$
  leads: number;
  cpl: number; // R$ Custo por Lead
  qualifiedLeads: number;
  cpql: number; // Custo por Lead Qualificado
  sales: number;
  cac: number;
  revenue: number;
  roas: number;
  periodComparison: {
    spendMoM: number;
    leadsMoM: number;
    cplMoM: number;
    ctrMoM: number;
  };
}

export type CreativeFormat = 'Vídeo Reels' | 'Carrossel' | 'Imagem Estática' | 'Stories';
export type CreativeStatus = 'winner' | 'active' | 'fatigued' | 'testing';

export interface CreativePerformance {
  id: string;
  adName: string;
  adSet: string;
  format: CreativeFormat;
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  hookRate: number; // 3-second video views / impressions (%)
  holdRate: number; // 100% video views / 3-second views (%)
  leads: number;
  cpl: number;
  status: CreativeStatus;
  thumbnailUrl?: string;
  headline?: string;
}

export interface DailyMetric {
  date: string; // YYYY-MM-DD
  dayLabel: string; // "01 Set", etc.
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  leads: number;
  cpl: number;
  cpc: number;
  qualifiedLeads: number;
}

export interface DemographicMetric {
  category: 'Idade' | 'Gênero' | 'Estado / Região' | 'Dispositivo';
  label: string; // e.g. "25-34", "Feminino", "SP", "Mobile"
  percentage: number;
  leads: number;
  cpl: number;
  spend: number;
}

export interface MetaCampaignMetric {
  id: string;
  name: string;
  objective: string;
  status: 'ACTIVE' | 'PAUSED' | 'ARCHIVED';
  dailyBudget: number;
  spend: number;
  leads: number;
  cpl: number;
  ctr: number;
  roas: number;
}
