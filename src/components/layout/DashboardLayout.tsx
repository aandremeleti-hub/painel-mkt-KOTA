import React, { useState, createContext, useContext } from 'react';
import { Navbar, DashboardTab, PeriodOption } from './Navbar';
import { MetricModal } from '../common/MetricModal';
import { getMetricExplanation } from '../../data/metricExplanations';
import { MetricExplanation } from '../../types/modalTypes';

// Context for child components to easily open metric explanations from anywhere
interface DashboardContextType {
  openMetricModal: (metricId: string) => void;
  activeTab: DashboardTab;
  setActiveTab: (tab: DashboardTab) => void;
  selectedPeriod: PeriodOption;
  setSelectedPeriod: (period: PeriodOption) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardLayout');
  }
  return context;
};

export interface DashboardLayoutProps {
  children?: React.ReactNode;
  activeTab?: DashboardTab;
  onTabChange?: (tab: DashboardTab) => void;
  selectedPeriod?: PeriodOption;
  onPeriodChange?: (period: PeriodOption) => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activeTab: controlledTab,
  onTabChange: controlledOnTabChange,
  selectedPeriod: controlledPeriod,
  onPeriodChange: controlledOnPeriodChange,
}) => {
  // Internal state if not controlled from outside
  const [internalTab, setInternalTab] = useState<DashboardTab>('overview');
  const [internalPeriod, setInternalPeriod] = useState<PeriodOption>('30d_sept');

  const activeTab = controlledTab ?? internalTab;
  const setActiveTab = controlledOnTabChange ?? setInternalTab;

  const selectedPeriod = controlledPeriod ?? internalPeriod;
  const setSelectedPeriod = controlledOnPeriodChange ?? setInternalPeriod;

  // Active Metric Modal state
  const [activeMetricId, setActiveMetricId] = useState<string | null>(null);

  const openMetricModal = (metricId: string) => {
    setActiveMetricId(metricId);
  };

  const closeMetricModal = () => {
    setActiveMetricId(null);
  };

  const currentMetricData: MetricExplanation | null = activeMetricId
    ? getMetricExplanation(activeMetricId)
    : null;

  return (
    <DashboardContext.Provider
      value={{
        openMetricModal,
        activeTab,
        setActiveTab,
        selectedPeriod,
        setSelectedPeriod,
      }}
    >
      <div className="min-h-screen bg-background text-text-primary flex flex-col font-sans">
        {/* Top Sticky Header */}
        <Navbar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
          mcpOnline={true}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Global Metric Explanation Modal */}
        <MetricModal
          isOpen={!!activeMetricId}
          metric={currentMetricData}
          onClose={closeMetricModal}
        />

        {/* Minimal Footer */}
        <footer className="border-t border-border py-4 bg-[#0a0a0a] text-center text-xs text-text-muted">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>StartMedia Intelligence • Painel Operacional Kota Saúde e Beleza v2.0</span>
            <span className="font-mono text-[11px] text-zinc-500">
              Stack: React 19 • Vite • Tailwind CSS • Meta Marketing API Sidecar MCP
            </span>
          </div>
        </footer>
      </div>
    </DashboardContext.Provider>
  );
};
