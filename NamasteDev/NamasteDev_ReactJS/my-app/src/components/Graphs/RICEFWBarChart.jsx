import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { ricefwData, cleanlinessScore } from '../../data/chartData';
import './RICEFWBarChart.css';

const RICEFWBarChart = () => {
  const percentage = Math.round(cleanlinessScore * 100);

  return (
    <div className="ricefw-container">
      <h3>Current System Analysis</h3>

      {/* Bar Chart Section */}
      <div className="bar-section">
        <h4>RICEFW Count</h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ricefwData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis ticks={[0, 200, 400, 600]}/>
            <Tooltip />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00c6ff" />
                <stop offset="100%" stopColor="#bc67ff" />
              </linearGradient>
            </defs>
            <Bar dataKey="count" fill="url(#gradient)" />
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
          <div className="metric"><strong>48</strong> No-Code Objects</div>
          <div className="metric"><strong>176</strong> Inactive/Syntax Error Objects</div>
          <div className="metric"><strong>436</strong> Unused Objects (4 Months)</div>
          <div className="metric"><strong>20</strong> Cloned Objects &gt; 90</div>
          <div className="metric"><strong>7</strong> Cloned Objects &gt; 80</div>
          <div className="metric"><strong>1679</strong> RICEFW Objects</div>
          <div className="metric"><strong>545</strong> DDIC objects</div>
        </div>
      </div>
    </div>
  );
};

export default RICEFWBarChart;
