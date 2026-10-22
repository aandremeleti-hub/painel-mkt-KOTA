import React from 'react';
import { ArrowUpRight, ArrowDownRight, HelpCircle, Info } from 'lucide-react';
import { StatusBadge, BadgeStatus } from './StatusBadge';

export interface MetricCardProps {
  id: string; // Metric ID correspondente a metricExplanations
  title: string;
  technicalCode: string;
  value: string | number;
  variationMoM?: {
    value: number; // Porcentagem, ex: -33.9 ou +65.2
    isPositiveGood?: boolean; // Para custos (CPL, CPM), queda é bom (false)
    text?: string;
  };
  status?: BadgeStatus;
  statusLabel?: string;
  statusTooltip?: React.ReactNode;
  subtext?: string;
  icon?: React.ReactNode;
  onOpenModal: (metricId: string) => void;
  className?: string;
}

const getDefaultStatusTooltip = (status: BadgeStatus, label?: string) => {
  const getInfo = () => {
    switch (status) {
      case 'healthy':
      case 'active':
        return {
          title: label || 'Saudável',
          desc: 'Métrica operando dentro da meta de performance e eficiência.',
          color: 'text-indicator-green',
        };
      case 'warning':
      case 'in_progress':
        return {
          title: label || 'Atenção',
          desc: 'Oscilação moderada fora da faixa ideal. Monitoramento recomendado.',
          color: 'text-indicator-amber',
        };
      case 'critical':
        return {
          title: label || 'Crítico',
          desc: 'Desvio relevante da meta operacional. Ação corretiva recomendada.',
          color: 'text-indicator-red',
        };
      case 'simulated':
        return {
          title: label || 'Simulado',
          desc: 'Cenário estatístico projetado com base no modelo preditivo.',
          color: 'text-cyan-400',
        };
      default:
        return {
          title: label || 'Operacional',
          desc: 'Indicador em acompanhamento contínuo.',
          color: 'text-zinc-300',
        };
    }
  };

  const info = getInfo();

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
        <Info className="w-3.5 h-3.5 text-brand-primary" />
        <span className={info.color}>{info.title}</span>
      </div>
      <p className="text-[11px] text-zinc-300 leading-snug">
        {info.desc}
      </p>
    </div>
  );
};

export const MetricCard: React.FC<MetricCardProps> = ({
  id,
  title,
  technicalCode,
  value,
  variationMoM,
  status = 'healthy',
  statusLabel,
  statusTooltip,
  subtext,
  icon,
  onOpenModal,
  className = '',
}) => {
  const resolvedTooltip = statusTooltip || getDefaultStatusTooltip(status, statusLabel);
  // Determine if MoM change is favorable
  const renderVariation = () => {
    if (!variationMoM) return null;

    const { value: pct, isPositiveGood = true, text } = variationMoM;
    const isIncrease = pct > 0;
    const isZero = pct === 0;

    // Is it healthy or critical?
    // Ex: CPL down is good -> isPositiveGood = false, isIncrease = false -> favorable!
    const isFavorable = isIncrease ? isPositiveGood : !isPositiveGood;

    const colorClass = isZero
      ? 'text-zinc-400'
      : isFavorable
      ? 'text-indicator-green bg-emerald-950/30 border-emerald-800/30'
      : 'text-indicator-red bg-rose-950/30 border-rose-800/30';

    return (
      <div
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold border ${colorClass}`}
      >
        {isIncrease ? (
          <ArrowUpRight className="w-3.5 h-3.5" />
        ) : (
          <ArrowDownRight className="w-3.5 h-3.5" />
        )}
        <span>
          {pct > 0 ? `+${pct.toFixed(1)}%` : `${pct.toFixed(1)}%`}
        </span>
        {text && <span className="text-[10px] opacity-75 font-normal ml-0.5">{text}</span>}
      </div>
    );
  };

  return (
    <div
      className={`relative group bg-card hover:bg-card-hover border border-border hover:border-border-active rounded-xl p-5 transition-all duration-200 shadow-sm flex flex-col justify-between ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-medium text-brand-primary tracking-wide uppercase px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
              {technicalCode}
            </span>
          </div>
          <h3 className="text-sm font-semibold text-text-primary mt-1 tracking-tight">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {icon && <div className="text-text-muted group-hover:text-text-primary transition-colors">{icon}</div>}
          <StatusBadge status={status} label={statusLabel} size="sm" tooltip={resolvedTooltip} />
        </div>
      </div>

      {/* Main Metric Value (28px - 32px) */}
      <div className="my-2">
        <div className="text-3xl font-extrabold tracking-tight text-white font-sans">
          {value}
        </div>
        
        {subtext && (
          <p className="text-xs text-text-muted mt-1 leading-snug">
            {subtext}
          </p>
        )}
      </div>

      {/* Bottom Bar: Variation & Modal Trigger Button */}
      <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between gap-2">
        <div>
          {renderVariation()}
        </div>

        <button
          onClick={() => onOpenModal(id)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-text-secondary hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-border hover:border-zinc-700 transition-all cursor-pointer group/btn"
          title="Ver explicação de negócio, visão operacional e diagnóstico da Kota"
        >
          <HelpCircle className="w-3.5 h-3.5 text-brand-primary group-hover/btn:rotate-12 transition-transform" />
          <span>Entender Indicador</span>
        </button>
      </div>
    </div>
  );
};
