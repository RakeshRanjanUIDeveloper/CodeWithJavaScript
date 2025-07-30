// GraphTabs.js
import React from 'react';
import './GraphTabs.css';
import GraphIcon from "../../assets/icons/graph-icon.svg";
const GraphTabs = ({ onSelectChart }) => {
  const tabs = [
    { id: 'summary', label: 'View Report Summary- Dashboard' },
    { id: 'system', label: 'View System Analysis' },
    { id: 'deepdive', label: 'View Deep Dive Analysis' },
    { id: 'solutions', label: 'View Recommended Solutions' },
  ];

  return (
    <div className="graph-tabs-container">
     <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSelectChart(tab.id)}
            className="tab-button"
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
