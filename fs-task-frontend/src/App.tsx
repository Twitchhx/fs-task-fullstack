import React, { useState } from 'react';
import Sidebar from './components/Sidebar.tsx';
import ProfileHeader from './components/ProfileHeader.tsx';
import PersonalInfoTab from './components/PersonalInfoTab.tsx';
import FinancialInfoTab from './components/FinancialInfoTab.tsx';
import BasicInfoCard from './components/BasicInfoCard.tsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="flex app">
      <Sidebar />
      <div className="flex flex-col w-full">
        <ProfileHeader />
        <div style={{ marginLeft: "1.5rem" }} className="flex mt-4">
          <BasicInfoCard activeTab={activeTab} setActiveTab={setActiveTab} />
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{ display: activeTab === 'personal' ? 'block' : 'none' }}>
              <PersonalInfoTab />
            </div>
            <div style={{ display: activeTab === 'financial' ? 'block' : 'none' }}>
              <FinancialInfoTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
