import { FunnelStage, SpeedToLeadSummary } from '../types/funnelTypes';

/**
 * Dados reais da Esteira Comercial de 7 Etapas (Pós-Clique ao Faturamento ERP)
 * Referência: Diretoria Kota Saúde e Beleza & Relatório de Performance Consolidado
 * Investimento Total Mídia: R$ 7.546,00
 */
export const commercialFunnelStages: FunnelStage[] = [
  {
    id: 'stage_1_clicks',
    order: 1,
    name: 'Cliques em Anúncios',
    subtitle: 'Interesse inicial pós-anúncio Meta Ads',
    description: 'Volume total de 4.930 cliques nos links dos anúncios veiculados no Instagram (95%) e Facebook (5%). O valor de R$ 1,53 refere-se estritamente ao Custo por Clique (CPC). O Custo por Lead/Cadastro (CPL) é de R$ 9,66 no consolidado geral e R$ 6,42 na campanha direta, garantindo que o custo de aquisição do contato permaneça altamente econômico e eficiente.',
    volume: 4930,
    unitLabel: 'cliques',
    conversionFromPrevious: 100,
    dropOffRate: 0,
    dropOffVolume: 0,
    overallConversion: 100,
    cpaStage: 1.53,
    cpaLabel: 'CPC Médio',
    monetaryValue: 7546,
    monetaryLabel: 'Investimento Mídia',
    benchmarkRate: 1.65,
    status: 'healthy',
    explanationMetricId: 'funnel_stage_1_clicks'
  },
  {
    id: 'stage_2_raw_whatsapp',
    order: 2,
    name: 'Contatos Brutos WhatsApp',
    subtitle: 'Conversas iniciadas via API / WABA',
    description: 'Leads que clicaram no botão de WhatsApp do anúncio e enviaram mensagem inicial ou preencheram o formulário integrado à Cloud API.',
    volume: 320,
    unitLabel: 'conversas',
    conversionFromPrevious: 6.49, // 320 / 4930
    dropOffRate: 93.51,
    dropOffVolume: 4610,
    overallConversion: 6.49,
    cpaStage: 23.58, // 7546 / 320
    cpaLabel: 'Custo por Conversa',
    benchmarkRate: 5.2,
    status: 'healthy',
    explanationMetricId: 'funnel_stage_2_raw_whatsapp'
  },
  {
    id: 'stage_3_valid_leads',
    order: 3,
    name: 'Contatos Válidos (Anti-Curioso)',
    subtitle: 'Passaram pelo filtro de qualificação preliminar',
    description: 'Contatos que responderam às primeiras mensagens, validaram número ativo e confirmaram interesse em produtos/equipamentos odontológicos e estéticos.',
    volume: 208,
    unitLabel: 'contatos válidos',
    conversionFromPrevious: 65.00, // 208 / 320
    dropOffRate: 35.00,
    dropOffVolume: 112, // Curiosos descartados pelo bot/SDR
    overallConversion: 4.22, // 208 / 4930
    cpaStage: 25.38, // CPDQ oficial
    cpaLabel: 'CPDQ (Custo Diálogo Qualif.)',
    benchmarkRate: 55.0,
    status: 'healthy',
    explanationMetricId: 'funnel_stage_3_valid_leads'
  },
  {
    id: 'stage_4_tier_a',
    order: 4,
    name: 'Decisores Tier A (Proprietários/RT)',
    subtitle: 'Com poder de decisão e compra imediata',
    description: 'Dentistas proprietários de clínicas, Responsáveis Técnicos (RTs) ou gestores com poder orçamentário deliberativo confirmado.',
    volume: 118,
    unitLabel: 'proprietários / RTs',
    conversionFromPrevious: 56.73, // 118 / 208
    dropOffRate: 43.27,
    dropOffVolume: 90, // Acadêmicos, auxiliares ou sem poder de compra
    overallConversion: 2.39, // 118 / 4930
    cpaStage: 63.95, // 7546 / 118
    cpaLabel: 'CPA Decisor Tier A',
    benchmarkRate: 45.0,
    status: 'healthy',
    explanationMetricId: 'funnel_stage_4_tier_a'
  },
  {
    id: 'stage_5_meetings',
    order: 5,
    name: 'Reuniões / Demonstrações',
    subtitle: 'Sessões comerciais agendadas com consultor Kota',
    description: 'Demonstrações técnicas de produtos (resinas, biomateriais e equipamentos) e reuniões de alinhamento com a equipe de consultores de vendas.',
    volume: 34,
    unitLabel: 'demonstrações',
    conversionFromPrevious: 28.81, // 34 / 118
    dropOffRate: 71.19,
    dropOffVolume: 84, // Em nutrição ou ciclo de compra longo
    overallConversion: 0.69, // 34 / 4930
    cpaStage: 221.94, // 7546 / 34
    cpaLabel: 'Custo por Demonstração',
    benchmarkRate: 22.0,
    status: 'healthy',
    explanationMetricId: 'funnel_stage_5_meetings'
  },
  {
    id: 'stage_6_deals',
    order: 6,
    name: 'Vendas Fechadas',
    subtitle: 'Pedidos acordados e enviados para faturamento',
    description: 'Negociações concluídas com sucesso pelo time comercial da Kota Dental, com emissão de pedido aprovado.',
    volume: 12,
    unitLabel: 'contratos fechados',
    conversionFromPrevious: 35.29, // 12 / 34
    dropOffRate: 64.71,
    dropOffVolume: 22,
    overallConversion: 0.24, // 12 / 4930 (da base de cliques)
    cpaStage: 628.83, // CAC Oficial = 7546 / 12
    cpaLabel: 'CAC Comercial',
    benchmarkRate: 25.0,
    status: 'healthy',
    explanationMetricId: 'funnel_stage_6_deals'
  },
  {
    id: 'stage_7_revenue',
    order: 7,
    name: 'Faturamento Confirmado',
    subtitle: 'Receita líquida conciliada no ERP Kota',
    description: 'Valor real transacionado e registrado no ERP da Kota Dental gerado a partir do lote de leads e fechamentos rastreados: R$ 36.000,00 faturados com ROAS de 4,77x.',
    volume: 36000,
    unitLabel: 'R$ faturados',
    conversionFromPrevious: 100, // 12 contratos faturados
    dropOffRate: 0,
    dropOffVolume: 0,
    overallConversion: 100,
    cpaStage: 3000.00, // Ticket médio
    cpaLabel: 'Ticket Médio',
    monetaryValue: 36000,
    monetaryLabel: 'Receita Total Faturada',
    benchmarkRate: 100,
    status: 'healthy',
    explanationMetricId: 'funnel_stage_7_revenue'
  }
];

/**
 * Resumo dos Indicadores de Speed-to-Lead e Métricas de Síntese
 */
export const speedToLeadData: SpeedToLeadSummary = {
  tmpccMinutes: 4.8,
  previousMonthTmpccMinutes: 18.2,
  targetMinutes: 5.0,
  goldenWindowRate: 78.4,
  contactRateWithin15Min: 92.6,
  contactRateWithin60Min: 97.7,
  cpdq: 25.38,
  ticketMedio: 3000.00,
  cacComercial: 628.83,
  roasComercial: 4.77,
  totalInvested: 7546.00,
  totalRevenue: 36000.00,
  lossAttributedToDelayPercentage: 11.4,
  estimatedRevenueLossBrl: 22800.00,
  intervals: [
    {
      rangeLabel: '< 5 min',
      rangeDescription: 'Janela Áurea (Lead altamente receptivo no WhatsApp)',
      leadVolume: 251,
      percentageOfTotal: 78.4,
      conversionRate: 38.2,
      dropVsGoldenWindow: 0,
      estimatedLossBrl: 0,
      impactDescription: 'Pico de engajamento: o decisor ainda está com o smartphone em mãos analisando o anúncio.',
      status: 'healthy'
    },
    {
      rangeLabel: '5 - 15 min',
      rangeDescription: 'Atenção Inicial (Início da dispersão de atenção)',
      leadVolume: 45,
      percentageOfTotal: 14.2,
      conversionRate: 20.0,
      dropVsGoldenWindow: -47.6,
      estimatedLossBrl: 7200,
      impactDescription: 'Queda de 47% na propensão de agendamento; paciente ou dentista já iniciou outra atividade.',
      status: 'warning'
    },
    {
      rangeLabel: '15 - 60 min',
      rangeDescription: 'Zona Fria (Esfriamento acelerado do interesse)',
      leadVolume: 16,
      percentageOfTotal: 5.1,
      conversionRate: 9.1,
      dropVsGoldenWindow: -76.2,
      estimatedLossBrl: 9600,
      impactDescription: 'Mais de 75% de chance do lead não responder ou esquecer o motivo do contato.',
      status: 'critical'
    },
    {
      rangeLabel: '> 1 hora',
      rangeDescription: 'Zona Crítica (Perda comercial quase irreversível)',
      leadVolume: 8,
      percentageOfTotal: 2.3,
      conversionRate: 2.5,
      dropVsGoldenWindow: -93.5,
      estimatedLossBrl: 6000,
      impactDescription: 'Lead esfriou por completo; exige esforço dobrado de recuperação e cadência de reativação.',
      status: 'critical'
    }
  ]
};

/**
 * Matriz de Correlação Latência vs Queda de Conversão
 * Baseada no estudo empírico com a base de 320 conversas da Kota
 */
export const latencyCorrelationData = [
  {
    interval: '0 a 2 min',
    benchmarkConversion: '42.5%',
    actualKotaRate: '41.0%',
    leadCount: 168,
    churnRisk: 'Mínimo (< 5%)',
    verdict: 'Eficiência Máxima',
    financialImpact: 'Receita 100% Protegida'
  },
  {
    interval: '2 a 5 min',
    benchmarkConversion: '35.0%',
    actualKotaRate: '34.2%',
    leadCount: 83,
    churnRisk: 'Baixo (12%)',
    verdict: 'Dentro da Janela Áurea',
    financialImpact: 'Excelente Retenção'
  },
  {
    interval: '5 a 15 min',
    benchmarkConversion: '22.0%',
    actualKotaRate: '20.0%',
    leadCount: 45,
    churnRisk: 'Moderado (48%)',
    verdict: 'Risco de Dispersão',
    financialImpact: '- R$ 7.200 em vendas perdidas'
  },
  {
    interval: '15 a 30 min',
    benchmarkConversion: '14.0%',
    actualKotaRate: '12.5%',
    leadCount: 10,
    churnRisk: 'Alto (68%)',
    verdict: 'Lead Esfriando Rápido',
    financialImpact: '- R$ 4.800 em vendas perdidas'
  },
  {
    interval: '30 a 60 min',
    benchmarkConversion: '8.0%',
    actualKotaRate: '5.8%',
    leadCount: 6,
    churnRisk: 'Severo (85%)',
    verdict: 'Quebra de Intenção',
    financialImpact: '- R$ 4.800 em vendas perdidas'
  },
  {
    interval: '> 60 min',
    benchmarkConversion: '3.0%',
    actualKotaRate: '2.5%',
    leadCount: 8,
    churnRisk: 'Crítico (> 90%)',
    verdict: 'Lead Perdido / No-Show',
    financialImpact: '- R$ 6.000 em vendas perdidas'
  }
];
