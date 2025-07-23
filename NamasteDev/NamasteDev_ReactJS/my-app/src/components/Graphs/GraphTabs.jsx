import React, { useState } from "react";
import ResizableLayout from "../ResizableLayout/ResizableLayout";
import "./GraphTabs.css";
import GraphIcon from "../../assets/icons/graph-icon.svg";
 
import RICEFWBarChart from './RICEFWBarChart';
import ReportSubcategoryChart from './ReportSubcategoryChart';
import RecommendationChart from './RecommendationChart';
import ExtensibilityChart from './ExtensibilityChart';
 
const tabs = [
  { id: 'summary', label: 'View Report Summary - Dashboard', title: 'Report Summary', component: <RICEFWBarChart /> },
  { id: 'system', label: 'View System Analysis', title: 'System Analysis', component: <ReportSubcategoryChart /> },
  { id: 'deepdive', label: 'View Deep Dive Analysis', title: 'Deep Dive Analysis', component: <RecommendationChart /> },
  { id: 'solutions', label: 'View Recommended Solutions', title: 'Recommended Solutions', component: <ExtensibilityChart /> },
];
 
const GraphTabs = () => {
  const [activeTab, setActiveTab] = useState('summary');
 
  // Find the active tab data based on the activeTab ID
  const activeTabData = tabs.find(tab => tab.id === activeTab);
 
  const customGraphContent = (
    <div className="tab-buttons">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`tab-button ${tab.id === activeTab ? 'active' : ''}`}
        >
          <img src={GraphIcon} className="graph-icon" alt="graph icon" />
          {tab.label}
        </button>
      ))}
    </div>
  );
 
  const customContent = (
    <>
    <div className="extracts-wrapper"><h3>{activeTabData?.title}</h3></div>
    <div className="chart-panel">
      {/* Display the content based on active tab */}
      <div className="chart-content">
        {activeTabData?.component}
      </div>
    </div></>
   
   
  );
 
  return (
    <ResizableLayout
      customGraphContent={customGraphContent}
      customContent={customContent}
    />
  );
};
 
export default GraphTabs;