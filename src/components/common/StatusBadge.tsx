import React from 'react';

export type BadgeStatus = 'healthy' | 'warning' | 'critical' | 'active' | 'in_progress' | 'planned' | 'simulated';

interface StatusBadgeProps {
  status: BadgeStatus;
  label?: string;
  size?: 'sm' | 'md';
  pulse?: boolean;
  tooltip?: React.ReactNode;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  size = 'md',
  pulse = false,
  tooltip,
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'healthy':
      case 'active':
        return {
          bg: 'bg-emerald-950/40',
          border: 'border-indicator-green/40',
          text: 'text-indicator-green',
          dot: 'bg-indicator-green',
          defaultLabel: status === 'healthy' ? 'Saudável' : 'Ativo',
        };
      case 'warning':
      case 'in_progress':
        return {
          bg: 'bg-amber-950/40',
          border: 'border-indicator-amber/40',
          text: 'text-indicator-amber',
          dot: 'bg-indicator-amber',
          defaultLabel: status === 'warning' ? 'Atenção' : 'Em Andamento',
        };
      case 'critical':
        return {
          bg: 'bg-rose-950/40',
          border: 'border-indicator-red/40',
          text: 'text-indicator-red',
          dot: 'bg-indicator-red',
          defaultLabel: 'Crítico',
        };
      case 'planned':
        return {
          bg: 'bg-zinc-900',
          border: 'border-zinc-700',
          text: 'text-zinc-400',
          dot: 'bg-zinc-500',
          defaultLabel: 'Planejado',
        };
      case 'simulated':
        return {
          bg: 'bg-cyan-950/40',
          border: 'border-cyan-500/40',
          text: 'text-cyan-400',
          dot: 'bg-cyan-400',
          defaultLabel: 'Simulado',
        };
      default:
        return {
          bg: 'bg-zinc-900',
          border: 'border-border',
          text: 'text-text-secondary',
          dot: 'bg-zinc-400',
          defaultLabel: status,
        };
    }
  };

  const config = getStatusConfig();
  const displayLabel = label || config.defaultLabel;
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  const badgeContent = (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${config.bg} ${config.border} ${config.text} ${sizeClasses} ${tooltip ? 'cursor-help' : ''}`}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${config.dot}`}
          />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${config.dot}`} />
      </span>
      <span>{displayLabel}</span>
    </span>
  );

  if (!tooltip) {
    return badgeContent;
  }

  return (
    <div className="relative group/badge inline-flex items-center">
      {badgeContent}
      <div className="absolute right-0 top-full mt-2 hidden group-hover/badge:block w-72 p-3 bg-[#18181b] border border-zinc-700/80 rounded-xl shadow-2xl z-50 text-left pointer-events-none animate-fadeIn backdrop-blur-md">
        {tooltip}
      </div>
    </div>
  );
};
