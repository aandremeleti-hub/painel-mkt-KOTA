import React, { useState } from 'react';
import { DashboardLayout, useDashboard } from './components/layout/DashboardLayout';
import { DashboardTab } from './components/layout/Navbar';
import { ExecutiveOverviewModule } from './components/modules/overview/ExecutiveOverviewModule';
import { Etapa1Module } from './components/modules/etapa1';
import { Etapa2Module } from './components/modules/etapa2';
import { Etapa3Module } from './components/modules/etapa3';

const DashboardContent: React.FC = () => {
  const { openMetricModal, activeTab } = useDashboard();

  if (activeTab === 'overview') {
    return <ExecutiveOverviewModule />;
  }

  if (activeTab === 'media') {
    return <Etapa1Module onOpenModal={openMetricModal} />;
  }

  if (activeTab === 'funnel') {
    return <Etapa2Module />;
  }

  if (activeTab === 'predictive') {
    return <Etapa3Module />;
  }

  return null;
};

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      <DashboardContent />
    </DashboardLayout>
  );
};

export default App;
