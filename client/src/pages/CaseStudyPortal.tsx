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

// Modal component to show selected image
const Modal = ({ isOpen, imagePath, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <img src={imagePath} alt="Selected" className="w-full h-auto" />
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
      </div>
    </div>
  );
};

export default function CaseStudyPortal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
    setModalOpen(prev => !prev);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary">Case Study</div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
              Customer Success Portal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we helped a leading SaaS company reduce churn by 40% and improve customer satisfaction by 85%
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2" aria-label="View live demo">View Live Demo <ArrowUpRight className="h-4 w-4" /></Button>
              <Button size="lg" variant="secondary" className="gap-2" aria-label="Download PDF"><FileDown className="h-4 w-4" /> Download PDF </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for displaying selected images */}
      <Modal isOpen={isModalOpen} imagePath={selectedImage} onClose={() => setModalOpen(false)} />

      {/* Tabs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-[700px] mx-auto p-2 rounded-xl bg-primary/10 backdrop-blur-lg">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Brain className="h-4 w-4" /> Overview
              </TabsTrigger>
              <TabsTrigger value="challenge" className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4" /> Challenge
              </TabsTrigger>
              <TabsTrigger value="solution" className="flex items-center gap-2">
                <ArrowUpCircle className="h-4 w-4" /> Solution
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center gap-2">
                <Award className="h-4 w-4" /> Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <h3 className="text-xl font-bold mb-4">Overview</h3>
              <p className="text-lg mb-4">The Customer Success Portal is a cutting-edge, AI-powered platform designed to revolutionize how businesses engage with their customers. By centralizing critical information, automating key processes, and providing actionable insights, this innovative solution empowers Customer Success Managers (CSMs) to deliver exceptional experiences, foster long-term customer relationships, and drive significant business growth.</p>
              <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc pl-6">
                <li><strong>Centralized Knowledge Base</strong>: Consolidates all client-related data in a single location.</li>
                <li><strong>AI-Powered Insights & Predictions</strong>: Leverages machine learning to predict churn risks and identify opportunities.</li>
                <li><strong>Streamlined Workflows & Automation</strong>: Automates repetitive tasks and integrates with CRM systems.</li>
                <li><strong>Enhanced Collaboration & Communication</strong>: Facilitates seamless communication between CSMs, clients, and stakeholders.</li>
                <li><strong>Intuitive User Interface & Customizable Dashboards</strong>: Provides customizable dashboards with real-time KPIs.</li>
              </ul>
            </TabsContent>

            <TabsContent value="challenge">
              <h3 className="text-xl font-bold mb-4">Challenge</h3>
              <p className="text-lg mb-4">Businesses face significant challenges in maintaining customer engagement and reducing churn. Traditional CRM systems often fail to consolidate critical customer data, making it difficult for Customer Success Managers (CSMs) to track customer health and proactively address potential issues.</p>
              <p className="text-lg mb-4">The absence of AI-driven insights and predictive analytics leaves CSMs reactive rather than proactive, resulting in missed opportunities to prevent churn or identify upsell possibilities. Additionally, manual workflows and data fragmentation reduce team productivity, and ineffective communication with clients can lead to misunderstandings and inefficiencies.</p>
            </TabsContent>

            <TabsContent value="solution">
              <h3 className="text-xl font-bold mb-4">Solution</h3>
              <p className="text-lg mb-4">The Customer Success Portal offers a unified solution to these challenges by leveraging AI and automation to empower Customer Success Managers with the tools they need to deliver exceptional customer experiences. By centralizing data, automating tasks, and providing predictive insights, the platform allows CSMs to be proactive, reduce churn, and drive customer satisfaction.</p>
              <h4 className="text-lg font-semibold mb-2">Key Solutions:</h4>
              <ul className="list-disc pl-6">
                <li><strong>Centralized Data Hub</strong>: All customer information, from meeting notes to support tickets, is available in one place.</li>
                <li><strong>AI-Powered Predictions</strong>: Advanced algorithms predict customer behavior, helping CSMs take action before issues arise.</li>
                <li><strong>Automated Workflows</strong>: Routine tasks such as follow-ups, status updates, and reporting are automated, boosting productivity.</li>
                <li><strong>Real-Time Collaboration</strong>: Secure messaging and document sharing allow for seamless collaboration across teams.</li>
              </ul>
            </TabsContent>

            <TabsContent value="results">
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p className="text-lg mb-4">The Customer Success Portal has significantly improved business outcomes for its users, helping reduce churn, increase customer satisfaction, and drive revenue growth.</p>
              <h4 className="text-lg font-semibold mb-2">Impact & Value:</h4>
              <ul className="list-disc pl-6">
                <li><strong>Reduces churn rates</strong> through predictive analytics and proactive intervention.</li>
                <li><strong>Increases customer satisfaction</strong> with personalized experiences and faster response times.</li>
                <li><strong>Boosts customer lifetime value</strong> by identifying upsell and cross-sell opportunities.</li>
                <li><strong>Enhances productivity</strong> by automating routine tasks and allowing CSMs to focus on high-value activities.</li>
                <li><strong>Supports data-driven decisions</strong> with comprehensive reporting and analytics.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Demo Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 text-center"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">See It In Action</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5">
            <img 
              src="/images/Case-Studys/CS-Portal/Benefits_Customer_Success_Portal.png"
              alt="Demo Preview"
              className="w-full h-full object-cover"
              onClick={() => handleImageClick('/images/Case-Studys/CS-Portal/Benefits_Customer_Success_Portal.png')} 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="gap-2" aria-label="Watch demo video">
                <Play className="h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-primary/10 backdrop-blur-lg rounded-xl mx-4">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Success?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Schedule a demo to see how our platform can help you deliver exceptional customer experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">Schedule Demo</Button>
            <Button size="lg" variant="secondary" className="gap-2">Contact Sales</Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
