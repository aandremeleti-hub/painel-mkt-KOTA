import React from 'react';
import { 
  LayoutDashboard,
  BarChart3, 
  Layers, 
  Cpu, 
  Calendar
} from 'lucide-react';
import logoKota from '../../assets/logo_kota.png';

export type DashboardTab = 'overview' | 'media' | 'funnel' | 'predictive';
export type PeriodOption = '7d' | '14d' | '30d_sept';

export interface NavbarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  selectedPeriod: PeriodOption;
  onPeriodChange: (period: PeriodOption) => void;
  mcpOnline?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  selectedPeriod,
  onPeriodChange,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#080808]/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand & Client Identification */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-emerald-400 p-[1px] flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-[#0e0e0e] rounded-[11px] flex items-center justify-center p-1 overflow-hidden">
                <img 
                  src={logoKota} 
                  alt="Logo Kota Saúde e Beleza" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm tracking-tight text-white font-sans">
                  StartMedia
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-zinc-800 text-zinc-300 rounded font-semibold tracking-wider">
                  Intelligence
                </span>
              </div>
              <span className="text-xs text-text-muted font-medium">
                Kota Saúde e Beleza
              </span>
            </div>
          </div>

          {/* Navigation Tabs (Center) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121212] p-1 rounded-xl border border-border-subtle">
            <button
              onClick={() => onTabChange('overview')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-text-secondary hover:text-white hover:bg-zinc-900'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-cyan-400" />
              <span>Visão Executiva</span>
            </button>

            <button
              onClick={() => onTabChange('media')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'media'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-text-secondary hover:text-white hover:bg-zinc-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mídia Meta Ads</span>
            </button>

            <button
              onClick={() => onTabChange('funnel')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'funnel'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-text-secondary hover:text-white hover:bg-zinc-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Funil Comercial & SDR</span>
            </button>

            <button
              onClick={() => onTabChange('predictive')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'predictive'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-text-secondary hover:text-white hover:bg-zinc-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-indicator-green" />
              <span>Matriz Preditiva</span>
            </button>
          </nav>

          {/* Right Controls: Period Selector */}
          <div className="flex items-center gap-3">
            {/* Period Selector */}
            <div className="flex items-center bg-[#141414] border border-border rounded-lg p-0.5 text-xs">
              <Calendar className="w-3.5 h-3.5 text-text-muted ml-2 mr-1 hidden sm:block" />
              <button
                onClick={() => onPeriodChange('7d')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  selectedPeriod === '7d'
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-text-muted hover:text-zinc-200'
                }`}
              >
                7d
              </button>
              <button
                onClick={() => onPeriodChange('14d')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  selectedPeriod === '14d'
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-text-muted hover:text-zinc-200'
                }`}
              >
                14d
              </button>
              <button
                onClick={() => onPeriodChange('30d_sept')}
                className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                  selectedPeriod === '30d_sept'
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-text-muted hover:text-zinc-200'
                }`}
              >
                Consolidado (30d)
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Submenu Navigation */}
        <div className="flex md:hidden items-center justify-between pb-3 pt-1 border-t border-border-subtle overflow-x-auto gap-2">
          <button
            onClick={() => onTabChange('overview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${
              activeTab === 'overview' ? 'bg-zinc-800 text-white' : 'text-text-muted'
            }`}
          >
            <LayoutDashboard className="w-3 h-3 text-cyan-400" />
            <span>Executivo</span>
          </button>
          <button
            onClick={() => onTabChange('media')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${
              activeTab === 'media' ? 'bg-zinc-800 text-white' : 'text-text-muted'
            }`}
          >
            <BarChart3 className="w-3 h-3 text-cyan-400" />
            <span>Mídia</span>
          </button>
          <button
            onClick={() => onTabChange('funnel')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${
              activeTab === 'funnel' ? 'bg-zinc-800 text-white' : 'text-text-muted'
            }`}
          >
            <Layers className="w-3 h-3 text-amber-400" />
            <span>Funil & SDR</span>
          </button>
          <button
            onClick={() => onTabChange('predictive')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${
              activeTab === 'predictive' ? 'bg-zinc-800 text-white' : 'text-text-muted'
            }`}
          >
            <Cpu className="w-3 h-3 text-indicator-green" />
            <span>Matriz Preditiva</span>
          </button>
        </div>
      </div>
    </header>
  );
};
