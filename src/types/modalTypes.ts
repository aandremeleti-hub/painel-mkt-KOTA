export type MetricDiagnosisStatus = 'healthy' | 'warning' | 'critical';

export interface BusinessView {
  explanation: string;
  impact: string;
}

export interface TechnicalView {
  officialMetric: string;
  optimizationEvent: string;
  auctionParameters?: string;
  operationalNotes?: string;
  mcpEndpoint?: string;
  formula?: string;
}

export interface KotaDiagnosis {
  periodValue?: string;
  septValue?: string;
  aprilValue?: string;
  highlight?: string;
  status: MetricDiagnosisStatus;
  details: string;
}

export interface RecommendedAction {
  title: string;
  description: string;
  buttonLabel: string;
  actionId: string;
  mcpCommand?: string;
}

export interface MetricExplanation {
  metricId: string;
  title: string;
  technicalCode: string; // Ex: "CPL", "CPMa", "TMPCC", "CTR"
  businessView: BusinessView;
  technicalView: TechnicalView;
  kotaDiagnosis: KotaDiagnosis;
  recommendedAction: RecommendedAction;
}
