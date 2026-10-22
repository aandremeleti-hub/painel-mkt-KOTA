import { MetricExplanation } from '../types/modalTypes';

export const metricExplanations: Record<string, MetricExplanation> = {
  // =========================================================================
  // MÉTRICAS GERAIS DE TRÁFEGO & FUNIL (EXISTENTES)
  // =========================================================================
  cpl: {
    metricId: 'cpl',
    title: 'Custo por Lead',
    technicalCode: 'CPL (Cost Per Lead)',
    businessView: {
      explanation: 'O CPL mede quanto a Kota investe em anúncios no Meta para gerar uma oportunidade comercial cadastrada (nome, WhatsApp, interesse). Na prática clínica, representa o preço pago para colocar uma pessoa interessada em procedimentos estéticos na fila de atendimento do time comercial.',
      impact: 'Se o CPL sobe sem que a taxa de conversão em matrículas/vendas acompanhe, a margem de lucro por paciente diminui diretamente. Reduzir o CPL com qualidade permite acelerar a captação de clientes sem estourar o orçamento mensal.'
    },
    technicalView: {
      officialMetric: 'cost_per_conversion / actions:lead',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=cost_per_conversion,spend,actions',
      formula: 'CPL = Gasto Total em Anúncios (R$) / Total de Leads Coletados',
      optimizationEvent: 'LEAD (Instant Forms & Conversão WhatsApp)',
      auctionParameters: 'Bid Strategy: Lowest Cost (Auto-bid), Attribution Window: 7-day click or 1-day view'
    },
    kotaDiagnosis: {
      septValue: 'R$ 14,80',
      aprilValue: 'R$ 22,40',
      highlight: '-33,9% vs Abril (Melhora expressiva de eficiência)',
      status: 'healthy',
      details: 'A reestruturação de públicos geolocalizados e exclusão de cadastros inválidos reduziu o custo por oportunidade em mais de 30% em Setembro, estabilizando a geração diária.'
    },
    recommendedAction: {
      title: 'Escalar orçamento nas campanhas de alta conversão',
      description: 'Aumentar gradualmente em 15% o orçamento dos 3 melhores conjuntos sem reiniciar a fase de aprendizado do algoritmo da Meta.',
      mcpCommand: 'mcp_call("meta_ads", "adjust_adset_budget", { adset_id: "23851940124", budget_increase_pct: 15 })',
      buttonLabel: 'Executar Otimização via Meta MCP',
      actionId: 'scale_cpl_adsets'
    }
  },

  cpma: {
    metricId: 'cpma',
    title: 'Custo por Mil Impressões / Alcance',
    technicalCode: 'CPMa / CPM (Cost Per Mille)',
    businessView: {
      explanation: 'Indica quanto custa para a marca Kota aparecer 1.000 vezes nas telas dos usuários na região de cobertura. É a taxa de leilão cobrada pela Meta para expor a oferta aos médicos, dentistas e pacientes qualificados.',
      impact: 'Um CPM muito alto indica público saturado, leilão muito concorrido na praça ou criativos com baixa nota de relevância/engajamento. CPM menor significa mais olhares qualificados pelo mesmo valor investido.'
    },
    technicalView: {
      officialMetric: 'cpm (Cost per 1,000 Impressions)',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=cpm,reach,impressions',
      formula: 'CPM = (Gasto Total / Impressões) × 1.000',
      optimizationEvent: 'IMPRESSIONS / REACH',
      auctionParameters: 'Estimated Action Rates + User Value + Advertiser Bid'
    },
    kotaDiagnosis: {
      septValue: 'R$ 28,50',
      aprilValue: 'R$ 34,10',
      highlight: '-16,4% vs Abril (Melhora no índice de qualidade)',
      status: 'healthy',
      details: 'A introdução de novos formatos de vídeo Reels e criativos de validação clínica elevou a taxa de retenção dos anúncios, reduzindo o custo de disputa no leilão local.'
    },
    recommendedAction: {
      title: 'Renovar criativos com fadiga de frequência',
      description: 'Substituir anúncios com mais de 25 dias ativos por novas variações de depoimentos de alunas/pacientes.',
      mcpCommand: 'mcp_call("meta_ads", "rotate_creatives", { campaign_id: "61902839102", action: "inject_fresh_ugc" })',
      buttonLabel: 'Rotacionar Criativos via Meta MCP',
      actionId: 'rotate_fatigued_creatives'
    }
  },

  ctr: {
    metricId: 'ctr',
    title: 'Taxa de Cliques no Link',
    technicalCode: 'CTR link (Click-Through Rate)',
    businessView: {
      explanation: 'Percentual de pessoas que viram o anúncio da Kota e tomaram a decisão ativa de clicar para ir à página de vendas ou abrir o WhatsApp comercial. É o termômetro exato da atratividade da promessa e do visual da campanha.',
      impact: 'CTR alto significa que o anúncio gera curiosidade e desejo imediato. Quando o CTR cai abaixo de 1%, o custo de tráfego sobe exponencialmente porque poucas pessoas acessam a página.'
    },
    technicalView: {
      officialMetric: 'inline_link_click_ctr',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=inline_link_click_ctr,clicks,impressions',
      formula: 'CTR (%) = (Cliques no Link / Total de Impressões) × 100',
      optimizationEvent: 'LINK_CLICKS / LANDING_PAGE_VIEWS',
      auctionParameters: 'Threshold ideal para estética médica: CTR > 1.40%'
    },
    kotaDiagnosis: {
      septValue: '1,85%',
      aprilValue: '1,12%',
      highlight: '+65,2% vs Abril (Melhoria substancial no gancho)',
      status: 'healthy',
      details: 'O novo padrão de ganchos (Hook Rate) nos primeiros 3 segundos dos vídeos fez a taxa de cliques saltar de 1,12% para 1,85%, superando o benchmark do setor.'
    },
    recommendedAction: {
      title: 'Aplicar gancho vencedor nos anúncios secundários',
      description: 'Duplicar a introdução visual de 3 segundos do criativo campeão nos outros 4 anúncios ativos.',
      mcpCommand: 'mcp_call("meta_ads", "apply_top_hook_template", { source_ad_id: "2389102941", target_adsets: ["23851940124"] })',
      buttonLabel: 'Replicar Gancho via Meta MCP',
      actionId: 'apply_top_hook'
    }
  },

  cpc: {
    metricId: 'cpc',
    title: 'Custo por Clique no Link',
    technicalCode: 'CPC link (Cost Per Click)',
    businessView: {
      explanation: 'O valor exato desembolsado pela Kota para cada visitante único que clica no anúncio e aterrissa na página da clínica ou no canal de atendimento.',
      impact: 'Diretamente ligado ao custo de aquisição final. Controlar o CPC em centavos permite comprar mais tráfego qualificado com a mesma verba diária.'
    },
    technicalView: {
      officialMetric: 'cost_per_inline_link_click',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=cost_per_inline_link_click,spend,inline_link_clicks',
      formula: 'CPC = Valor Total Investido / Quantidade de Cliques no Link',
      optimizationEvent: 'LANDING_PAGE_VIEWS',
      auctionParameters: 'Influenciado diretamente pelo CTR e índice de qualidade da página'
    },
    kotaDiagnosis: {
      septValue: 'R$ 1,54',
      aprilValue: 'R$ 2,35',
      highlight: '-34,5% vs Abril (Eficiência de compra no leilão)',
      status: 'healthy',
      details: 'A hiper-segmentação local em raios de 15km em torno das unidades Kota reduziu a dispersão de cliques inúteis fora da área de atendimento.'
    },
    recommendedAction: {
      title: 'Ajustar lances de clique na praça principal',
      description: 'Rebalancear o limite de custo por clique nas regiões com densidade médica elevada.',
      mcpCommand: 'mcp_call("meta_ads", "update_bid_cap", { adset_id: "23851940124", max_cpc_target: 1.60 })',
      buttonLabel: 'Fixar Teto de CPC via Meta MCP',
      actionId: 'update_cpc_cap'
    }
  },

  frequency: {
    metricId: 'frequency',
    title: 'Frequência Média de Exposição',
    technicalCode: 'FREQ (Frequency)',
    businessView: {
      explanation: 'O número médio de vezes que uma mesma pessoa viu os anúncios da Kota no período. Em negócios de saúde e beleza, uma frequência moderada (2x a 3x) gera confiança, mas frequências acima de 4x provocam saturação e rejeição da marca.',
      impact: 'Frequência acima de 3.5 em janelas de 14 dias indica exaustão de público. O lead para de clicar, o CPL dispara e o dinheiro da campanha é desperdiçado mostrando o mesmo anúncio para quem já recusou a oferta.'
    },
    technicalView: {
      officialMetric: 'frequency',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=frequency,impressions,reach',
      formula: 'Frequência = Total de Impressões / Alcance Único (Reach)',
      optimizationEvent: 'REACH / LEAD',
      auctionParameters: 'Alerta de saturação ativo quando frequência semanal > 3.2'
    },
    kotaDiagnosis: {
      septValue: '2,42',
      aprilValue: '4,15',
      highlight: 'Setembro em faixa ideal (2.0 a 2.8) vs Abril saturado (4.15)',
      status: 'healthy',
      details: 'Em Abril, a campanha reciclava o mesmo público restrito causando estresse de audiência. Em Setembro, a expansão de lookalike e novos públicos de interesse normalizou o índice em 2.42.'
    },
    recommendedAction: {
      title: 'Configurar trava de segurança de frequência no MCP',
      description: 'Criar regra automatizada para reduzir 20% do orçamento do conjunto caso a frequência ultrapasse 3.5 na janela de 7 dias.',
      mcpCommand: 'mcp_call("meta_ads", "create_rule", { condition: "frequency > 3.5", action: "decrease_budget_20pct" })',
      buttonLabel: 'Ativar Trava no Meta MCP',
      actionId: 'set_frequency_rule'
    }
  },

  roas: {
    metricId: 'roas',
    title: 'Retorno sobre Investimento Publicitário',
    technicalCode: 'ROAS (Return On Ad Spend)',
    businessView: {
      explanation: 'Mede quantas vezes o faturamento gerado com os novos pacientes ou alunos superou o total de dinheiro investido nos anúncios Meta. Exemplo: um ROAS de 4.2x significa que cada R$ 1,00 colocado em tráfego retornou R$ 4,20 em faturamento bruto.',
      impact: 'É o indicador supremo de rentabilidade do tráfego pago. Mostra se o marketing é uma despesa ou uma máquina previsível de geração de caixa para a Kota.'
    },
    technicalView: {
      officialMetric: 'purchase_roas',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=purchase_roas,action_values,spend',
      formula: 'ROAS = Faturamento Atribuído às Vendas (R$) / Gasto Total em Anúncios (R$)',
      optimizationEvent: 'PURCHASE / OFF_LINE_CONVERSIONS',
      auctionParameters: 'Integrado com a API de Conversões (CAPI) e CRM Kota'
    },
    kotaDiagnosis: {
      septValue: '4,28x',
      aprilValue: '2,15x',
      highlight: '+99,1% vs Abril (Dobro de rentabilidade sobre a mídia)',
      status: 'healthy',
      details: 'A integração de dados de vendas do CRM de volta ao Meta Ads via MCP permitiu ao algoritmo focar na busca de leads com maior ticket médio e poder aquisitivo.'
    },
    recommendedAction: {
      title: 'Sincronizar conversões offline via Meta CAPI',
      description: 'Disparar lote diário de faturamento real dos pacientes direto no Pixel da Meta para calibrar a inteligência de público pagante.',
      mcpCommand: 'mcp_call("meta_ads", "sync_offline_conversions", { dataset_id: "9021481029", batch_date: "2026-09-30" })',
      buttonLabel: 'Sincronizar CRM via Meta MCP',
      actionId: 'sync_capi_offline'
    }
  },

  tmpcc: {
    metricId: 'tmpcc',
    title: 'Tempo Médio do Primeiro Contato Comercial',
    technicalCode: 'TMPCC (Speed-to-Lead)',
    businessView: {
      explanation: 'O tempo que a equipe comercial ou secretárias da Kota demoram para enviar a primeira mensagem ou ligar para o lead a partir do segundo exato em que ele preencheu o formulário no Instagram ou Facebook.',
      impact: 'Pesquisas e dados empíricos provam que o lead esfria 80% após 15 minutos. Contatar em menos de 5 minutos multiplica a chance de agendamento por até 5x. Demorar mais de 1 hora transforma um lead quente de R$ 15 em lead perdido.'
    },
    technicalView: {
      officialMetric: 'commercial_speed_to_lead_minutes',
      mcpEndpoint: 'crm_analytics://kota_sales/speed_to_lead?period=2026-09',
      formula: 'TMPCC = Soma(Timestamp 1º Contato WhatsApp - Timestamp Cadastro Lead) / Total Leads',
      optimizationEvent: 'FIRST_CONTACT_SLA',
      auctionParameters: 'Meta operacional ideal: TMPCC <= 5 minutos em horário comercial'
    },
    kotaDiagnosis: {
      septValue: '18 min',
      aprilValue: '142 min',
      highlight: '-87,3% de tempo de espera vs Abril (Grande evolução, mas ainda há gargalo)',
      status: 'warning',
      details: 'Embora tenha ocorrido um salto impressionante saindo de mais de 2 horas em Abril para 18 minutos em Setembro, o tempo ainda supera os 5 minutos de ouro, gerando perda estimada de 14% de agendamentos.'
    },
    recommendedAction: {
      title: 'Ativar bot de primeiro contato instantâneo (SDR IA)',
      description: 'Ligar o disparador automático em menos de 60 segundos com mensagem personalizada no WhatsApp para iniciar a triagem enquanto a atendente assume.',
      mcpCommand: 'mcp_call("crm_hub", "enable_instant_whatsapp_dispatcher", { sla_target_seconds: 60, fallback_rep: true })',
      buttonLabel: 'Ativar SDR IA Instantâneo',
      actionId: 'activate_sdr_ia'
    }
  },

  contact_rate: {
    metricId: 'contact_rate',
    title: 'Taxa de Efetividade de Contato (< 15 min)',
    technicalCode: 'SLA-15 (Lead Contact Effectiveness)',
    businessView: {
      explanation: 'Percentual de leads que a equipe comercial consegue abordar e receber resposta nos primeiros 15 minutos após o preenchimento.',
      impact: 'Leads contatados de prontidão respondem na hora porque ainda estão com o celular na mão pensando no procedimento ou curso da Kota.'
    },
    technicalView: {
      officialMetric: 'contact_rate_sla_15min',
      mcpEndpoint: 'crm_analytics://kota_sales/sla_performance?window=15min',
      formula: '(Leads Contatados em < 15min / Total de Leads Recebidos) × 100',
      optimizationEvent: 'SPEED_CONTACT_RATE',
      auctionParameters: 'Target operacional: > 75% dos leads acionados no primeiro quarto de hora'
    },
    kotaDiagnosis: {
      septValue: '68,4%',
      aprilValue: '21,3%',
      highlight: '+221% de melhoria operacional vs Abril',
      status: 'warning',
      details: 'O time aumentou muito a prontidão, mas horários de pico (12h-14h e pós-18h) acumulam fila de atendimento sem resposta rápida.'
    },
    recommendedAction: {
      title: 'Configurar roteamento dinâmico de fila no WhatsApp',
      description: 'Distribuir leads não atendidos em 8 minutos para a segunda linha de atendimento de plantão.',
      mcpCommand: 'mcp_call("crm_hub", "set_escalation_rule", { timeout_minutes: 8, target_pool: "standby_sdrs" })',
      buttonLabel: 'Aplicar Escalação no CRM',
      actionId: 'set_escalation_rule'
    }
  },

  stage_conversion: {
    metricId: 'stage_conversion',
    title: 'Taxa de Conversão Funil: Lead → Venda',
    technicalCode: 'CR-End (End-to-End Funnel Conversion)',
    businessView: {
      explanation: 'De cada 100 pessoas que deixam o contato nos anúncios da Kota, quantas chegam ao final do processo comercial e fecham o tratamento estético ou curso.',
      impact: 'Um aumento de apenas 1 ponto percentual nessa taxa (ex: de 3% para 4%) representa dezenas de milhares de reais a mais no faturamento da Kota com o mesmíssimo investimento em tráfego.'
    },
    technicalView: {
      officialMetric: 'full_funnel_conversion_rate',
      mcpEndpoint: 'crm_analytics://kota_sales/funnel_velocity?stages=all',
      formula: '(Vendas Faturadas / Total de Leads Únicos) × 100',
      optimizationEvent: 'CRM_WON_DEAL',
      auctionParameters: 'Benchmark nacional de estética especializada: 3.5% a 5.5%'
    },
    kotaDiagnosis: {
      septValue: '4,12%',
      aprilValue: '1,89%',
      highlight: '+118% no aproveitamento de ponta a ponta',
      status: 'healthy',
      details: 'A integração entre a qualificação prévia nos formulários Meta e a esteira de follow-up do comercial mais que dobrou a taxa de fechamento em Setembro.'
    },
    recommendedAction: {
      title: 'Ativar cadência de recuperação de propostas abertas',
      description: 'Disparar sequência automatizada de 3 mensagens de valor e prova social para leads em fase de proposta há mais de 48h.',
      mcpCommand: 'mcp_call("crm_hub", "trigger_nurture_cadence", { stage: "stage_6_proposal", delay_hours: 48 })',
      buttonLabel: 'Disparar Cadência de Resgate',
      actionId: 'trigger_nurture_cadence'
    }
  },

  loss_delay: {
    metricId: 'loss_delay',
    title: 'Perda Estimada por Lentidão Comercial',
    technicalCode: 'OPP-LOSS (Opportunity Delay Loss)',
    businessView: {
      explanation: 'Estimativa financeira de quanto dinheiro a Kota deixou de faturar no mês exclusivamente porque leads responderam tarde ou foram contatados após horas de espera.',
      impact: 'Mostra com clareza matemática que o gargalo muitas vezes não está na mídia paga (que já entregou o contato), mas na velocidade e disciplina do atendimento humano.'
    },
    technicalView: {
      officialMetric: 'projected_opportunity_loss_brl',
      mcpEndpoint: 'predictive_engine://kota_sales/leakage_analysis',
      formula: 'Σ [Leads em intervalo de atraso × (Conversão Esperada <5min - Conversão Real do Intervalo) × Ticket Médio]',
      optimizationEvent: 'LEAKAGE_REDUCTION',
      auctionParameters: 'Calculado sobre o ticket médio atual da Kota Saúde e Beleza (R$ 3.800)'
    },
    kotaDiagnosis: {
      septValue: 'R$ 38.400',
      aprilValue: 'R$ 145.000',
      highlight: 'Redução de R$ 106.600 em dinheiro perdido no ralo do atendimento',
      status: 'warning',
      details: 'Embora a perda tenha caído vertiginosamente, ainda há R$ 38.400 em potencial que pode ser resgatado com a automação de SLA rígido.'
    },
    recommendedAction: {
      title: 'Habilitar trava de penalidade de lead no CRM',
      description: 'Se o SDR demorar mais de 10 min, o lead é redistribuído automaticamente para outro consultor ativo.',
      mcpCommand: 'mcp_call("crm_hub", "enable_strict_lead_reassignment", { max_wait_minutes: 10 })',
      buttonLabel: 'Ativar Redistribuição Automática',
      actionId: 'enable_strict_reassignment'
    }
  },

  // =========================================================================
  // BIG NUMBERS DE MÍDIA & EFICIÊNCIA (ETAPA 1)
  // =========================================================================
  total_spend: {
    metricId: 'total_spend',
    title: 'Investimento Total em Mídia',
    technicalCode: 'SPEND / AD-BUDGET',
    businessView: {
      explanation: 'Volume total de recursos financeiros investidos na infraestrutura de anúncios Meta Ads ao longo do mês de Setembro.',
      impact: 'O investimento de R$ 7.546 gerou 4.930 cliques, 780 cadastros e R$ 36.000 em vendas faturadas no ERP Kota, garantindo retorno positivo comprovado.'
    },
    technicalView: {
      officialMetric: 'spend',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=spend,account_currency',
      formula: 'Spend Total = Σ (impressões × CPM / 1000) por conjunto de anúncios',
      optimizationEvent: 'CAMPAIGN_BUDGET_OPTIMIZATION (CBO)',
      auctionParameters: 'Orçamento com 66,3% em campanhas de captação e 31,1% em branding'
    },
    kotaDiagnosis: {
      septValue: 'R$ 7.546,00',
      aprilValue: 'R$ 8.950,00',
      highlight: '-1,8% vs Agosto (R$ 7.683) • -15,7% vs Abril com maior retorno',
      status: 'healthy',
      details: 'Investimento perfeitamente controlado dentro da meta orçamentária aprovada pela diretoria (Waldir Ward e Lucas), com alocação focada em conversão.'
    },
    recommendedAction: {
      title: 'Rebalancear orçamentos diários nos conjuntos com ROAS > 3.5x',
      description: 'Ajustar distribuição diária via MCP sem reiniciar o aprendizado dos conjuntos estabilizados.',
      mcpCommand: 'mcp_call("meta_ads", "rebalance_cbo_budgets", { account_id: "act_204128509890123", target_efficiency: 3.5 })',
      buttonLabel: 'Rebalancear Orçamento via Meta MCP',
      actionId: 'rebalance_spend_mcp'
    }
  },

  reach: {
    metricId: 'reach',
    title: 'Alcance Único de Contas',
    technicalCode: 'REACH (Unique Accounts)',
    businessView: {
      explanation: 'Número de profissionais odontológicos, médicos e decisores de estética únicos que visualizaram a mensagem da Kota Dental pelo menos uma vez.',
      impact: 'Permite aferir a penetração no mercado-alvo sem inflar os números com duplicidades de visualização do mesmo usuário.'
    },
    technicalView: {
      officialMetric: 'reach',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=reach,unique_clicks',
      formula: 'Reach = Contas de Centro de Contas Meta Únicas Impactadas',
      optimizationEvent: 'UNIQUE_REACH_OPTIMIZATION',
      auctionParameters: 'Segmentação geográfica com raio expandido e lookalike 1-2%'
    },
    kotaDiagnosis: {
      septValue: '133.473 contas',
      aprilValue: '89.200 contas',
      highlight: '+9,3% vs Agosto (122.085 contas) • +11.388 novos profissionais',
      status: 'healthy',
      details: 'Expansão contínua da praça de atuação com entrada de novos públicos sem elevar o CPM de forma desproporcional.'
    },
    recommendedAction: {
      title: 'Expandir públicos Lookalike de Compradores ERP',
      description: 'Atualizar lista de sementes LAL com os 12 novos compradores fechados em Setembro.',
      mcpCommand: 'mcp_call("meta_ads", "update_custom_audience", { audience_name: "LAL_Compradores_Kota_ERP", seed_count: 12 })',
      buttonLabel: 'Atualizar Audiência via Meta MCP',
      actionId: 'update_reach_lal'
    }
  },

  impressions: {
    metricId: 'impressions',
    title: 'Impressões Totais',
    technicalCode: 'IMPR (Total Impressions)',
    businessView: {
      explanation: 'Contabilização do total de vezes que as peças publicitárias da Kota foram exibidas nas telas dos aparelhos celulares e desktops.',
      impact: 'Mede a intensidade de exposição da marca. A proporção entre impressões e alcance define a frequência de impacto.'
    },
    technicalView: {
      officialMetric: 'impressions',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=impressions,frequency',
      formula: 'Impressões = Reach × Frequência Média (2,09x)',
      optimizationEvent: 'AD_DELIVERY_IMPRESSIONS',
      auctionParameters: 'Posicionamentos: 52% Stories, 29,7% Feed, 18,3% Reels'
    },
    kotaDiagnosis: {
      septValue: '278.955 impressões',
      aprilValue: '370.180 impressões',
      highlight: 'Frequência de 2,09x (Equilíbrio ideal entre lembrança e não-saturação)',
      status: 'healthy',
      details: 'Distribuição inteligente entre formatos rápidos de Stories e Reels manteve a retenção alta e evitou fadiga antecipada dos anúncios.'
    },
    recommendedAction: {
      title: 'Otimizar distribuição por posicionamento',
      description: 'Elevar verba em Reels onde a taxa de retenção dos vídeos é 22% superior à média.',
      mcpCommand: 'mcp_call("meta_ads", "set_placement_weight", { placement: "instagram_reels", weight_increase_pct: 15 })',
      buttonLabel: 'Otimizar Posicionamentos via MCP',
      actionId: 'optimize_impressions_placement'
    }
  },

  leads_total: {
    metricId: 'leads_total',
    title: 'Cadastros Totais Captados',
    technicalCode: 'LEADS (Total Leads Captados)',
    businessView: {
      explanation: 'Volume consolidado de oportunidades comerciais captadas no mês através dos canais de mídia paga da Kota Dental.',
      impact: 'Alimenta a esteira dos consultores de vendas com fluxo contínuo de profissionais interessados em equipamentos e insumos odontológicos.'
    },
    technicalView: {
      officialMetric: 'actions:lead',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=actions,action_values',
      formula: 'Leads Totais = Σ (Leads Instant Forms + Leads WhatsApp iniciados via CAPI)',
      optimizationEvent: 'LEAD_GENERATION',
      auctionParameters: 'Formulários rápidos de cadastro e destino WhatsApp direto'
    },
    kotaDiagnosis: {
      septValue: '780 cadastros diretos / 320 funil WABA',
      aprilValue: '398 cadastros',
      highlight: '+96,0% vs histórico de Abril • Pico diário de 38 cadastros em 13/09',
      status: 'healthy',
      details: 'Grande tração comercial gerada no mês de Setembro com o criativo de validação da Dra. Cíntia respondendo por 55,7% dos cadastros.'
    },
    recommendedAction: {
      title: 'Sincronizar leads instantâneos com o CRM em tempo real',
      description: 'Garantir webhook ativo com menos de 2 segundos de latência para entrega aos consultores de vendas.',
      mcpCommand: 'mcp_call("crm_hub", "audit_lead_webhook_latency", { provider: "meta_lead_ads" })',
      buttonLabel: 'Auditar Webhook via Meta MCP',
      actionId: 'audit_lead_webhook'
    }
  },

  cpl_leads_campaign: {
    metricId: 'cpl_leads_campaign',
    title: 'CPL da Campanha Direta de Cadastros',
    technicalCode: 'CPL-Direct (R$ 6,42)',
    businessView: {
      explanation: 'Custo unitário por lead obtido exclusivamente na campanha focada em geração de cadastros, isolando os investimentos de branding e awareness.',
      impact: 'Métrica mais pura da eficiência operacional da compra de mídia de resposta direta para captação de clientes.'
    },
    technicalView: {
      officialMetric: 'cost_per_action_type:lead (filtered by campaign_objective=LEADS)',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?campaign_id=direct_leads&fields=spend,actions',
      formula: 'CPL Campanha Direta = R$ 5.005,00 investidos / 780 cadastros gerados = R$ 6,42',
      optimizationEvent: 'ON_META_LEADS',
      auctionParameters: 'Lowest Cost bidding, público hiper-focalizado em saúde/odontologia'
    },
    kotaDiagnosis: {
      septValue: 'R$ 6,42',
      aprilValue: 'R$ 18,20',
      highlight: '-64,7% vs Abril • CPL super eficiente (meta operacional era < R$ 10,00)',
      status: 'healthy',
      details: 'Desempenho extraordinário da campanha direta de leads, operando mais de 35% abaixo do teto orçamentário estipulado.'
    },
    recommendedAction: {
      title: 'Preservar estrutura do conjunto campeão',
      description: 'Manter a segmentação sem edições drásticas para manter a fase de aprendizado contínua.',
      mcpCommand: 'mcp_call("meta_ads", "lock_adset_configuration", { adset_id: "23851940124_direct_leads" })',
      buttonLabel: 'Fixar Configuração no Meta MCP',
      actionId: 'lock_campaign_direct'
    }
  },

  arocell_efficiency: {
    metricId: 'arocell_efficiency',
    title: 'Eficiência do Criativo Campeão (Arocell Dra. Cíntia)',
    technicalCode: 'TOP-AD (ArocellCintia2)',
    businessView: {
      explanation: 'Performance isolada do melhor criativo do portfólio da Kota: depoimento e demonstração de autoridade da Dra. Cíntia.',
      impact: 'Sozinho, este criativo gerou 435 cadastros (55,7% de todo o mês) com um CPL de apenas R$ 3,84 e taxa de cliques CTR de 8,18%.'
    },
    technicalView: {
      officialMetric: 'ad_insights (filtered by ad_id=ArocellCintia2)',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?ad_id=arocell_cintia_2&fields=cpl,ctr,spend,actions',
      formula: 'CPL Criativo = R$ 1.670,40 gasto / 435 leads = R$ 3,84 por lead',
      optimizationEvent: 'LEAD_INSTANT_FORM',
      auctionParameters: 'Relevância no leilão: Acima da média em qualidade, engajamento e conversão'
    },
    kotaDiagnosis: {
      septValue: 'CPL R$ 3,84 • CTR 8,18%',
      aprilValue: 'CPL R$ 14,50',
      highlight: 'Menor custo por lead da história do tráfego da Kota Saúde e Beleza',
      status: 'healthy',
      details: 'Criativo com altíssima prova social e autoridade médica, gerando engajamento espontâneo e compartilhamentos na classe odontológica.'
    },
    recommendedAction: {
      title: 'Criar variações com gancho alternativo',
      description: 'Produzir 3 variações com os primeiros 3 segundos reformulados mantendo o corpo do vídeo para combater futura fadiga.',
      mcpCommand: 'mcp_call("meta_ads", "clone_ad_with_new_hook", { base_ad_id: "arocell_cintia_2", variations: 3 })',
      buttonLabel: 'Desdobrar Criativo no Meta MCP',
      actionId: 'clone_arocell_creative'
    }
  },

  thruplays: {
    metricId: 'thruplays',
    title: 'ThruPlays (Visualizações Qualificadas >= 15s)',
    technicalCode: 'THRUPLAY (Video Retention)',
    businessView: {
      explanation: 'Pessoas que assistiram ao vídeo publicitário da Kota por pelo menos 15 segundos ou até o final.',
      impact: 'Mede o interesse real e a retenção do público qualificado nas explicações técnicas de produtos.'
    },
    technicalView: {
      officialMetric: 'video_thruplay_watched_actions',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=video_thruplay_watched_actions,cost_per_thruplay',
      formula: 'ThruPlay = Visualizações de vídeo com duração >= 15 segundos',
      optimizationEvent: 'THRUPLAY',
      auctionParameters: 'CPMt (Custo por mil ThruPlays) médio de R$ 70,30'
    },
    kotaDiagnosis: {
      septValue: '42.190 ThruPlays',
      aprilValue: '21.050 ThruPlays',
      highlight: '+64,0% vs Agosto (25.722) • CPMt R$ 70,30',
      status: 'warning',
      details: 'Fadiga identificada no vídeo institucional da Dra. Andrea Tedesco com aumento de custo por retenção na última quinzena.'
    },
    recommendedAction: {
      title: 'Aplicar corte dinâmico no criativo Andrea Tedesco',
      description: 'Acelerar os primeiros 5 segundos para elevar retenção e reduzir o custo por ThruPlay em 20%.',
      mcpCommand: 'mcp_call("meta_ads", "update_video_cut", { ad_id: "andrea_tedesco_inst", trim_intro_sec: 2 })',
      buttonLabel: 'Ajustar Vídeo via Meta MCP',
      actionId: 'trim_thruplay_video'
    }
  },

  engagements: {
    metricId: 'engagements',
    title: 'Engajamento Global com a Marca',
    technicalCode: 'ENGAJ (Post Engagement)',
    businessView: {
      explanation: 'Total de curtidas, comentários, salvamentos, compartilhamentos e interações nos anúncios e publicações promovidas da Kota.',
      impact: 'Cria autoridade da marca no Instagram e aquece o algoritmo social para baratear custos de distribuição futura.'
    },
    technicalView: {
      officialMetric: 'post_engagement',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=post_engagement,cost_per_engagement',
      formula: 'Engajamento = Likes + Comments + Shares + Saves + Post Clicks',
      optimizationEvent: 'POST_ENGAGEMENT',
      auctionParameters: 'CPMe médio de R$ 126 por mil interações'
    },
    kotaDiagnosis: {
      septValue: '74.820 interações',
      aprilValue: '45.100 interações',
      highlight: '+8,8% vs Agosto (68.747 interações)',
      status: 'healthy',
      details: 'Forte presença de comunidade de dentistas comentando e tirando dúvidas técnicas nos comentários dos anúncios.'
    },
    recommendedAction: {
      title: 'Ativar moderação assistida de comentários nos anúncios',
      description: 'Responder dúvidas comerciais deixadas nos comentários em menos de 10 minutos.',
      mcpCommand: 'mcp_call("instagram_graph", "enable_ad_comment_moderation_alert", { sentiment: "commercial_intent" })',
      buttonLabel: 'Ativar Moderação via MCP',
      actionId: 'enable_comment_moderation'
    }
  },

  new_followers: {
    metricId: 'new_followers',
    title: 'Novos Seguidores Qualificados no Instagram',
    technicalCode: 'IG-GROWTH',
    businessView: {
      explanation: 'Novos profissionais de saúde e odontologia que passaram a seguir o perfil oficial da Kota Dental após serem impactados pelos anúncios.',
      impact: 'Constrói um ativo proprietário que pode ser trabalhado organicamente nos Stories e Reels diários sem custo adicional de mídia.'
    },
    technicalView: {
      officialMetric: 'instagram_profile_visits / followers_gained',
      mcpEndpoint: 'instagram_graph://kota_odontologia/insights?metric=follower_count,profile_views',
      formula: 'Crescimento Líquido = Novos Seguidores - Unfollows no período',
      optimizationEvent: 'PROFILE_VISIT',
      auctionParameters: '52% do crescimento decorrente do tráfego pago'
    },
    kotaDiagnosis: {
      septValue: '+1.840 novos seguidores',
      aprilValue: '+620 novos seguidores',
      highlight: '+196,7% vs Abril • Base de alta renda consolidada',
      status: 'healthy',
      details: 'Aquisição de público profissional altamente segmentado (cirurgiões-dentistas, ortodontistas e proprietários de clínicas).'
    },
    recommendedAction: {
      title: 'Programar sequência de boas-vindas na DM do Instagram',
      description: 'Disparar mensagem no Direct oferecendo catálogo de produtos para novos seguidores profissionais.',
      mcpCommand: 'mcp_call("instagram_graph", "set_welcome_automation", { target_profile_keywords: ["dentista", "orto", "clinica"] })',
      buttonLabel: 'Configurar DM via Meta MCP',
      actionId: 'set_ig_welcome_dm'
    }
  },

  // =========================================================================
  // FUNIL COMERCIAL & SPEED-TO-LEAD (ETAPA 2)
  // =========================================================================
  funnel_stage_1_clicks: {
    metricId: 'funnel_stage_1_clicks',
    title: 'Funil Comercial - Etapa 1: Cliques em Anúncios',
    technicalCode: 'FUNNEL-S1 (Ad Clicks)',
    businessView: {
      explanation: 'Ponto de partida da jornada comercial: 4.930 cliques em links registrados a partir dos anúncios de conversão da Kota.',
      impact: 'O CPC médio de R$ 1,53 garantiu a compra de volume substancial de tráfego qualificado para alimentar os canais de atendimento.'
    },
    technicalView: {
      officialMetric: 'inline_link_clicks',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=inline_link_clicks,cost_per_inline_link_click',
      formula: 'Etapa 1 = 4.930 cliques totais (100% da boca do funil)',
      optimizationEvent: 'LINK_CLICKS',
      auctionParameters: 'Distribuição: 95% Instagram e 5% Facebook'
    },
    kotaDiagnosis: {
      septValue: '4.930 cliques',
      aprilValue: '3.120 cliques',
      highlight: '+58,0% de tráfego direcionado vs histórico com menor CPC',
      status: 'healthy',
      details: 'Volume robusto de tráfego que permitiu alimentar a esteira de atendimento com previsibilidade diária.'
    },
    recommendedAction: {
      title: 'Expandir lances nas praças de maior taxa de conversão WhatsApp',
      description: 'Ajustar segmentação para concentrar cliques nas cidades de maior poder de compra odontológico.',
      mcpCommand: 'mcp_call("meta_ads", "adjust_geo_bidding", { top_cities_boost_pct: 20 })',
      buttonLabel: 'Otimizar Praças via Meta MCP',
      actionId: 'optimize_clicks_geo'
    }
  },

  funnel_stage_2_raw_whatsapp: {
    metricId: 'funnel_stage_2_raw_whatsapp',
    title: 'Funil Comercial - Etapa 2: Contatos Brutos WhatsApp',
    technicalCode: 'FUNNEL-S2 (Raw WhatsApp Leads)',
    businessView: {
      explanation: 'Leads que clicaram no anúncio com destino ao WhatsApp e iniciaram uma conversa ou enviaram a mensagem inicial.',
      impact: 'Representa a transição crucial entre a mídia paga (Meta Ads) e o ambiente privado de conversação comercial direta.'
    },
    technicalView: {
      officialMetric: 'onsite_conversion.messaging_conversation_started_7d',
      mcpEndpoint: 'whatsapp_business_api://kota_waba/conversations?status=incoming',
      formula: 'Taxa de Conversão = (320 conversas / 4.930 cliques) = 6,49%',
      optimizationEvent: 'MESSAGING_CONVERSATION_STARTED',
      auctionParameters: 'Cloud API WABA integrada ao Pixel e CAPI'
    },
    kotaDiagnosis: {
      septValue: '320 conversas',
      aprilValue: '140 conversas',
      highlight: '+128,5% vs histórico • Custo por conversa R$ 23,58',
      status: 'healthy',
      details: 'A adoção do link direto com mensagem preenchida ("Olá, vi no Instagram e gostaria de saber mais") aumentou a taxa de início de conversa.'
    },
    recommendedAction: {
      title: 'A/B testar mensagem de abertura do anúncio',
      description: 'Testar saudação mais direta especificando o segmento do dentista para elevar o início de conversas em 15%.',
      mcpCommand: 'mcp_call("meta_ads", "ab_test_wa_welcome_text", { campaign_id: "61902839102", variant: "especialidade_previa" })',
      buttonLabel: 'Testar Mensagem via Meta MCP',
      actionId: 'ab_test_wa_msg'
    }
  },

  funnel_stage_3_valid_leads: {
    metricId: 'funnel_stage_3_valid_leads',
    title: 'Funil Comercial - Etapa 3: Contatos Válidos (Filtro Anti-Curioso)',
    technicalCode: 'FUNNEL-S3 (Valid Leads Anti-Curious)',
    businessView: {
      explanation: 'Contatos que responderam ao primeiro contato, confirmaram identidade profissional e demonstraram interesse real em compra.',
      impact: 'O filtro anti-curioso eliminou 112 curiosos e estudantes sem poder de compra, poupando centenas de horas da equipe comercial.'
    },
    technicalView: {
      officialMetric: 'crm_validated_contacts',
      mcpEndpoint: 'crm_analytics://kota_sales/pipeline/stage_3_valid',
      formula: 'Taxa de Validação = (208 válidos / 320 brutos) = 65,00%',
      optimizationEvent: 'LEAD_QUALIFICATION',
      auctionParameters: 'Descarte automatizado por bot na primeira pergunta qualificatória'
    },
    kotaDiagnosis: {
      septValue: '208 contatos válidos',
      aprilValue: '85 contatos válidos',
      highlight: '65,0% de aproveitamento • CPDQ oficial de R$ 25,38',
      status: 'healthy',
      details: 'Eficiência comprovada do fluxo de triagem, protegendo os consultores para atenderem somente profissionais com fit real.'
    },
    recommendedAction: {
      title: 'Refinar perguntas eliminatórias no chatbot',
      description: 'Inserir pergunta de porte de clínica para antecipar o enquadramento do lead.',
      mcpCommand: 'mcp_call("crm_hub", "update_qualification_script", { add_step: "clinic_size_question" })',
      buttonLabel: 'Refinar Triagem via CRM MCP',
      actionId: 'refine_lead_qualification'
    }
  },

  funnel_stage_4_tier_a: {
    metricId: 'funnel_stage_4_tier_a',
    title: 'Funil Comercial - Etapa 4: Decisores Tier A (Proprietários/RT)',
    technicalCode: 'FUNNEL-S4 (Tier A Decision Makers)',
    businessView: {
      explanation: 'Leads confirmados como proprietários de clínicas, sócios ou responsáveis técnicos com autonomia orçamentária deliberativa.',
      impact: 'O cerne do faturamento da Kota Dental: 118 decisores de alto escalão com poder imediato de contratação e compra de equipamentos.'
    },
    technicalView: {
      officialMetric: 'crm_tier_a_decision_makers',
      mcpEndpoint: 'crm_analytics://kota_sales/pipeline/stage_4_tier_a',
      formula: 'Taxa de Decisores = (118 Tier A / 208 válidos) = 56,73%',
      optimizationEvent: 'HIGH_INTENT_LEAD',
      auctionParameters: 'CPA Decisor Tier A de R$ 63,95'
    },
    kotaDiagnosis: {
      septValue: '118 decisores Tier A',
      aprilValue: '42 decisores Tier A',
      highlight: '56,7% de assertividade sobre os contatos válidos',
      status: 'healthy',
      details: 'Foco estrito do tráfego na demografia de proprietários e cirurgiões especialistas gerou uma concentração recorde de decisores.'
    },
    recommendedAction: {
      title: 'Atribuir atendimento imediato a consultores seniores',
      description: 'Encaminhar decisores Tier A diretamente para a agenda VIP de demonstração de produto.',
      mcpCommand: 'mcp_call("crm_hub", "route_vip_leads", { tier: "A", priority: "urgent" })',
      buttonLabel: 'Ativar Roteamento VIP no CRM',
      actionId: 'route_tier_a_vip'
    }
  },

  funnel_stage_5_meetings: {
    metricId: 'funnel_stage_5_meetings',
    title: 'Funil Comercial - Etapa 5: Reuniões e Demonstrações Técnicas',
    technicalCode: 'FUNNEL-S5 (Demos & Meetings)',
    businessView: {
      explanation: 'Apresentações detalhadas de produtos e soluções técnicas conduzidas pelos especialistas e consultores comerciais da Kota Dental.',
      impact: 'Etapa chave onde o valor clínico e econômico dos insumos Kota é demonstrado ao dentista, viabilizando o fechamento de pedidos.'
    },
    technicalView: {
      officialMetric: 'crm_scheduled_demonstrations',
      mcpEndpoint: 'crm_analytics://kota_sales/pipeline/stage_5_meetings',
      formula: 'Taxa de Agendamento = (34 demos / 118 decisores) = 28,81%',
      optimizationEvent: 'DEMO_COMPLETED',
      auctionParameters: 'Custo por demonstração realizada: R$ 221,94'
    },
    kotaDiagnosis: {
      septValue: '34 demonstrações realizadas',
      aprilValue: '14 demonstrações',
      highlight: '+142,8% vs histórico • Taxa de presença em reuniões de 88%',
      status: 'healthy',
      details: 'Excelente comparecimento às sessões técnicas de demonstração de materiais odontológicos e protocolos clínicos.'
    },
    recommendedAction: {
      title: 'Ativar confirmação ativa por WhatsApp 2h antes da reunião',
      description: 'Reduzir taxa de não-comparecimento enviando lembrete com link e pauta da demonstração.',
      mcpCommand: 'mcp_call("whatsapp_biz", "set_meeting_reminder", { window_hours_before: 2 })',
      buttonLabel: 'Ativar Lembrete via WABA MCP',
      actionId: 'set_meeting_reminder_waba'
    }
  },

  funnel_stage_6_deals: {
    metricId: 'funnel_stage_6_deals',
    title: 'Funil Comercial - Etapa 6: Vendas Fechadas e Pedidos',
    technicalCode: 'FUNNEL-S6 (Closed Deals)',
    businessView: {
      explanation: 'Contratos comerciais acordados e formalizados com emissão de pedido de compras para fornecimento Kota Dental.',
      impact: '12 novos clientes corporativos conquistados diretamente a partir do investimento em mídia de Setembro.'
    },
    technicalView: {
      officialMetric: 'crm_won_deals',
      mcpEndpoint: 'crm_analytics://kota_sales/pipeline/stage_6_deals',
      formula: 'Taxa de Fechamento = (12 fechados / 34 demonstrações) = 35,29%',
      optimizationEvent: 'WON_OPPORTUNITY',
      auctionParameters: 'CAC Comercial Real de R$ 628,83 por novo cliente'
    },
    kotaDiagnosis: {
      septValue: '12 contratos fechados',
      aprilValue: '5 contratos fechados',
      highlight: '+140,0% de novos clientes conquistados vs média histórica',
      status: 'healthy',
      details: 'Taxa de fechamento comercial de 35,29% sobre as demonstrações demonstra alta qualificação dos leads entregues pela mídia.'
    },
    recommendedAction: {
      title: 'Disparar evento Purchase de alto valor via CAPI',
      description: 'Retroalimentar o Meta Ads com o fechamento de cada contrato para afinar a busca por decisores idênticos.',
      mcpCommand: 'mcp_call("meta_ads", "send_offline_deal_event", { deals_count: 12, avg_value: 3000 })',
      buttonLabel: 'Alimentar CAPI via Meta MCP',
      actionId: 'send_deal_capi'
    }
  },

  funnel_stage_7_revenue: {
    metricId: 'funnel_stage_7_revenue',
    title: 'Funil Comercial - Etapa 7: Faturamento no ERP Kota Dental',
    technicalCode: 'FUNNEL-S7 (ERP Billed Revenue)',
    businessView: {
      explanation: 'Receita financeira bruta total emitida em notas fiscais e conciliação bancária no ERP da Kota Dental a partir dos leads de Setembro.',
      impact: 'R$ 36.000,00 faturados com investimento em anúncios de R$ 7.546,00, gerando R$ 28.454,00 de margem de contribuição bruta.'
    },
    technicalView: {
      officialMetric: 'erp_billed_revenue_brl',
      mcpEndpoint: 'erp_gateway://kota_erp/financial/revenue?source=meta_ads&period=2026-09',
      formula: 'Faturamento = 12 clientes × Ticket Médio R$ 3.000,00 = R$ 36.000,00',
      optimizationEvent: 'OFFLINE_PURCHASE_CONVERSION',
      auctionParameters: 'ROAS Comercial de 4,77x comprovado em conciliação contábil'
    },
    kotaDiagnosis: {
      septValue: 'R$ 36.000,00 faturados',
      aprilValue: 'R$ 15.000,00 faturados',
      highlight: '+140% vs histórico • ROAS 4,77x (cada R$ 1 gerou R$ 4,77 em vendas)',
      status: 'healthy',
      details: 'Dados 100% conciliados entre CRM, Notas Fiscais do ERP e relatórios de tráfego, atestando o lucro líquido da operação.'
    },
    recommendedAction: {
      title: 'Autorizar expansão orçamentária para o próximo ciclo',
      description: 'Com ROAS de 4,77x e CAC de R$ 628, recomendar aumento de 20% na verba de mídia para capturar mais mercado.',
      mcpCommand: 'mcp_call("executive_board", "submit_budget_scale_proposal", { current_spend: 7546, proposed_spend: 9000, roas: 4.77 })',
      buttonLabel: 'Submeter Proposta de Escala',
      actionId: 'submit_budget_scale'
    }
  },

  roas_comercial: {
    metricId: 'roas_comercial',
    title: 'ROAS Comercial (Faturamento ERP / Investimento Mídia)',
    technicalCode: 'ROAS-COMERCIAL (4,77x)',
    businessView: {
      explanation: 'Relação entre cada real investido no Meta Ads e o faturamento emitido e pago no ERP da Kota Dental.',
      impact: 'Métrica que comprova para a diretoria (Waldir Ward e Lucas) que o marketing da Kota é centro de lucro previsível.'
    },
    technicalView: {
      officialMetric: 'commercial_roas_erp',
      mcpEndpoint: 'crm_analytics://kota_sales/roi_calculator?revenue=36000&spend=7546',
      formula: 'ROAS Comercial = R$ 36.000 (Faturado ERP) / R$ 7.546 (Gasto Mídia) = 4,77x',
      optimizationEvent: 'NET_FINANCIAL_RETURN',
      auctionParameters: 'Atribuição ponta a ponta pós-clique'
    },
    kotaDiagnosis: {
      septValue: '4,77x',
      aprilValue: '1,98x',
      highlight: '+140,9% vs histórico • Meta do conselho era 3,5x',
      status: 'healthy',
      details: 'Superação expressiva da meta de rentabilidade estipulada pela diretoria financeira da Kota Dental.'
    },
    recommendedAction: {
      title: 'Exportar relatório executivo de rentabilidade para a diretoria',
      description: 'Gerar dossiê financeiro comprovando o retorno de 4,77x com conciliação nota a nota.',
      mcpCommand: 'mcp_call("reporting_engine", "export_board_financial_deck", { roas: 4.77, net_revenue: 36000 })',
      buttonLabel: 'Exportar Relatório Diretoria',
      actionId: 'export_board_report'
    }
  },

  cac_comercial: {
    metricId: 'cac_comercial',
    title: 'CAC Comercial (Custo de Aquisição de Cliente)',
    technicalCode: 'CAC (Customer Acquisition Cost)',
    businessView: {
      explanation: 'Quanto custou em mídia para colocar cada novo cliente odontológico faturado dentro da carteira ativa da Kota.',
      impact: 'Com CAC de R$ 628,83 e ticket médio de R$ 3.000,00, a empresa recupera o investimento no primeiro pedido (Payback Day 1) e lucra nos pedidos recorrentes.'
    },
    technicalView: {
      officialMetric: 'blended_customer_acquisition_cost',
      mcpEndpoint: 'crm_analytics://kota_sales/cac_analysis?spend=7546&new_customers=12'
,
      formula: 'CAC = R$ 7.546,00 investidos / 12 clientes novos faturados = R$ 628,83',
      optimizationEvent: 'CUSTOMER_ACQUISITION',
      auctionParameters: 'Razão LTV/CAC superior a 8:1 considerando recompra anual'
    },
    kotaDiagnosis: {
      septValue: 'R$ 628,83',
      aprilValue: 'R$ 1.150,00',
      highlight: '-45,3% de redução no custo de conquista de clientes',
      status: 'healthy',
      details: 'CAC extremamente competitivo para o mercado B2B odontológico, garantindo excelente margem de contribuição.'
    },
    recommendedAction: {
      title: 'Monitorar recompra dos 12 novos clientes conquistados',
      description: 'Programar alerta de segundo pedido no ERP após 45 dias da primeira compra.',
      mcpCommand: 'mcp_call("erp_gateway", "set_repurchase_alert", { window_days: 45, customer_tier: "new_meta_cohort" })',
      buttonLabel: 'Programar Alerta de Recompra',
      actionId: 'set_repurchase_alert'
    }
  },

  cpdq: {
    metricId: 'cpdq',
    title: 'CPDQ (Custo por Diálogo Qualificado)',
    technicalCode: 'CPDQ (Cost Per Qualified Dialogue)',
    businessView: {
      explanation: 'O custo de mídia para colocar o consultor comercial da Kota em conversa ativa e produtiva com um profissional odontológico validado.',
      impact: 'Métrica muito superior ao CPL bruto porque ignora contatos fake e foca no diálogo efetivo com o decisor.'
    },
    technicalView: {
      officialMetric: 'cost_per_qualified_conversation',
      mcpEndpoint: 'crm_analytics://kota_sales/cpdq?spend=7546&qualified_leads=208',
      formula: 'CPDQ = R$ 7.546,00 total gasto / 208 contatos válidos = R$ 25,38',
      optimizationEvent: 'QUALIFIED_MESSAGING_CONVERSATION',
      auctionParameters: 'Filtro anti-curioso com validação de CRO e nome da clínica'
    },
    kotaDiagnosis: {
      septValue: 'R$ 25,38',
      aprilValue: 'R$ 58,00',
      highlight: '-56,2% vs histórico • Benchmark B2B saúde é R$ 45,00',
      status: 'healthy',
      details: 'Excelente alinhamento entre a promessa do anúncio e o roteiro inicial do atendimento, gerando diálogos com alto engajamento.'
    },
    recommendedAction: {
      title: 'Escalar orçamento nas frentes com menor CPDQ',
      description: 'Concentrar maior parcela do investimento nos criativos que entregam diálogo qualificado abaixo de R$ 20,00.',
      mcpCommand: 'mcp_call("meta_ads", "boost_low_cpdq_creatives", { max_cpdq_target: 20.00 })',
      buttonLabel: 'Escalar Baixo CPDQ via MCP',
      actionId: 'boost_low_cpdq'
    }
  },

  golden_window: {
    metricId: 'golden_window',
    title: 'Janela Áurea Speed-to-Lead (< 5 Minutos)',
    technicalCode: 'GOLDEN-WINDOW (First 5 Minutes SLA)',
    businessView: {
      explanation: 'O intervalo crítico de ouro nos primeiros 5 minutos após o lead solicitar contato no anúncio. É o momento em que a atenção e o desejo estão no ápice.',
      impact: 'Leads contatados na Janela Áurea têm 21x mais probabilidade de fechar negócio do que leads contatados após 30 minutos.'
    },
    technicalView: {
      officialMetric: 'golden_window_reach_percentage',
      mcpEndpoint: 'crm_analytics://kota_sales/speed_to_lead/golden_window?threshold_min=5',
      formula: 'Taxa Janela Áurea = (Leads contatados em < 5 min / Total de Leads) × 100',
      optimizationEvent: 'RAPID_LEAD_ENGAGEMENT',
      auctionParameters: 'Correlação direta entre latência de resposta e taxa de no-show em reuniões'
    },
    kotaDiagnosis: {
      septValue: '78,4% dos leads (< 5 min)',
      aprilValue: '12,5% dos leads (< 5 min)',
      highlight: 'TMPCC médio de 4.8 min (meta era <= 5 min superada com sucesso)',
      status: 'healthy',
      details: 'A equipe comercial da Kota atingiu nível de excelência operacional em Setembro, abordando quase 80% dos contatos no pico do interesse.'
    },
    recommendedAction: {
      title: 'Configurar escala de plantão para fins de semana',
      description: 'Garantir que os leads gerados aos sábados e domingos mantenham o tempo de resposta em menos de 10 minutos.',
      mcpCommand: 'mcp_call("crm_hub", "setup_weekend_duty_rota", { target_sla_minutes: 10 })',
      buttonLabel: 'Configurar Plantão no CRM',
      actionId: 'setup_weekend_rota'
    }
  },

  // =========================================================================
  // AS 20 FUNCIONALIDADES AVANÇADAS DE INTELIGÊNCIA META MCP (VERSÃO 2.0)
  // =========================================================================

  // 1. IQCI
  iqci: {
    metricId: 'iqci',
    title: 'Índice de Qualificação Conversacional Imediata',
    technicalCode: 'IQCI / CPDQ',
    businessView: {
      explanation: 'Mede o percentual de pessoas que clicaram nos anúncios Click-to-WhatsApp (CTWA) da Kota e efetivamente responderam às perguntas de qualificação inicial no WhatsApp. Revela se o anúncio atrai curiosos desqualificados ou profissionais com real interesse de compra.',
      impact: 'Pausar criativos com alto clique e baixa resposta útil estanca o desperdício de verba publicitária e otimiza o tempo dos atendentes comerciais.'
    },
    technicalView: {
      officialMetric: 'conversational_qualification_rate',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=clicks,inline_link_clicks',
      formula: 'IQCI (%) = (Σ Respostas_Diag / Σ Cliques_Link) × 100 ; CPDQ = Gasto / Diálogos_Qualificados',
      optimizationEvent: 'CONVERSATIONS_INITIATED / WABA_QUALIFIED_LEAD',
      auctionParameters: 'Bid Strategy: Highest Volume with CPDQ cap'
    },
    kotaDiagnosis: {
      septValue: '38,2%',
      aprilValue: '19,5%',
      highlight: '+95,9% vs Abril (Melhoria no alinhamento do criativo com a mensagem)',
      status: 'warning',
      details: 'Embora tenha quase dobrado em relação a Abril, 61,8% dos cliques ainda abandonam sem responder a primeira mensagem de qualificação.'
    },
    recommendedAction: {
      title: 'Pausar criativos com IQCI < 20% e CPDQ alto',
      description: 'Redirecionar o orçamento para criativos com diálogo útil validado abaixo do teto de CPDQ de R$ 25,00.',
      mcpCommand: 'mcp_call("meta_ads", "update_ad", { ad_id: "20250611-SI-Phyto+", status: "PAUSED" })',
      buttonLabel: 'Pausar Anúncios Ineficientes via MCP',
      actionId: 'pause_low_iqci_ads'
    }
  },

  // 2. SIPC
  sipc: {
    metricId: 'sipc',
    title: 'Score de Integridade Preditiva do CPL',
    technicalCode: 'SIPC / CPL_ACT',
    businessView: {
      explanation: 'Avalia a confiabilidade matemática do Custo por Lead reportado pelo painel da Meta, ajustando o custo pelo Event Match Quality (EMQ) e estabilidade de transmissão da API de Conversões (CAPI).',
      impact: 'Impede a decisão equivocada de desligar campanhas que aparentam ter CPL elevado quando, na verdade, o problema é subnotificação técnica por perda de sinal do servidor.'
    },
    technicalView: {
      officialMetric: 'cpl_integrity_score',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/datasets/quality',
      formula: 'SIPC = (EMQ / 10) × (1 - CV_telemetria) × 100 ; CPL_ACT = CPL_nominal / max(EMQ/10, 0,10)',
      optimizationEvent: 'CAPI_SIGNAL_VALIDATION',
      auctionParameters: 'Target: SIPC ≥ 80.0 com EMQ ≥ 8.5/10'
    },
    kotaDiagnosis: {
      septValue: '89,4',
      aprilValue: '54,2',
      highlight: '+64,9% vs Abril (Alta confiabilidade dos dados de captação)',
      status: 'healthy',
      details: 'A consolidação do CAPI Gateway reduziu a perda de eventos para menos de 1,2%, tornando o CPL reportado fidedigno à realidade contábil.'
    },
    recommendedAction: {
      title: 'Manter campanhas com alta integridade técnica',
      description: 'Assegurar que o algoritmo receba eventos de cadastro e compra com hashing SHA-256 padronizado sem interferência manual.',
      mcpCommand: 'mcp_call("meta_ads", "audit_dataset_health", { dataset_id: "act_204128509" })',
      buttonLabel: 'Auditar CAPI via Meta MCP',
      actionId: 'audit_capi_sipc'
    }
  },

  // 3. IPEVC
  ipevc: {
    metricId: 'ipevc',
    title: 'Índice de Prontidão de Engajamento e Velocidade de Contato',
    technicalCode: 'IPEVC / TMPCC',
    businessView: {
      explanation: 'Mede a porcentagem exata de leads gerados nos anúncios da Kota que recebem o primeiro contato via WhatsApp dentro da janela de ouro de 5 minutos.',
      impact: 'Contatar o decisor clínico nos primeiros 5 minutos aumenta as chances de agendamento em até 391%. Após 15 minutos, a taxa de resposta desaba verticalmente.'
    },
    technicalView: {
      officialMetric: 'contact_readiness_speed_index',
      mcpEndpoint: 'devtools_webhook_list?endpoint=crm_lead_inbound',
      formula: 'IPEVC (%) = (Σ 𝕀(Δt_i ≤ 300s) / N) × 100 ; TMPCC = (1/N) Σ Δt_i',
      optimizationEvent: 'FIRST_CONTACT_SLA',
      auctionParameters: 'Janela crítica parametrizada em τ_crit = 300 segundos'
    },
    kotaDiagnosis: {
      septValue: '46,5%',
      aprilValue: '12,1%',
      highlight: '+284% vs Abril, mas ainda em patamar crítico (< 85%)',
      status: 'critical',
      details: 'Mais da metade dos leads ainda aguarda mais de 5 minutos para receber o primeiro olá comercial, gerando perda silenciosa de potenciais clientes.'
    },
    recommendedAction: {
      title: 'Ativar contingência de primeiro contato automatizado via WABA',
      description: 'Configurar disparo automático de template nos primeiros 60 segundos com mensagem personalizada antes do transbordo para o atendente.',
      mcpCommand: 'mcp_call("whatsapp_biz", "enable_speed_autoresponder", { sla_trigger_seconds: 120 })',
      buttonLabel: 'Ativar Disparo Instantâneo via MCP',
      actionId: 'enable_speed_waba'
    }
  },

  // 4. RSDF
  rsdf: {
    metricId: 'rsdf',
    title: 'Radar de Saturação e Detecção Proativa de Fadiga B2B',
    technicalCode: 'RSDF / PIR',
    businessView: {
      explanation: 'Identifica matematicamente o momento exato em que um anúncio começou a cansar o público-alvo (dentistas, proprietários de laboratórios e clínicas), antes que o custo de anúncio suba.',
      impact: 'Permite substituir criativos antes que a fadiga cause aumento no CPM e desperdício de investimento em pessoas que já ignoram a propaganda.'
    },
    technicalView: {
      officialMetric: 'proactive_saturation_index',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=frequency,inline_link_click_ctr,cpm',
      formula: 'RSDF = (∇Freq / |∇CTR|) × (CPM_t / CPM_30d) ; Alerta se RSDF ≥ 2,50',
      optimizationEvent: 'CREATIVE_FATIGUE_PREVENTION',
      auctionParameters: 'Janela móvel de cálculo: k = 7 dias com amortecimento'
    },
    kotaDiagnosis: {
      septValue: '2,68',
      aprilValue: '4,85',
      highlight: 'Alerta de saturação no criativo AzuleneCapWSerum (RSDF = 2,68)',
      status: 'warning',
      details: 'O criativo 20250611-SI-AzuleneCapWSerum atingiu frequência de 3,42 e queda de 22% no CTR, necessitando de substituição imediata.'
    },
    recommendedAction: {
      title: 'Rotacionar criativo saturado por novo formato de vídeo',
      description: 'Pausar o anúncio desgastado e injetar a nova variação 20260312-VID-ArocellCintia2 com gancho renovado.',
      mcpCommand: 'mcp_call("meta_ads", "rotate_ad_variant", { pause_ad_id: "20250611-SI-AzuleneCapWSerum", activate_ad_id: "20260312-VID-ArocellCintia2" })',
      buttonLabel: 'Rotacionar Anúncio via MCP',
      actionId: 'rotate_azulene_creative'
    }
  },

  // 5. CDCL
  cdcl: {
    metricId: 'cdcl',
    title: 'Coeficiente de Dominância Competitiva em Leilões B2B',
    technicalCode: 'CDCL / DPL',
    businessView: {
      explanation: 'Quantifica o poder e a vantagem competitiva da Kota no leilão da Meta frente aos concorrentes do setor odontológico e estético, unificando notas de Qualidade, Engajamento e Conversão.',
      impact: 'Anúncios com alta dominância recebem um desconto algorítmico no leilão da Meta, pagando menos para aparecer na frente dos melhores clientes.'
    },
    technicalView: {
      officialMetric: 'auction_dominance_coefficient',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/ranking_benchmarks',
      formula: 'CDCL = 0,40·Q_norm + 0,30·E_norm + 0,30·C_norm ; DPL = (CDCL - 0,50) × Ψ_leilao',
      optimizationEvent: 'AUCTION_RELEVANCE_DISCOUNT',
      auctionParameters: 'Pesos: Qualidade 40%, Engajamento 30%, Conversão 30%'
    },
    kotaDiagnosis: {
      septValue: '0,78',
      aprilValue: '0,42',
      highlight: '+85,7% vs Abril (Kota no percentil superior de leilão)',
      status: 'healthy',
      details: 'Os novos conteúdos técnicos e validações clínicas elevaram a classificação para Acima da Média em Qualidade e Engajamento.'
    },
    recommendedAction: {
      title: 'Preservar copies de alta dominância e escalar orçamento',
      description: 'Aproveitar a taxa de desconto no CPM de -18% para ampliar a cobertura sobre os principais polos de prótese de SP e RJ.',
      mcpCommand: 'mcp_call("meta_ads", "scale_high_dominance_adsets", { threshold_cdcl: 0.75, scale_pct: 15 })',
      buttonLabel: 'Escalar no Leilão via MCP',
      actionId: 'scale_high_cdcl'
    }
  },

  // 6. PATH-WAC
  path_wac: {
    metricId: 'path_wac',
    title: 'Painel de Atribuição de Template WhatsApp de Alta Conversão',
    technicalCode: 'PATH-WAC / ICS',
    businessView: {
      explanation: 'Descobre qual mensagem inicial enviada pelo WhatsApp gera o maior número de reuniões agendadas quando combinada com cada anúncio específico.',
      impact: 'Evita a quebra de expectativa entre o que o lead viu no Instagram e a primeira conversa no WhatsApp, garantindo coerência que fecha vendas.'
    },
    technicalView: {
      officialMetric: 'template_attribution_conversion_rate',
      mcpEndpoint: 'whatsapp_biz://whatsapp_biz_list_templates',
      formula: 'TCAC_ij = (Reuniões_ij / Conversas_ij) × 100 ; CACC_ij = Gasto_ad,i × (Disparos_ij/Σ Disparos) / Reuniões',
      optimizationEvent: 'MEETING_SCHEDULED / CRM_APPOINTMENT',
      auctionParameters: 'Mapeamento bidimensional ad_id ↔ template_id'
    },
    kotaDiagnosis: {
      septValue: '24,1%',
      aprilValue: '11,4%',
      highlight: '+111% de conversão em agendamentos na melhor paridade criativo-template',
      status: 'healthy',
      details: 'O template Diagnóstico de Laboratório pareado ao vídeo técnico de prótese gerou R$ 48,20 de CACC, o menor da história da conta.'
    },
    recommendedAction: {
      title: 'Fixar pareamento dinâmico de template por criativo',
      description: 'Programar a rota do webhook para acionar automaticamente o template com maior taxa histórica de reunião validada.',
      mcpCommand: 'mcp_call("whatsapp_biz", "set_template_ad_binding", { ad_id: "20260312-VID-ArocellCintia2", template_id: "diag_lab_protese_v3" })',
      buttonLabel: 'Vincular Template via MCP',
      actionId: 'bind_waba_template'
    }
  },

  // 7. SAPCI
  sapci: {
    metricId: 'sapci',
    title: 'Segmentação Avançada de Perfil e Contas de Alto Impacto',
    technicalCode: 'SAPCI / CPA_VIP',
    businessView: {
      explanation: 'Mede e maximiza a proporção de proprietários de clínicas, sócios e donos de laboratórios no total de cadastros, filtrando estudantes e curiosos sem poder de compra.',
      impact: 'Concentra os investimentos da Kota nas pessoas que têm a caneta para assinar contratos de alto valor, aumentando o ticket médio.'
    },
    technicalView: {
      officialMetric: 'high_value_account_penetration',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/datasets/quality?custom_data=clinic_tier',
      formula: 'SAPCI (%) = [Σ ScorePerfil_m / (M × Score_max)] × 100 ; CPA_VIP = Gasto Total / Leads VIP',
      optimizationEvent: 'HIGH_VALUE_DECISION_MAKER',
      auctionParameters: 'Pesos: Cargo 50%, Porte Clínico 30%, Demanda Insumos 20%'
    },
    kotaDiagnosis: {
      septValue: '42,6%',
      aprilValue: '18,3%',
      highlight: '+132% na proporção de decisores clínicos proprietários',
      status: 'healthy',
      details: 'Campos de pré-qualificação nos formulários integrados ao CAPI filtraram auxiliares e acadêmicos, elevando a densidade de decisores.'
    },
    recommendedAction: {
      title: 'Otimizar lances de leilão para leads com ScorePerfil ≥ 0,80',
      description: 'Transmitir sinal de alto valor via CAPI para o algoritmo da Meta priorizar a entrega em perfis com consultório próprio.',
      mcpCommand: 'mcp_call("meta_ads", "update_custom_event_weights", { event: "Lead_Tier1", weight_multiplier: 2.5 })',
      buttonLabel: 'Calibrar Lances VIP via MCP',
      actionId: 'calibrate_vip_bids'
    }
  },

  // 8. MEO-POE
  meo_poe: {
    metricId: 'meo_poe',
    title: 'Modelagem de Elasticidade Orçamentária e Ponto de Ouro de Escala',
    technicalCode: 'MEO-POE / POE',
    businessView: {
      explanation: 'Calcula matematicamente o valor exato de verba diária onde a Kota tem o maior lucro líquido possível, alertando quando colocar mais dinheiro passa a dar prejuízo marginal.',
      impact: 'Evita a ilusão de escala — aumentar orçamento desenfreadamente faz o custo por cliente disparar e queima a margem de contribuição da empresa.'
    },
    technicalView: {
      officialMetric: 'budget_elasticity_golden_point',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/adsets/23851940124',
      formula: 'd(Lucro Operacional)/dO = 0 ⇒ O* = POE ; CPA(O) = α · O^β ; ε_CPA/Orc = β',
      optimizationEvent: 'NET_PROFIT_MAXIMIZATION',
      auctionParameters: 'Curva empírica calibrada com β = 0,38 para praça Sudeste'
    },
    kotaDiagnosis: {
      septValue: 'R$ 420/dia',
      aprilValue: 'R$ 680/dia (Retornos Decrescentes)',
      highlight: 'Ponto Ótimo identificado em R$ 420/dia (Margem Líquida máxima de 43,8%)',
      status: 'healthy',
      details: 'Em Abril, a verba de R$ 680/dia inflacionou o CPA em 48%. Reduzir para o POE de R$ 420/dia manteve o mesmo faturamento com R$ 7.800 a menos de custo.'
    },
    recommendedAction: {
      title: 'Fixar trava rígida de orçamento no POE de R$ 420/dia',
      description: 'Bloquear aumentos que excedam o ponto de inflexão de retorno decrescente via MCP.',
      mcpCommand: 'mcp_call("meta_ads", "update_adset", { adset_id: "23851940124", daily_budget: 42000 })',
      buttonLabel: 'Fixar Trava POE via MCP',
      actionId: 'lock_poe_budget'
    }
  },

  // 9. AO-OEDC
  ao_oedc: {
    metricId: 'ao_oedc',
    title: 'Alocação Otimizada de Orçamento por Faturamento Real',
    technicalCode: 'AO-OEDC / ROAS_FAT',
    businessView: {
      explanation: 'Transfere verba dos públicos que só geram leads baratos mas nunca compram, para os públicos que realmente assinam contratos e pagam a Kota no ERP.',
      impact: 'Aumenta o dinheiro em caixa sem gastar um único centavo a mais no orçamento total de anúncios da empresa.'
    },
    technicalView: {
      officialMetric: 'revenue_driven_budget_allocation',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/adsets/rebalance',
      formula: 'O\'_k = O_total × [(ROAS_FAT_k)^γ · Fat_k] / Σ [(ROAS_FAT_j)^γ · Fat_j]',
      optimizationEvent: 'ERP_CLOSED_DEAL_REVENUE',
      auctionParameters: 'Fator de concentração algorítmica γ = 1,4 com dados conciliados do ERP'
    },
    kotaDiagnosis: {
      septValue: '61% Lab / 34,8% Clínicas',
      aprilValue: 'Alocação Homogênea (33% cada)',
      highlight: 'Projeção de +38,5% de receita real com a nova divisão orçamentária',
      status: 'healthy',
      details: 'Laboratórios de Prótese responderam por 74% da receita real faturada em Setembro, justificando a concentração de 61% da verba.'
    },
    recommendedAction: {
      title: 'Executar rebalanceamento orçamentário no Meta Ads',
      description: 'Ajustar as cotas orçamentárias diárias dos 3 conjuntos de anúncios pelo peso de receita confirmada.',
      mcpCommand: 'mcp_call("meta_ads", "update_adset", { allocations: [{ adset_id: "lab_protese", budget_pct: 61.0 }, { adset_id: "clinicas", budget_pct: 34.8 }] })',
      buttonLabel: 'Rebalancear Verba via MCP',
      actionId: 'rebalance_budget_action'
    }
  },

  // 10. RAD-ANO
  rad_ano: {
    metricId: 'rad_ano',
    title: 'Radar de Detecção de Anomalias Estatísticas Diárias',
    technicalCode: 'RAD-ANO / Z_Score',
    businessView: {
      explanation: 'Sentinela 24/7 que monitora flutuações anormais no custo de anúncio ou perda de conversões causadas por links fora do ar, instabilidades na Meta ou concorrência agressiva.',
      impact: 'Evita a perda de milhares de reais avisando em tempo real sobre qualquer anomalia antes de esperar o relatório do final do dia.'
    },
    technicalView: {
      officialMetric: 'daily_statistical_anomaly_radar',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/anomalies?window=14d' ,
      formula: 'Z_t = (X_t - μ_14d) / σ_14d ; Alerta Crítico se |Z_t| ≥ 2,58 (p < 0,01)',
      optimizationEvent: 'ANOMALY_MITIGATION',
      auctionParameters: 'Intervalos de confiança móveis de 99% com teste bicaudal'
    },
    kotaDiagnosis: {
      septValue: 'Z = 2,14',
      aprilValue: 'Z = 3,45 (Anomalia Severa de CPL)',
      highlight: 'Operação estável com oscilações normais de leilão em Setembro',
      status: 'warning',
      details: 'Pico pontual de Z = 2,14 no dia 18/09 devido a leilão concorrencial em SP, normalizado em menos de 12 horas.'
    },
    recommendedAction: {
      title: 'Configurar limites de contenção automática intradiária',
      description: 'Suspender temporariamente campanhas que atinjam desvio Z > 2,58 por mais de 3 horas consecutivas.',
      mcpCommand: 'mcp_call("meta_ads", "set_anomaly_threshold", { z_ceiling: 2.58, auto_pause: true })',
      buttonLabel: 'Fixar Limite Z via MCP',
      actionId: 'set_anomaly_rule'
    }
  },

  // 11. CS-CAP
  cs_cap: {
    metricId: 'cs_cap',
    title: 'Check-up de Integridade e Latência de Sinais Conversions API',
    technicalCode: 'CS-CAP / TIS',
    businessView: {
      explanation: 'Verifica a saúde técnica da conexão de dados entre os servidores da Kota e a Meta, checando se as compras e cadastros estão sendo enviados sem atraso ou erros técnicos.',
      impact: 'Sem sinais rápidos e perfeitos, a inteligência da Meta fica cega e começa a entregar anúncios para pessoas desqualificadas, encarecendo o custo.'
    },
    technicalView: {
      officialMetric: 'capi_health_latency_check',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/datasets/status',
      formula: 'TIS (%) = (Válidos / Submetidos) × 100 ; Λ_sinal = t_meta - t_servidor',
      optimizationEvent: 'CAPI_HEALTH_GATEWAY',
      auctionParameters: 'Ideal: TIS ≥ 99% e Latência média ≤ 300 segundos'
    },
    kotaDiagnosis: {
      septValue: '99,6% | 180s',
      aprilValue: '91,2% | 4.200s (Crítico)',
      highlight: 'Latência reduzida de 70 min para 3 min com zero falhas no webhook',
      status: 'healthy',
      details: 'A infraestrutura em nuvem dedicada reduziu o tempo de transmissão para 180 segundos, abastecendo o leilão em tempo real.'
    },
    recommendedAction: {
      title: 'Manter monitoramento de pulso ativo a cada 15 minutos',
      description: 'Auditar se o gateway da API de Conversões mantém integridade superior a 99% sem filas represadas.',
      mcpCommand: 'mcp_call("meta_ads", "verify_capi_gateway", { dataset_id: "act_204128509", ping_interval_sec: 900 })',
      buttonLabel: 'Verificar Gateway via MCP',
      actionId: 'verify_capi_gateway'
    }
  },

  // 12. CE-VSP
  ce_vsp: {
    metricId: 'ce_vsp',
    title: 'Curva de Eficiência e Matriz de Dispersão (Vencedores vs Perdedores)',
    technicalCode: 'CE-VSP / Dreno',
    businessView: {
      explanation: 'Separa todos os anúncios ativos em 4 grupos: Campeões Absolutos, Alto Valor, Falsos Baratos e Drenos de Caixa, facilitando a decisão de onde colocar ou cortar dinheiro.',
      impact: 'Evita a armadilha de manter anúncios com clique barato que não vendem nada, direcionando o orçamento para quem fecha negócio de verdade.'
    },
    technicalView: {
      officialMetric: 'efficiency_dispersion_matrix',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=ad_id,spend,cpa,roas_real',
      formula: 'X_i = CPA_i / μ_CPA ; Y_i = ROAS_FAT_i / μ_ROAS ; Dreno = Σ Gasto_Quad_IV',
      optimizationEvent: 'BUDGET_REALLOCATION_QUAD_I',
      auctionParameters: 'Quadrante I: CPA ≤ 1 e ROAS ≥ 1 ; Quadrante IV: CPA > 1 e ROAS < 1'
    },
    kotaDiagnosis: {
      septValue: '65% no Quadrante I',
      aprilValue: '28% no Quadrante I',
      highlight: 'R$ 4.280 eliminados de anúncios do Quadrante IV (Dreno de Capital)',
      status: 'healthy',
      details: 'A concentração em criativos com faturamento comprovado reduziu o desperdício de capital para menos de 4,5% do total investido.'
    },
    recommendedAction: {
      title: 'Pausar todos os anúncios confirmados no Quadrante IV',
      description: 'Executar desligamento programático de criativos com alto CPA e faturamento nulo após 14 dias de veiculação.',
      mcpCommand: 'mcp_call("meta_ads", "update_ad", { action: "pause_quadrant_iv_drain", threshold_days: 14 })',
      buttonLabel: 'Eliminar Drenos via MCP',
      actionId: 'pause_quad_iv'
    }
  },

  // 13. AB-DYN
  ab_dyn: {
    metricId: 'ab_dyn',
    title: 'Matriz de Testes A/B Multivariados Dinâmicos de Criativos',
    technicalCode: 'AB-DYN / MDE',
    businessView: {
      explanation: 'Mecanismo estatístico que descobre qual anúncio é realmente melhor sem achismos, encerrando a variação perdedora assim que houver 95% de certeza matemática.',
      impact: 'Impede o desperdício de gastar dinheiro mantendo testes abertos por semanas quando a resposta já está matematicamente definida.'
    },
    technicalView: {
      officialMetric: 'multivariate_dynamic_testing',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/ab_tests',
      formula: 'Z = (p̂A - p̂B) / √[p̂(1-p̂)(1/nA + 1/nB)] ; Encerramento quando p-valor < 0,05',
      optimizationEvent: 'STATISTICAL_SIGNIFICANCE_95',
      auctionParameters: 'Controle formal de erros Tipo I (α = 0,05) e Tipo II (β = 0,20)'
    },
    kotaDiagnosis: {
      septValue: 'p = 0,024',
      aprilValue: 'Testes sem validação formal',
      highlight: '97,6% de confiança estatística no criativo de vídeo ArocellCintia2',
      status: 'healthy',
      details: 'O anúncio em vídeo superou o criativo estático com significância validada em apenas 6 dias de teste multivariado.'
    },
    recommendedAction: {
      title: 'Consolidar orçamento na variação criativa vencedora',
      description: 'Transferir a verba alocada no braço estático de teste diretamente para o formato de vídeo comprovado.',
      mcpCommand: 'mcp_call("meta_ads", "consolidate_ab_test", { experiment_id: "exp_video_vs_static_09", winner: "video" })',
      buttonLabel: 'Consolidar Vencedor via MCP',
      actionId: 'consolidate_ab_winner'
    }
  },

  // 14. REC-CAT
  rec_cat: {
    metricId: 'rec_cat',
    title: 'Diagnóstico Preditivo e Alinhamento de Catálogo Dinâmico',
    technicalCode: 'REC-CAT / ISFE',
    businessView: {
      explanation: 'Verifica se os produtos mostrados nos anúncios de catálogo do Instagram/Facebook estão disponíveis no estoque da Kota e com preços idênticos aos do sistema ERP.',
      impact: 'Evita gastar verba de anúncio divulgando produtos esgotados ou com divergência de preço, o que frustra clientes e queima verba de mídia.'
    },
    technicalView: {
      officialMetric: 'catalog_stock_price_alignment',
      mcpEndpoint: 'meta_marketing_api://catalogs/product_feeds',
      formula: 'ISFE = 100 × (1 - Σ ErroFeed / K) ; TRA (%) = (Impressões_Ruptura / Total) × 100',
      optimizationEvent: 'STOCK_ALIGNED_CATALOG_ADS',
      auctionParameters: 'Pausar produto quando Estoque ≤ Crítico ou |ΔPreço| > 5%'
    },
    kotaDiagnosis: {
      septValue: '98,7%',
      aprilValue: '82,4%',
      highlight: 'Zero impressões desperdiçadas com produtos sem estoque em Setembro',
      status: 'healthy',
      details: 'A sincronização a cada 2 horas com o ERP Kota garantiu integridade plena das ofertas de insumos odontológicos.'
    },
    recommendedAction: {
      title: 'Ativar exclusão automática de produtos com estoque crítico',
      description: 'Pausar programaticamente a exibição de itens do catálogo quando o estoque físico atingir menos de 5 unidades.',
      mcpCommand: 'mcp_call("meta_ads", "sync_catalog_feed", { catalog_id: "cat_kota_insumos", auto_hide_out_of_stock: true })',
      buttonLabel: 'Sincronizar Feed via MCP',
      actionId: 'sync_catalog_stock'
    }
  },

  // 15. ROAS-PRED
  roas_pred: {
    metricId: 'roas_pred',
    title: 'Índice de Projeção Preditiva de ROAS por Coorte',
    technicalCode: 'ROAS-PRED / LTV',
    businessView: {
      explanation: 'Calcula o retorno financeiro completo de uma campanha considerando não só a primeira compra, mas todas as recompras de insumos e cursos que os clientes farão ao longo de 30, 60 e 90 dias.',
      impact: 'Permite investir com segurança em campanhas que parecem ter retorno modesto no primeiro dia, sabendo que os clientes trarão alto lucro recorrente nos meses seguintes.'
    },
    technicalView: {
      officialMetric: 'cohort_predictive_roas',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights?fields=cohort_roas_60d',
      formula: 'ROAS-PRED(T) = [Receita_0 + Σ 𝔼(Recompra_t)] / Investimento_0 ; Retenção = R0 · e^(-λt)',
      optimizationEvent: 'LONG_TERM_VALUE_PREDICTION',
      auctionParameters: 'Curva exponencial de retenção B2B calibrada para odontologia'
    },
    kotaDiagnosis: {
      septValue: '4,65x (60d)',
      aprilValue: '2,40x (60d)',
      highlight: 'Payback do CAC atingido em 22 dias com ROAS projetado de 4,65x em 60 dias',
      status: 'healthy',
      details: 'O modelo de coorte revelou que 38% dos laboratórios de prótese captados em Setembro realizaram recompras recorrentes no mês seguinte.'
    },
    recommendedAction: {
      title: 'Manter campanhas de aquisição com payback estimado < 30 dias',
      description: 'Impedir a pausa precoce de conjuntos com ROAS imediato de 1,4x quando a projeção de 60 dias superar 3,5x.',
      mcpCommand: 'mcp_call("meta_ads", "protect_high_ltv_campaigns", { cohort_threshold_roas: 3.5 })',
      buttonLabel: 'Proteger Campanhas LTV via MCP',
      actionId: 'protect_cohort_ltv'
    }
  },

  // 16. EMQ-AUD
  emq_aud: {
    metricId: 'emq_aud',
    title: 'Auditoria Automatizada de Event Match Quality e Deduplicação',
    technicalCode: 'EMQ-AUD / TDC',
    businessView: {
      explanation: 'Verifica se os dados de contato dos clientes (e-mail, WhatsApp, IP) estão sendo transmitidos com criptografia correta e sem duplicidade entre o site e o servidor da Kota.',
      impact: 'Quanto maior a nota do EMQ, mais a Meta reconhece quem comprou, permitindo que a inteligência de público encontre clientes parecidos com precisão cirúrgica.'
    },
    technicalView: {
      officialMetric: 'event_match_quality_audit',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/datasets/quality?event=Lead',
      formula: 'EMQ-Score = Σ w_p · 𝕀(Parâmetro_p Válido) ; TDC (%) = (Deduplicados / Total) × 100',
      optimizationEvent: 'SHA256_ADVANCED_MATCHING',
      auctionParameters: 'Pesos: Email 30%, Telefone 25%, fbp 15%, fbc 15%, IP/UA 15%'
    },
    kotaDiagnosis: {
      septValue: '8,8/10',
      aprilValue: '5,6/10',
      highlight: 'Nota de correspondência superior a 8,5 com deduplicação perfeita de 99,8%',
      status: 'healthy',
      details: 'O envio unificado de telefone no padrão internacional E.164 e hash SHA-256 no backend eliminou os alertas vermelhos de correspondência.'
    },
    recommendedAction: {
      title: 'Auditar parâmetros de correspondência em novas landing pages',
      description: 'Executar verificação criptográfica preventiva antes da ativação de novos domínios ou formulários de campanha.',
      mcpCommand: 'mcp_call("meta_ads", "audit_event_parameters", { dataset_id: "act_204128509", target_event: "Lead" })',
      buttonLabel: 'Auditar Parâmetros via MCP',
      actionId: 'audit_emq_params'
    }
  },

  // 17. LAT-MSG
  lat_msg: {
    metricId: 'lat_msg',
    title: 'Monitor de Latência de Primeiro Contato Comercial',
    technicalCode: 'LAT-MSG / PFL',
    businessView: {
      explanation: 'Calcula em reais o prejuízo comercial exato causado pela demora dos atendentes em responder os contatos gerados pelos anúncios no WhatsApp.',
      impact: 'Mostra para a diretoria que muitas vezes a campanha está excelente, mas a lentidão humana em atender o lead quente é o que joga o faturamento no ralo.'
    },
    technicalView: {
      officialMetric: 'commercial_latency_financial_loss',
      mcpEndpoint: 'whatsapp_biz://whatsapp_biz_phone_numbers?metric=response_decay',
      formula: 'P_agendamento(Δt) = P0 / [1 + (Δt/τ50)^κ] ; PFL (R$) = Gasto × (1 - Agendamentos / Agend_Projetados)',
      optimizationEvent: 'SALES_LATENCY_REDUCTION',
      auctionParameters: 'Parâmetro de meia-vida do interesse comercial: τ50 = 15 minutos'
    },
    kotaDiagnosis: {
      septValue: '18 min | R$ 38.400 perdidos',
      aprilValue: '142 min | R$ 145.000 perdidos',
      highlight: 'Recuperação de R$ 106.600 em receita vs Abril, restando R$ 38.400 em potencial',
      status: 'critical',
      details: 'A redução de 142 para 18 minutos foi histórica, mas cada minuto acima do teto de 5 min ainda custa R$ 2.133 em faturamento não realizado.'
    },
    recommendedAction: {
      title: 'Implementar transbordo emergencial para segundo atendente',
      description: 'Redirecionar o lead automaticamente no CRM caso o atendente titular não interaja dentro de 7 minutos.',
      mcpCommand: 'mcp_call("whatsapp_biz", "set_escalation_rule", { max_wait_seconds: 420, backup_pool: "closers_plantao" })',
      buttonLabel: 'Configurar Transbordo via MCP',
      actionId: 'set_escalation_overflow'
    }
  },

  // 18. FREQ-CAP
  freq_cap: {
    metricId: 'freq_cap',
    title: 'Sentinela de Teto de Frequência e Alocação de Alcance Único',
    technicalCode: 'FREQ-CAP / CPRU',
    businessView: {
      explanation: 'Controla para que os anúncios da Kota não sejam exibidos tantas vezes para as mesmas pessoas, garantindo que o dinheiro encontre novos clientes potenciais.',
      impact: 'Em mercados especializados como odontologia e estética, mostrar o mesmo anúncio mais de 3 vezes para quem não quis comprar só gera irritação e queima verba.'
    },
    technicalView: {
      officialMetric: 'frequency_cap_reach_allocator',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/adsets/frequency_cap',
      formula: 'AIM_t = ΔReach / ΔImpressions ; CPRU = Gasto / Alcance Único ; Desperdício = Gasto × max(0, 1 - Φ_ótima/Freq)',
      optimizationEvent: 'UNIQUE_REACH_MAXIMIZATION',
      auctionParameters: 'Teto ideal parametrizado em Φ_ótima = 2,80 exposições em 7 dias'
    },
    kotaDiagnosis: {
      septValue: '3,42',
      aprilValue: '4,15',
      highlight: 'Frequência do conjunto Estética Médica atingiu 3,42 (Acima do teto)',
      status: 'warning',
      details: 'O público de nicho já foi impactado quase 3,5 vezes na última quinzena, desacelerando o alcance de novos decisores.'
    },
    recommendedAction: {
      title: 'Aplicar lista de exclusão automática de engajados nos últimos 7 dias',
      description: 'Excluir usuários que já viram anúncios 3 vezes sem conversão para liberar verba para novos prospectos.',
      mcpCommand: 'mcp_call("meta_ads", "update_adset_exclusions", { adset_id: "23851940124", exclude_audience_id: "aud_engaged_last_7d" })',
      buttonLabel: 'Aplicar Exclusão via MCP',
      actionId: 'apply_freq_exclusion'
    }
  },

  // 19. TIER-ROUT
  tier_rout: {
    metricId: 'tier_rout',
    title: 'Roteamento Inteligente de Leads por Score de Qualificação',
    technicalCode: 'TIER-ROUT / VTL',
    businessView: {
      explanation: 'Classifica os contatos assim que preenchem o formulário: grandes redes e laboratórios de ponta vão direto para os vendedores seniores, enquanto perfis menores vão para triagem automática.',
      impact: 'Garante que os maiores clientes da Kota sejam atendidos com prioridade máxima em segundos, maximizando o fechamento de grandes contas.'
    },
    technicalView: {
      officialMetric: 'lead_tier_intelligent_routing',
      mcpEndpoint: 'devtools_webhook_list?event=lead_submitted&routing=smart',
      formula: 'Score Lead = Σ ω_j · f_j(x_j) ; VTL (R$) = Score Lead × TicketMédio_segmento',
      optimizationEvent: 'PRIORITY_SALES_ROUTING',
      auctionParameters: 'Tier 1: Score ≥ 85 (Senior Closer) | Tier 2: 60-84 (SDR) | Tier 3: < 60 (Bot)'
    },
    kotaDiagnosis: {
      septValue: 'Tier 1: 32%',
      aprilValue: 'Leads não segmentados',
      highlight: '32% dos leads classificados como Tier 1 com ticket médio de R$ 8.500',
      status: 'healthy',
      details: 'O roteamento determinístico permitiu aos executivos focarem 100% de sua atenção nas propostas de maior envergadura financeira.'
    },
    recommendedAction: {
      title: 'Configurar notificação push prioritária no WhatsApp dos Closers',
      description: 'Enviar alerta sonoro e ficha cadastral enriquecida aos vendedores seniores em menos de 30 segundos.',
      mcpCommand: 'mcp_call("whatsapp_biz", "set_priority_closer_alert", { tier: 1, max_latency_sec: 30 })',
      buttonLabel: 'Ativar Alerta Push via MCP',
      actionId: 'activate_closer_push'
    }
  },

  // 20. REV-ATTR
  rev_attr: {
    metricId: 'rev_attr',
    title: 'Painel de Atribuição Multi-Toque e Fechamento Comercial Real',
    technicalCode: 'REV-ATTR / ROAS_FAT_ATTR',
    businessView: {
      explanation: 'Rastreia todos os anúncios que o cliente viu e clicou antes de assinar contrato com a Kota, distribuindo o mérito da venda entre os criativos de apresentação, WhatsApp e fechamento.',
      impact: 'Impede o erro de pausar anúncios institucionais ou vídeos de topo que não geram venda direta, mas que preparam o terreno para o fechamento comercial.'
    },
    technicalView: {
      officialMetric: 'multi_touch_revenue_attribution',
      mcpEndpoint: 'meta_marketing_api://act_204128509890123/attribution?model=w_shaped',
      formula: 'Crédito W-Shaped: 30% Descoberta + 40% Engajamento WhatsApp + 30% Fechamento ERP',
      optimizationEvent: 'FULL_JOURNEY_REVENUE_ATTRIBUTION',
      auctionParameters: 'Reconciliação unificada por external_id entre CAPI e ERP'
    },
    kotaDiagnosis: {
      septValue: '4,28x ROAS Real',
      aprilValue: '2,15x ROAS Real',
      highlight: 'Vídeos institucionais participaram de 68% dos contratos de alta renda',
      status: 'healthy',
      details: 'A atribuição posicional em W provou que desligar anúncios educativos prejudica diretamente as vendas dos criativos de fundo de funil.'
    },
    recommendedAction: {
      title: 'Proteger campanhas institucionais com ICP > 50%',
      description: 'Blindar orçamentos de vídeos de apresentação que tenham participação confirmada na esteira de contratos fechados.',
      mcpCommand: 'mcp_call("meta_ads", "set_campaign_protection_rule", { min_icp_rate: 0.50, action: "prevent_auto_pause" })',
      buttonLabel: 'Blindar Campanhas via MCP',
      actionId: 'protect_brand_campaigns'
    }
  }
};

// Aliases para permitir busca tanto por sigla com hífen quanto minúscula
metricExplanations['meo-poe'] = metricExplanations['meo_poe'];
metricExplanations['ab-dyn'] = metricExplanations['ab_dyn'];
metricExplanations['freq-cap'] = metricExplanations['freq_cap'];
metricExplanations['ce-vsp'] = metricExplanations['ce_vsp'];
metricExplanations['rec-cat'] = metricExplanations['rec_cat'];
metricExplanations['cs-cap'] = metricExplanations['cs_cap'];
metricExplanations['emq-aud'] = metricExplanations['emq_aud'];
metricExplanations['rad-ano'] = metricExplanations['rad_ano'];
metricExplanations['roas-pred'] = metricExplanations['roas_pred'];
metricExplanations['path-wac'] = metricExplanations['path_wac'];
metricExplanations['lat-msg'] = metricExplanations['lat_msg'];
metricExplanations['tier-rout'] = metricExplanations['tier_rout'];
metricExplanations['ao-oedc'] = metricExplanations['ao_oedc'];
metricExplanations['rev-attr'] = metricExplanations['rev_attr'];

// Aliases para identificadores da Etapa 1 e Etapa 2
metricExplanations['arocell-efficiency'] = metricExplanations['arocell_efficiency'];
metricExplanations['total-spend'] = metricExplanations['total_spend'];
metricExplanations['leads-total'] = metricExplanations['leads_total'];
metricExplanations['cpl-leads-campaign'] = metricExplanations['cpl_leads_campaign'];
metricExplanations['new-followers'] = metricExplanations['new_followers'];
metricExplanations['golden-window'] = metricExplanations['golden_window'];
metricExplanations['roas-comercial'] = metricExplanations['roas_comercial'];
metricExplanations['cac-comercial'] = metricExplanations['cac_comercial'];

/**
 * Função utilitária com fallback gracioso de alta qualidade garantindo
 * que NENHUMA métrica disparada resulte em modal vazio ou crash.
 * Sempre retorna as 4 seções didáticas Dual-Audience.
 */
export function getMetricExplanation(metricId: string | null | undefined): MetricExplanation {
  if (!metricId) {
    return {
      metricId: 'unknown',
      title: 'Métrica Operacional Kota',
      technicalCode: 'KPI-META',
      businessView: {
        explanation: 'Indicador de performance comercial e de tráfego pago monitorado pela operação Kota Saúde e Beleza.',
        impact: 'Permite calibrar investimentos e maximizar a taxa de fechamento de contratos odontológicos.'
      },
      technicalView: {
        officialMetric: 'meta_graph_api_insight',
        mcpEndpoint: 'meta_marketing_api://act_204128509890123/insights',
        formula: 'Valor Real Consolidado / Período de Atribuição (Setembro/2026)',
        optimizationEvent: 'DYNAMIC_INSIGHT_QUERY',
        auctionParameters: 'Atribuição pós-clique padrão 7 dias'
      },
      kotaDiagnosis: {
        septValue: 'Operação Ativa',
        highlight: 'Monitoramento contínuo em tempo real',
        status: 'healthy',
        details: 'Indicador sob monitoramento contínuo no painel executivo StartMedia Intelligence.'
      },
      recommendedAction: {
        title: 'Auditar parâmetro via Meta MCP',
        description: 'Consultar o status mais recente do leilão e integridade do sinal na API de Conversões.',
        mcpCommand: 'mcp_call("meta_ads", "query_metric_telemetry", { metric_id: "unknown" })',
        buttonLabel: 'Auditar via Meta MCP',
        actionId: 'audit_generic_metric'
      }
    };
  }

  // Se já estiver mapeado no dicionário (ou alias)
  if (metricExplanations[metricId]) {
    return metricExplanations[metricId];
  }

  // Normalização para busca case-insensitive e replace de hífens/underscores
  const normalizedKey = metricId.toLowerCase().replace(/-/g, '_');
  if (metricExplanations[normalizedKey]) {
    return metricExplanations[normalizedKey];
  }

  // Fallback didático robusto com as 4 seções completas
  const formattedTitle = metricId
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  return {
    metricId,
    title: formattedTitle,
    technicalCode: `KPI-${metricId.toUpperCase().slice(0, 10)}`,
    businessView: {
      explanation: `Monitoramento operacional de ${formattedTitle} no ecossistema de marketing e vendas da Kota Saúde e Beleza. Representa a evolução dos investimentos de mídia frente ao retorno em novos pacientes e profissionais cadastrados.`,
      impact: 'Manter este indicador calibrado assegura a máxima alavancagem de receita e impede a perda de oportunidades comerciais valiosas.'
    },
    technicalView: {
      officialMetric: `meta_marketing_api:${metricId}`,
      mcpEndpoint: `meta_marketing_api://act_204128509890123/insights?fields=${metricId}`,
      formula: `Índice de Performance de ${formattedTitle} no período de Setembro`,
      optimizationEvent: 'OPTIMIZED_DELIVERY',
      auctionParameters: 'Leilão Meta Ads calibrado com lance automático (Lowest Cost)'
    },
    kotaDiagnosis: {
      septValue: 'Estável (Conforme Meta)',
      aprilValue: 'Histórico Base',
      highlight: 'Operando dentro das diretrizes acordadas com a diretoria Kota',
      status: 'healthy',
      details: `Os registros consolidados de Setembro indicam conformidade técnica para ${formattedTitle}, sem desvios estatísticos críticos detectados.`
    },
    recommendedAction: {
      title: `Otimizar parâmetro de ${formattedTitle} via Meta MCP`,
      description: 'Executar consulta de telemetria e calibração de entrega junto ao Meta Marketing API Sidecar.',
      mcpCommand: `mcp_call("meta_ads", "calibrate_metric", { metric: "${metricId}" })`,
      buttonLabel: 'Calibrar via Meta MCP',
      actionId: `calibrate_${metricId}`
    }
  };
}
