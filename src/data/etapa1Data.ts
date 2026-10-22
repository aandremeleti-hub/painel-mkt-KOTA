export interface ConsolidatedPeriodData {
  spend: number;
  spendMoM: number;
  reach: number;
  reachMoM: number;
  impressions: number;
  leads: number;
  leadsMoM: number;
  cplAvg: number;
  cplAvgMoM: number;
  cplLeadsCampaign: number;
  ctr: number;
  ctrMoM: number;
  ctrLeadsCampaign: number;
  engagements: number;
  engagementsMoM: number;
  thruplays: number;
  thruplaysMoM: number;
  newFollowers: number;
  paidFollowersPct: number;
  cpc: number;
  cpcMoM: number;
  cpma: number;
  cpmaMoM: number;
}

export interface DailyMediaPoint {
  date: string; // "2026-09-01"
  dayLabel: string; // "01 Set"
  dayNumber: number; // 1
  spend: number; // R$
  leads: number; // Cadastros
  cpl: number; // R$ CPL diário
  thruplays: number;
  engagements: number;
  isPeakLeads?: boolean; // 13/09 (38 leads)
  isCriticalCPL?: boolean; // > R$ 10 (16/09, 19/09)
  isBestCPL?: boolean; // 07/09 (R$ 4,90)
}

export interface DeviceDemographic {
  device: string;
  percentage: number;
  color: string;
  trend: string;
}

export interface PlatformDemographic {
  platform: string;
  percentage: number;
  color: string;
}

export interface PlacementDemographic {
  placement: string;
  percentage: number;
  color: string;
}

export interface AgeDemographic {
  range: string;
  percentage: number;
  color: string;
  leadsEstimate: number;
}

export interface GenderDemographic {
  gender: string;
  percentage: number;
  color: string;
}

export interface StateDemographic {
  uf: string;
  name: string;
  percentage: number;
  color: string;
  rank: number;
}

export interface CreativeItem {
  id: string;
  adName: string;
  productLine: 'Arocell' | 'Linha Profissional';
  adSet: string;
  format: 'Vídeo Reels' | 'Imagem Estática' | 'Carrossel';
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  hookRate: number; // % visualização nos primeiros 3s
  holdRate: number; // % retenção até o final
  leads: number;
  cpl: number;
  status: 'winner' | 'active' | 'fatigued' | 'testing';
  alert?: string;
}

// 1. DADOS CONSOLIDADOS SETEMBRO vs AGOSTO / ABRIL (Slides 4, 5, 8, 9)
export const consolidatedMoMData: ConsolidatedPeriodData = {
  spend: 7546,
  spendMoM: -1.78, // R$ 7.546 vs R$ 7.683 (-2%)
  reach: 133473,
  reachMoM: 9.33, // 133.473 vs 122.085 (+9%)
  impressions: 279324,
  leads: 781,
  leadsMoM: -5.33, // 781 vs 825 (-5%)
  cplAvg: 9.66,
  cplAvgMoM: 3.76, // R$ 9,66 vs R$ 9,31 (+4%)
  cplLeadsCampaign: 6.42, // R$ 5.005 / 780 leads diretos (Slide 5 e 11)
  ctr: 1.76,
  ctrMoM: -14.15, // 1,76% vs 2,05% (-14%)
  ctrLeadsCampaign: 5.51, // 5,51% na campanha focada em cadastros (Slide 5)
  engagements: 59785,
  engagementsMoM: -13.04, // 59.785 vs 68.747 (-13%)
  thruplays: 21002,
  thruplaysMoM: -18.35, // 21.002 vs 25.722 (-18%)
  newFollowers: 1158,
  paidFollowersPct: 52, // 52% atribuídos à mídia paga
  cpc: 1.53,
  cpcMoM: 4.79, // R$ 1,53 vs R$ 1,46 (+5%)
  cpma: 57,
  cpmaMoM: -9.52, // R$ 57 vs R$ 63 (-10%)
};

// 2. DIARIZAÇÃO DIA A DIA - 30 DIAS DE SETEMBRO (Slides 9, 10, 16, 17, 22, 23)
export const dailyMediaData: DailyMediaPoint[] = [
  { date: '2026-09-01', dayLabel: '01/09', dayNumber: 1, spend: 136, leads: 25, cpl: 5.43, thruplays: 708, engagements: 247 },
  { date: '2026-09-02', dayLabel: '02/09', dayNumber: 2, spend: 163, leads: 29, cpl: 5.62, thruplays: 659, engagements: 198 },
  { date: '2026-09-03', dayLabel: '03/09', dayNumber: 3, spend: 170, leads: 27, cpl: 6.31, thruplays: 653, engagements: 207 },
  { date: '2026-09-04', dayLabel: '04/09', dayNumber: 4, spend: 147, leads: 18, cpl: 8.19, thruplays: 671, engagements: 218 },
  { date: '2026-09-05', dayLabel: '05/09', dayNumber: 5, spend: 192, leads: 31, cpl: 6.20, thruplays: 723, engagements: 190 },
  { date: '2026-09-06', dayLabel: '06/09', dayNumber: 6, spend: 215, leads: 37, cpl: 5.82, thruplays: 705, engagements: 229 },
  { date: '2026-09-07', dayLabel: '07/09', dayNumber: 7, spend: 171, leads: 35, cpl: 4.90, thruplays: 918, engagements: 231, isBestCPL: true },
  { date: '2026-09-08', dayLabel: '08/09', dayNumber: 8, spend: 124, leads: 23, cpl: 5.39, thruplays: 589, engagements: 207 },
  { date: '2026-09-09', dayLabel: '09/09', dayNumber: 9, spend: 162, leads: 28, cpl: 5.77, thruplays: 486, engagements: 166 },
  { date: '2026-09-10', dayLabel: '10/09', dayNumber: 10, spend: 170, leads: 23, cpl: 7.40, thruplays: 509, engagements: 177 },
  { date: '2026-09-11', dayLabel: '11/09', dayNumber: 11, spend: 162, leads: 28, cpl: 5.79, thruplays: 459, engagements: 208 },
  { date: '2026-09-12', dayLabel: '12/09', dayNumber: 12, spend: 172, leads: 25, cpl: 6.88, thruplays: 519, engagements: 189 },
  { date: '2026-09-13', dayLabel: '13/09', dayNumber: 13, spend: 204, leads: 38, cpl: 5.37, thruplays: 677, engagements: 231, isPeakLeads: true },
  { date: '2026-09-14', dayLabel: '14/09', dayNumber: 14, spend: 168, leads: 26, cpl: 6.48, thruplays: 603, engagements: 228 },
  { date: '2026-09-15', dayLabel: '15/09', dayNumber: 15, spend: 143, leads: 28, cpl: 5.11, thruplays: 487, engagements: 171 },
  { date: '2026-09-16', dayLabel: '16/09', dayNumber: 16, spend: 175, leads: 17, cpl: 10.32, thruplays: 543, engagements: 179, isCriticalCPL: true },
  { date: '2026-09-17', dayLabel: '17/09', dayNumber: 17, spend: 147, leads: 26, cpl: 5.67, thruplays: 532, engagements: 204 },
  { date: '2026-09-18', dayLabel: '18/09', dayNumber: 18, spend: 150, leads: 21, cpl: 7.14, thruplays: 486, engagements: 182 },
  { date: '2026-09-19', dayLabel: '19/09', dayNumber: 19, spend: 188, leads: 18, cpl: 10.43, thruplays: 513, engagements: 177, isCriticalCPL: true },
  { date: '2026-09-20', dayLabel: '20/09', dayNumber: 20, spend: 194, leads: 30, cpl: 6.46, thruplays: 557, engagements: 193 },
  { date: '2026-09-21', dayLabel: '21/09', dayNumber: 21, spend: 163, leads: 19, cpl: 8.58, thruplays: 550, engagements: 213 },
  { date: '2026-09-22', dayLabel: '22/09', dayNumber: 22, spend: 172, leads: 29, cpl: 5.93, thruplays: 510, engagements: 186 },
  { date: '2026-09-23', dayLabel: '23/09', dayNumber: 23, spend: 173, leads: 31, cpl: 5.58, thruplays: 620, engagements: 201 },
  { date: '2026-09-24', dayLabel: '24/09', dayNumber: 24, spend: 141, leads: 17, cpl: 8.31, thruplays: 483, engagements: 168 },
  { date: '2026-09-25', dayLabel: '25/09', dayNumber: 25, spend: 157, leads: 20, cpl: 7.87, thruplays: 408, engagements: 178 },
  { date: '2026-09-26', dayLabel: '26/09', dayNumber: 26, spend: 172, leads: 27, cpl: 6.37, thruplays: 446, engagements: 163 },
  { date: '2026-09-27', dayLabel: '27/09', dayNumber: 27, spend: 196, leads: 32, cpl: 6.13, thruplays: 466, engagements: 160 },
  { date: '2026-09-28', dayLabel: '28/09', dayNumber: 28, spend: 155, leads: 29, cpl: 5.34, thruplays: 415, engagements: 193 },
  { date: '2026-09-29', dayLabel: '29/09', dayNumber: 29, spend: 150, leads: 24, cpl: 6.25, thruplays: 381, engagements: 126 },
  { date: '2026-09-30', dayLabel: '30/09', dayNumber: 30, spend: 170, leads: 19, cpl: 8.95, thruplays: 386, engagements: 136 }
];

// 3. MATRIZ DEMOGRÁFICA EXATA - 6 EIXOS (Slides 29 a 34)
export const demographicsDevices: DeviceDemographic[] = [
  { device: 'Apple iOS (iPhone/iPad)', percentage: 52.3, color: '#f97316', trend: 'Virada Histórica (+8.7pp MoM) - Alta Renda' },
  { device: 'Android', percentage: 47.4, color: '#38bdf8', trend: '-8.8pp MoM (Retração orgânica)' },
  { device: 'Desktop / Computador', percentage: 0.3, color: '#71717a', trend: 'Estável em 0.3%' }
];

export const demographicsPlatforms: PlatformDemographic[] = [
  { platform: 'Instagram', percentage: 95.0, color: '#e1306c' },
  { platform: 'Facebook', percentage: 5.0, color: '#1877f2' }
];

export const demographicsPlacements: PlacementDemographic[] = [
  { placement: 'Instagram Stories', percentage: 52.0, color: '#f59e0b' },
  { placement: 'Instagram Feed', percentage: 29.7, color: '#3b82f6' },
  { placement: 'Instagram Reels', percentage: 18.3, color: '#ec4899' },
  { placement: 'Outros (Facebook/Audience)', percentage: 0.0, color: '#6b7280' }
];

export const demographicsAge: AgeDemographic[] = [
  { range: '25-34 anos', percentage: 31.7, color: '#2dd4bf', leadsEstimate: 248 },
  { range: '35-44 anos', percentage: 20.9, color: '#14b8a6', leadsEstimate: 163 },
  { range: '45-54 anos', percentage: 18.3, color: '#0d9488', leadsEstimate: 143 },
  { range: '18-24 anos', percentage: 12.4, color: '#5eead4', leadsEstimate: 97 },
  { range: '55-64 anos', percentage: 10.8, color: '#0f766e', leadsEstimate: 84 },
  { range: '65+ anos', percentage: 5.9, color: '#115e59', leadsEstimate: 46 }
];

export const demographicsGender: GenderDemographic[] = [
  { gender: 'Feminino', percentage: 81.0, color: '#f43f5e' },
  { gender: 'Masculino', percentage: 19.0, color: '#3b82f6' }
];

export const demographicsStates: StateDemographic[] = [
  { uf: 'SP', name: 'São Paulo', percentage: 33.8, color: '#ef4444', rank: 1 },
  { uf: 'RJ', name: 'Rio de Janeiro', percentage: 10.7, color: '#10b981', rank: 2 },
  { uf: 'MG', name: 'Minas Gerais', percentage: 7.5, color: '#f97316', rank: 3 },
  { uf: 'PR', name: 'Paraná', percentage: 6.8, color: '#06b6d4', rank: 4 },
  { uf: 'BA', name: 'Bahia', percentage: 5.0, color: '#84cc16', rank: 5 },
  { uf: 'Outros', name: 'Outros Estados (RS, PE, CE, SC, MA)', percentage: 20.5, color: '#64748b', rank: 6 }
];

// 4. TABELA DE CRIATIVOS REAIS (Slides 12 e 13)
export const creativesPerformanceData: CreativeItem[] = [
  {
    id: 'arocell_cintia_2',
    adName: '20260312-VID-ArocellCintia2',
    productLine: 'Arocell',
    adSet: 'Interesses Arocell',
    format: 'Vídeo Reels',
    spend: 1669,
    impressions: 26438,
    clicks: 2163,
    ctr: 8.18,
    hookRate: 46.2,
    holdRate: 22.4,
    leads: 435,
    cpl: 3.84,
    status: 'winner',
    alert: 'Campeão Absoluto: 55,7% dos leads com o menor CPL (R$ 3,84)'
  },
  {
    id: 'exo_soothing_mask',
    adName: '20250611-SI-ExoSoothingMask',
    productLine: 'Linha Profissional',
    adSet: 'Leads Geral',
    format: 'Imagem Estática',
    spend: 46,
    impressions: 780,
    clicks: 22,
    ctr: 2.82,
    hookRate: 31.0,
    holdRate: 14.5,
    leads: 8,
    cpl: 5.76,
    status: 'winner',
    alert: 'Excelente eficiência de conversão (CPL R$ 5,76). Sugestão: Escalar verba'
  },
  {
    id: 'sleeping_cap_cream',
    adName: '20250611-SI-SleepingCapCream',
    productLine: 'Linha Profissional',
    adSet: 'Leads Geral',
    format: 'Imagem Estática',
    spend: 769,
    impressions: 11709,
    clicks: 481,
    ctr: 4.11,
    hookRate: 34.2,
    holdRate: 16.8,
    leads: 84,
    cpl: 9.16,
    status: 'active'
  },
  {
    id: 'vitaran_si',
    adName: '20250611-SI-Vitaran',
    productLine: 'Linha Profissional',
    adSet: 'Leads Geral',
    format: 'Imagem Estática',
    spend: 74,
    impressions: 1319,
    clicks: 42,
    ctr: 3.18,
    hookRate: 27.0,
    holdRate: 11.2,
    leads: 8,
    cpl: 9.27,
    status: 'active'
  },
  {
    id: 'bella_b_vid',
    adName: '20251104-Vid-BellaB',
    productLine: 'Linha Profissional',
    adSet: 'Leads Geral',
    format: 'Vídeo Reels',
    spend: 624,
    impressions: 5708,
    clicks: 299,
    ctr: 5.24,
    hookRate: 38.5,
    holdRate: 18.2,
    leads: 66,
    cpl: 9.46,
    status: 'active'
  },
  {
    id: 'azulene_cap_serum',
    adName: '20250611-SI-AzuleneCapWSerum',
    productLine: 'Linha Profissional',
    adSet: 'Leads Geral',
    format: 'Imagem Estática',
    spend: 1617,
    impressions: 27592,
    clicks: 1105,
    ctr: 4.00,
    hookRate: 29.1,
    holdRate: 12.0,
    leads: 161,
    cpl: 10.05,
    status: 'fatigued',
    alert: 'CPL ultrapassou R$ 10,00. Anúncio ativo desde Junho/2025 com fadiga'
  },
  {
    id: 'phyto_plus',
    adName: '20250611-SI-Phyto+',
    productLine: 'Linha Profissional',
    adSet: 'Leads Geral',
    format: 'Imagem Estática',
    spend: 200,
    impressions: 3091,
    clicks: 113,
    ctr: 3.66,
    hookRate: 24.5,
    holdRate: 9.8,
    leads: 18,
    cpl: 11.12,
    status: 'fatigued',
    alert: 'Pior CPL da conta (R$ 11,12). Recomenda-se pausar e renovar o ângulo'
  }
];
