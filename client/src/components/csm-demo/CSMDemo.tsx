import React, { useState, useEffect, useRef } from 'react';
import { IframeDemo } from '@/components/ui/iframe-demo';
import { marked } from 'marked';
import { Chart } from 'chart.js/auto';
import DOMPurify from 'dompurify';
import './CSMDemo.css';

const CSMDemo: React.FC = () => {
    const [activeTab, setActiveTab] = useState('health');
    const [healthScore, setHealthScore] = useState(82);
    const [healthStatus, setHealthStatus] = useState('Healthy - Low churn risk');
    const [prediction, setPrediction] = useState({ value: 0, confidence: 85 });
    const [renewalProbability, setRenewalProbability] = useState(85);
    const [generatedContent, setGeneratedContent] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const shapChartRef = useRef(null);

    const updateShapExplanation = () => {
        const factors = {
            'Product Usage': Math.random() * 40,
            'Support Tickets': -Math.random() * 30,
            'Feature Adoption': Math.random() * 25,
            'Sentiment Score': Math.random() * 20,
        };

        if (shapChartRef.current) {
            const ctx = shapChartRef.current.getContext('2d');

            if (shapChartRef.current.chartInstance) {
                shapChartRef.current.chartInstance.destroy();
            }

            shapChartRef.current.chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(factors),
                    datasets: [
                        {
                            label: 'Feature Impact',
                            data: Object.values(factors),
                            backgroundColor: '#4f46e5',
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };

    useEffect(() => {
        updateShapExplanation();

        return () => {
            if (shapChartRef.current && shapChartRef.current.chartInstance) {
                shapChartRef.current.chartInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="space-y-8">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            CSM Demo's
          </motion.h1>
            
            <div className="computer-frame">
                <div className="screen-bezel">
                    <div className="screen-content">
                        <IframeDemo 
                            url="https://shared-success-space.lovable.app/"
                            title="Shared Success Space"
                        />
                    </div>
                </div>
            </div>

            <div className="computer-frame">
                <div className="screen-bezel">
                    <div className="screen-content">
                        <IframeDemo 
                            url="https://customer-success-galaxy.lovable.app"
                            title="Customer Success Galaxy"
                        />
                    </div>
                </div>
            </div>

            <div className="computer-frame">
                <div className="screen-bezel">
                    <div className="screen-content">
                        <IframeDemo 
                            url="https://third-demo-app.example.com"
                            title="Third Demo App"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSMDemo;
