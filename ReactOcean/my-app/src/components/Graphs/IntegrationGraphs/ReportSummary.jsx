import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import CrossIcon from "../../../assets/icons/clear-icon.svg";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { 
  ricefwData, 
  cleanlinessScore,
  reportSubcategoryData,
  reportStatsPrimary,
  reportStatsSecondary
} from '../../../data/chartData'; 

import { integrationTabs } from '../../../data/IntegrationGraphTabs';
import '../../Graphs/RICEFWBarChart.css'; 
import MainFrameContext from '../../context/MainFrameContext';

const ReportSummary = ({ activeTab }) => {
  const { incrementHierarchyStep, hierarchy, setIsRightPanelOpen, setLastStepIntegration, setShowDropdownComponent } = useContext(MainFrameContext);

  const currentTab = integrationTabs.find(tab => tab.id === activeTab);
  const panelTitle = currentTab?.paneltitle;

  let dataForChart = ricefwData;
  let percentage = Math.round(cleanlinessScore * 100);
  let primaryMetrics = reportStatsPrimary;
  let secondaryMetrics = reportStatsSecondary;

  switch (activeTab) {
    case 'summary':
      dataForChart = reportSubcategoryData;
      break;
    case 'solutions':
      break;
    default:
      break;
  }

  return (
    <>
      <img
        src={CrossIcon}
        className="cross-icon"
        alt="close"
        onClick={() => {
          setIsRightPanelOpen(false);
          incrementHierarchyStep(hierarchy);
          setLastStepIntegration(true);
          setShowDropdownComponent(false);
        }}
      />

      <div className='extracts-wrapper'>
        <h3>{panelTitle}</h3>
      </div>

      <div className="ricefw-container graph-container">
        <h3>Current System Analysis</h3>

        {/* Bar Chart Section */}
        <div className="bar-section">
          <h4>RICEFW Count</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataForChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={activeTab === 'summary' ? "type" : "category"} />
              <YAxis ticks={[0, 200, 400, 600]} />
              <Tooltip />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00c6ff" />
                  <stop offset="100%" stopColor="#bc67ff" />
                </linearGradient>
              </defs>
              <Bar dataKey={activeTab === 'summary' ? "count" : "count"} fill="url(#gradient)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gauge + Metrics Section */}
        <div className="details-section">
          <div className="gauge-section">
            <h5>Cleanliness Quotient</h5>
            <div className="gauge-wrapper">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}`}
                styles={buildStyles({
                  pathColor: '#00c6ff',
                  textColor: '#333',
                  trailColor: '#eee',
                })}
              />
            </div>
          </div>

          <div className="metrics-section">
            {primaryMetrics.map(({ value, label }) => (
              <div key={label} className="metric"><strong>{value}</strong> {label}</div>
            ))}
            {secondaryMetrics.map(({ value, label }) => (
              <div key={label} className="metric"><strong>{value}</strong> {label}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportSummary;
