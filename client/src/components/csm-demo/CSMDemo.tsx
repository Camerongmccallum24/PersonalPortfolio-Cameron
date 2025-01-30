import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import { Chart } from 'chart.js/auto';
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

    // Mock TensorFlow.js LSTM Prediction
    class HealthPredictor {
        predict(inputs) {
            const trend = inputs.usage * 0.6 - inputs.tickets * 0.3;
            return {
                value: Math.min(100, Math.max(0, trend)),
                confidence: Math.random() * 0.2 + 0.8, // 80-100% confidence
            };
        }
    }

    const predictor = new HealthPredictor();

    // Update Health Score
    const updateHealth = (usage, tickets) => {
        const score = Math.max(0, 80 - tickets * 2 + usage * 0.3);
        setHealthScore(Math.round(score));
        setHealthStatus(
            score > 70 ? 'Healthy - Low churn risk' : score > 50 ? 'Needs Attention' : 'High Risk'
        );

        const prediction = predictor.predict({ usage, tickets });
        setPrediction({
            value: Math.round(prediction.value),
            confidence: Math.round(prediction.confidence * 100),
        });
    };

    // Simulate Renewal
    const simulateRenewal = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setRenewalProbability(92);
            updateShapExplanation();
            setIsProcessing(false);
        }, 1500);
    };

    // Update SHAP Explanation Chart
    const updateShapExplanation = () => {
        const factors = {
            'Product Usage': Math.random() * 40,
            'Support Tickets': -Math.random() * 30,
            'Feature Adoption': Math.random() * 25,
            'Sentiment Score': Math.random() * 20,
        };

        if (shapChartRef.current) {
            const ctx = shapChartRef.current.getContext('2d');
            new Chart(ctx, {
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
            });
        }
    };

    // Generate Advocacy Content
    const generateAdvocacyContent = (type) => {
        setIsProcessing(true);
        setTimeout(() => {
            const templates = {
                'case-study': `**AI-Generated Case Study Outline**\n
                  1. Executive Summary (Auto-generated from ROI data)\n
                  2. Challenge Identification (NLP analysis of support tickets)\n
                  3. Key Results: ${Math.floor(Math.random() * 200)}% ROI achieved`,
                'referral': `**AI-Personalized Email Draft**\n
                  Hi [Name],\n
                  Our model suggests you and [Company] share:\n
                  - Common tech stack (${Math.random() * 80 + 20}% match)\n
                  - Similar company size\n
                  - Complementary business goals`,
                'testimonial': `**AI-Suggested Testimonial Request**\n
                  Based on NPS sentiment analysis:\n
                  "We noticed you mentioned [key phrase from feedback].\n
                  Would you elaborate on this for our case study?"`,
            };

            setGeneratedContent(marked.parse(templates[type]));
            setIsProcessing(false);
        }, 1000);
    };

    // Initialize Chart on Mount
    useEffect(() => {
        updateShapExplanation();
    }, []);

    return (
        <div className="computer-frame">
            <h1 className="page-header">CSM Demo</h1>
            <div className="screen-bezel">
                <div className="screen-content">
                    <div className="csm-demo">
            <div className="demo-header">
                <h3>
                    AI-Powered CSM Tools <span className="ai-badge">TensorFlow.js Active</span>
                </h3>
            </div>

            {isProcessing && (
                <div className="ai-processing">
                    <i className="fas fa-brain"></i> AI processing request...
                </div>
            )}

            <div className="demo-tabs">
                <button
                    className={`tab-btn ${activeTab === 'health' ? 'active' : ''}`}
                    onClick={() => setActiveTab('health')}
                >
                    Health Score
                </button>
                <button
                    className={`tab-btn ${activeTab === 'renewal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('renewal')}
                >
                    Renewal Tracker
                </button>
                <button
                    className={`tab-btn ${activeTab === 'advocacy' ? 'active' : ''}`}
                    onClick={() => setActiveTab('advocacy')}
                >
                    Advocacy Engine
                </button>
            </div>

            <div className="tool-container">
                {activeTab === 'health' && (
                    <div className="tool-content">
                        <h4>
                            Predictive Health Analytics <span className="ai-badge">LSTM Forecasting</span>
                        </h4>
                        <div className="health-score">
                            <label>Product Usage Frequency</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                defaultValue="75"
                                onChange={(e) => updateHealth(e.target.value, 3)}
                            />

                            <label>Support Tickets (Last 30 Days)</label>
                            <input
                                type="range"
                                min="0"
                                max="20"
                                defaultValue="3"
                                onChange={(e) => updateHealth(75, e.target.value)}
                            />

                            <div className="score-display">{healthScore}</div>
                            <p>{healthStatus}</p>

                            <div className="model-confidence">
                                Next 30-day projection: <span>{prediction.value}%</span> (Confidence:{' '}
                                {prediction.confidence}%)
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'renewal' && (
                    <div className="tool-content">
                        <h4>
                            Neural Churn Prediction <span className="ai-badge">PyTorch Model</span>
                        </h4>
                        <div className="renewal-tracker">
                            <div className="renewal-status status-green">
                                <h4>Renewal Date: 2024-09-15</h4>
                                <p>Probability: {renewalProbability}%</p>
                                <p>Key Factors: Product adoption, Positive NPS</p>
                            </div>
                            <button onClick={simulateRenewal}>Simulate Engagement Campaign</button>

                            <div className="ai-processing">
                                <h5>AI Decision Factors:</h5>
                                <canvas ref={shapChartRef} width="400" height="200"></canvas>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'advocacy' && (
                    <div className="tool-content">
                        <h4>
                            NLP-Powered Outreach <span className="ai-badge">GPT-4 Integration</span>
                        </h4>
                        <div className="advocacy-engine">
                            <div className="advocacy-card" onClick={() => generateAdvocacyContent('case-study')}>
                                <h4>📑 Case Study Candidate</h4>
                                <p>Acme Corp - 92% ROI achieved</p>
                            </div>
                            <div className="advocacy-card" onClick={() => generateAdvocacyContent('referral')}>
                                <h4>🤝 Referral Opportunity</h4>
                                <p>3 connections in common with Beta Inc</p>
                            </div>
                            <div className="advocacy-card" onClick={() => generateAdvocacyContent('testimonial')}>
                                <h4>⭐ Testimonial Request</h4>
                                <p>Last NPS: 9/10 - Ideal candidate</p>
                            </div>

                            <div
                                className="generated-content"
                                dangerouslySetInnerHTML={{ __html: generatedContent }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
                </div>
            </div>
        </div>
    );
};

export default CSMDemo;