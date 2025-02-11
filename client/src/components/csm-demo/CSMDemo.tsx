import React, { useState, useEffect, useRef } from 'react';
import { IframeDemo } from '@/components/ui/iframe-demo';
import { marked } from 'marked';
import { Chart } from 'chart.js/auto';
import './CSMDemo.css';

const CSMDemo: React.FC = () => {
    const [activeTab, setActiveTab] = useState('health');
    const [healthScore, setHealthScore] = useState(82);
    const [chart, setChart] = useState<Chart | null>(null);  // Correct type
    const [healthStatus, setHealthStatus] = useState('Healthy - Low churn risk');
    const [prediction, setPrediction] = useState({ value: 0, confidence: 85 });
    const [renewalProbability, setRenewalProbability] = useState(85);
    const [generatedContent, setGeneratedContent] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const shapChartRef = useRef<HTMLCanvasElement>(null); // Correct type

    // ... (rest of your component code)

    useEffect(() => {
        // Check if ref is valid before trying to use it.
        if (shapChartRef.current) {  
            updateShapExplanation();
        } else {
            console.error("shapChartRef is null on mount. Canvas not found.");
        }
    }, []);

    // ... (rest of component code, including the return statement)
};

export default CSMDemo;
