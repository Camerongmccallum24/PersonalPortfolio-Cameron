import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  Brain, 
  LineChart, 
  Users, 
  Smartphone,
  FileDown,
  ArrowUpRight,
  TrendingDown,
  ArrowUpCircle,
  Users2,
  ArrowUp,
  CheckCircle,
  Clock,
  Target,
  Award,
  Play,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function CaseStudyPortal() {
  const challenges = [
    {
      icon: Clock,
      title: "Manual Processes",
      description: "Customer success managers spent 60% of their time on repetitive tasks, limiting strategic initiatives."
    },
    {
      icon: Target,
      title: "Data Silos",
      description: "Critical customer information was scattered across multiple platforms, causing delays and inconsistencies."
    },
    {
      icon: Users,
      title: "Limited Visibility",
      description: "Lack of real-time insights made it difficult to identify at-risk customers and growth opportunities."
    }
  ];

  const solution = {
    overview: "Developed a comprehensive AI-powered platform that centralizes customer data, automates workflows, and provides actionable insights.",
    implementation: [
      "12-week agile development cycle",
      "Seamless integration with existing CRM systems",
      "Comprehensive user training program",
      "Phased rollout across 500+ clients"
    ]
  };

  const renderChallengeCards = () => {
    return challenges.map((challenge, index) => (
      <div key={index} className="p-8 rounded-xl bg-primary/5 space-y-6 transition-all hover:bg-primary/10">
        <challenge.icon className="h-10 w-10 text-primary" />
        <h3 className="text-xl font-semibold">{challenge.title}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">{challenge.description}</p>
      </div>
    ));
  };

  const renderImplementationSteps = () => {
    return solution.implementation.map((step, index) => (
      <div key={index} className="flex items-center gap-4 p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-lg">
          {index + 1}
        </div>
        <span className="text-muted-foreground">{step}</span>
      </div>
    ));
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center space-y-6"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4">
              Case Study
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
              Customer Success Portal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we helped a leading SaaS company reduce churn by 40% and improve customer satisfaction by 85%
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2">
                View Live Demo <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary" className="gap-2">
                <FileDown className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px] mx-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="challenge">Challenge</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              <Card className="glassmorphism">
                <CardHeader>
                  <h2 className="text-3xl font-bold tracking-tight">Project Overview</h2>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-muted-foreground">
                    The Customer Success Portal is an AI-powered platform designed to centralize critical information,
                    automate workflows, and deliver actionable insights. It empowers Customer Success Managers to
                    enhance customer experiences, strengthen relationships, and drive business growth.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="challenge" className="space-y-12">
              <Card className="glassmorphism">
                <CardHeader>
                  <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    {renderChallengeCards()}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-12">
              <Card className="glassmorphism">
                <CardHeader>
                  <h2 className="text-3xl font-bold tracking-tight">Our Solution</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {renderImplementationSteps()}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-12">
              <Card className="glassmorphism">
                <CardHeader>
                  <h2 className="text-3xl font-bold tracking-tight">Impact & Results</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
                      <ul className="space-y-3">
                        <li><CheckCircle className="h-4 w-4 text-primary" /> 40% Reduction in churn</li>
                        <li><CheckCircle className="h-4 w-4 text-primary" /> 85% CSAT improvement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </motion.main>
  );
}
