
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, LineChart, Users, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CaseStudyGPTShowcase() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">GPT Showcase</h1>
          <p className="text-xl text-muted-foreground mb-8">Revolutionizing Customer Success with AI-Powered Solutions</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {["React", "TypeScript", "GPT-4", "Customer Success", "AI"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <img 
            src="/images/customer-success-gpt.jpg" 
            alt="GPT Showcase Preview" 
            className="w-full rounded-lg shadow-xl mb-8"
          />
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground">
              The Customer Success GPT Showcase demonstrates the capabilities of custom GPTs designed 
              specifically for Customer Success Managers. This platform integrates advanced AI features 
              including sentiment analysis, churn prediction, and intelligent analytics to enhance 
              client retention and engagement strategies.
            </p>
          </div>
        </div>

        {/* The Challenge */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manual Analysis</h3>
              <p className="text-muted-foreground">CSMs spent significant time analyzing customer data manually</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <LineChart className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Predictive Insights</h3>
              <p className="text-muted-foreground">Lack of AI-powered predictive capabilities for customer behavior</p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Solution</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Sentiment Analysis",
                description: "Real-time analysis of customer communication"
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Churn Prediction",
                description: "AI-powered risk assessment and early warning system"
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Smart Analytics",
                description: "Advanced metrics and performance tracking"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Results and Impact</h2>
          <div className="bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "40%", description: "Response time reduction" },
                { metric: "35%", description: "Accuracy improvement" },
                { metric: "30%", description: "User satisfaction increase" },
                { metric: "50%", description: "Efficiency gain" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                  <div className="text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Technology Stack</h3>
              <ul className="space-y-3">
                {[
                  "GPT-4 API Integration",
                  "React & TypeScript",
                  "Real-time data processing",
                  "Machine Learning models",
                  "Natural Language Processing"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg overflow-hidden">
              <img 
                src="/images/Case-Studys/CS-GPTs/GPT_Structure_1.png" 
                alt="Technical Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            <FileDown className="mr-2 h-4 w-4" />
            Download Full Case Study
          </Button>
        </div>
      </div>
    </motion.main>
  );
}
