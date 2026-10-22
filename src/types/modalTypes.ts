export type MetricDiagnosisStatus = 'healthy' | 'warning' | 'critical';

export interface BusinessView {
  explanation: string;
  impact: string;
}

export interface TechnicalView {
  officialMetric: string;
  mcpEndpoint: string;
  formula: string;
  optimizationEvent: string;
  auctionParameters?: string;
}

export interface KotaDiagnosis {
  septValue: string;
  aprilValue?: string;
  highlight?: string;
  status: MetricDiagnosisStatus;
  details: string;
}

export interface RecommendedAction {
  title: string;
  description: string;
  mcpCommand: string;
  buttonLabel: string;
  actionId: string;
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
