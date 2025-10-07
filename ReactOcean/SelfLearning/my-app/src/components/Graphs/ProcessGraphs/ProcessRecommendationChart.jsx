import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';
import {recommendationData } from '../../../data/chartData';
import { processTabs } from '../../../data/ProcessGraphTabs';
import '../../Graphs/RecommendationChart.css';

const ProcessRecommendationChart = ({ activeTab }) => {
    const currentTab = processTabs.find(tab => tab.id === activeTab);
    const panelTitle = currentTab?.paneltitle;

    return(
        <>
        <div className='extracts-wrapper'>
            <h3>{panelTitle}</h3>
        </div>
        <div className="recommendation-chart-container graph-container">
            <div className="recommendation-chart-title">
                Prime Recommendations (RICEFW Category) 
            </div>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={recommendationData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="DDIC" fill="#7EC8E3" />
                    <Bar dataKey="RICEFW" fill="#6495ED" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </>
    );
};

export default ProcessRecommendationChart;
