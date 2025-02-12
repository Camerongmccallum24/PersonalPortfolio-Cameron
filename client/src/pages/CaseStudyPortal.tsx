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
              <Button size="lg" className="gap-2">View Live Demo <ArrowUpRight className="h-4 w-4" /></Button>
              <Button size="lg" variant="secondary" className="gap-2"> <FileDown className="h-4 w-4" /> Download PDF </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-[700px] mx-auto p-2 rounded-xl bg-primary/10 backdrop-blur-lg">
              {['overview', 'challenge', 'solution', 'results'].map((tab) => (
                <TabsTrigger key={tab} value={tab} className="hover:scale-105 transition-transform text-sm md:text-base bg-background/80 rounded-lg py-2 capitalize">{tab}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">See It In Action</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5">
            <img 
              src="/images/Case-Studys/CS-Portal/Benefits_Customer_Success_Portal.png"
              alt="Demo Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

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
