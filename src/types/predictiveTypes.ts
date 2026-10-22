export type MatrixPillar = 
  | 'Desempenho dos Anúncios & Audiência'
  | 'Leilão & Mercado'
  | 'Sinais & Telemetria CAPI'
  | 'Atendimento & Conversão WhatsApp'
  | 'Gestão de Caixa & Faturamento Real';

export type FeatureStatus = 'healthy' | 'warning' | 'critical' | 'active' | 'in_progress';

export interface OneClickAction {
  id: string;
  label: string;
  commandSnippet?: string;
  mcpTool?: string;
  description: string;
  expectedOutcome: string;
  payload?: Record<string, any>;
}

export interface PredictiveMatrixItem {
  id: string;
  sigla: string;
  nome: string;
  pilar: MatrixPillar;
  status: FeatureStatus;
  valorAtual: string;
  benchmark: string;
  formula?: string;
  comoAvalia: string;
  resumoCard: string;
  endpointMCP?: string;
  impactoNegocio: string;
  confiancaScore: number; // 0 a 100%
  metricaInedita?: string;
  action?: OneClickAction;
}

export interface QuickActionItem {
  id: string;
  title: string;
  badge: string;
  categoryBadge?: string;
  mcpTool?: string;
  endpoint?: string;
  description: string;
  projectedImpact: string;
  businessHighlights?: string[];
  buttonLabel: string;
  severity: 'healthy' | 'warning' | 'critical';
  appliedSummary?: {
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
  };
  payload?: Record<string, any>;
  responsePayload?: Record<string, any>;
}

export interface PredictiveSummary {
  totalFeatures: number;
  healthyCount: number;
  warningCount: number;
  criticalCount: number;
  activeCount: number;
  projectedRevenueUplift: string;
  cacReductionPotential: string;
}
