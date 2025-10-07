import React, { useState } from 'react';
import '../../Graphs/GraphTabs.css'; 
import GraphIcon from "../../../assets/icons/graph-icon.svg";
import { integrationTabs } from '../../../data/IntegrationGraphTabs';

const IntegrationGraphTabs = ({ onTabClick }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    onTabClick?.(tabId);
  };

  return (
    <div className="graph-tabs-container">
      <div className="tab-buttons">
        {integrationTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            <img src={GraphIcon} className="graph-icon" alt="graph icon" />
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IntegrationGraphTabs;
