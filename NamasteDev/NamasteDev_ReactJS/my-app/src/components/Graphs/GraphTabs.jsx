// GraphTabs.js
import React from 'react';
import './GraphTabs.css';

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
            📊 {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GraphTabs;
