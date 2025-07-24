import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from 'recharts';

import { extensibilityData } from "../../data/chartData";
import './ExtensibilityChart.css';

const ExtensibilityChart = () => (
  <div className="extensibility-chart-container">
    <h3 className="extensibility-chart-title">Extensibility Recommendations</h3>

    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={extensibilityData}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 120, bottom: 20 }}
      >
        <XAxis type="number" />
        <YAxis dataKey="type" type="category" />
        <Tooltip />
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a066f7" />
            <stop offset="100%" stopColor="#6ee7f7" />
          </linearGradient>
        </defs>
        <Bar dataKey="value" fill="url(#barGradient)" radius={[10, 10, 10, 10]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ExtensibilityChart;
