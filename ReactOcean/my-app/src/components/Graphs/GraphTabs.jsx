import React, { useState } from 'react';
import './GraphTabs.css';
import GraphIcon from "../../assets/icons/graph-icon.svg";
import { tabs } from '../../data/GraphTabs';

const GraphTabs = ({ onSelectChart }) => {
  const [activeTab, setActiveTab] = useState(null); 
  const handleClick = (tabId) => {
    setActiveTab(tabId);       
    onSelectChart(tabId);     
  };

  return (
    <div className="graph-tabs-container">
      <div className="tab-buttons">
        {tabs.map((tab) => (
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

export default GraphTabs;
