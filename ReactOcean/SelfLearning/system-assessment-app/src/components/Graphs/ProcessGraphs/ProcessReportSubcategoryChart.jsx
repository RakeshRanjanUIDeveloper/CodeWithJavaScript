import React, { useState } from 'react';

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

import {
  reportSubcategoryData,
  reportStatsPrimary,
  reportStatsSecondary
} from '../../../data/chartData';
import { processTabs } from '../../../data/ProcessGraphTabs';
import '../../Graphs/ReportSubcategoryChart.css';


const ProcessReportSubcategoryChart = ({ activeTab }) => {
  const currentTab = processTabs.find(tab => tab.id === activeTab);
  const panelTitle = currentTab?.paneltitle;


  return (
    <>
    <div className='extracts-wrapper'>
      <h3>{panelTitle}</h3>
    </div>
    <div className="report-chart-container graph-container">
      <h3>Report Subcategory</h3>

      <div className="chart-section">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={reportSubcategoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00c6ff" />
                <stop offset="100%" stopColor="#bc67ff" />
              </linearGradient>
            </defs>
            <Bar dataKey="count" fill="url(#blueGradient)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* First row of stats */}
      <div className="metrics-grid">
        {reportStatsPrimary.map((stat, idx) => (
          <div key={idx} className="metric-box">
            <strong>{stat.value}</strong> {stat.label}
          </div>
        ))}
      </div>

      {/* Second row of stats */}
      <div className="metrics-grid">
        {reportStatsSecondary.map((stat, idx) => (
          <div key={idx} className="metric-box">
            <strong>{stat.value}</strong> {stat.label}
          </div>
        ))}
      </div>
    </div></>
    
  );
};

export default ProcessReportSubcategoryChart;
