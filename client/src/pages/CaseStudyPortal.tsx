import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, LineChart, Users, Zap, Code, Smartphone, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
export default function CaseStudyPortal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
    setModalOpen(prev => !prev); // Toggle modal visibility
  };
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
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">Customer Success Portal</h1>
          <p className="text-xl text-muted-foreground mb-8">A Comprehensive Solution for Enhanced Customer Engagement</p>
        </div>
        {/* Project Overview */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-2/3 max-w-md">
              <div className="relative">
                <img 
                  src="/images/Case-Studys/CS-Portal/Benefits_Customer_Success_Portal.png" 
                  alt="Customer Success Portal Preview" 
                  className="w-full h-auto rounded-lg shadow-xl cursor-pointer"
                  onClick={() => handleImageClick("/images/Case-Studys/CS-Portal/Benefits_Customer_Success_Portal.png")}
                />
                <div
                  className="absolute top-0 right-0 m-2 w-6 h-6 flex items-center justify-center shadow-lg cursor-pointer"
                  title="Enlarge"
                  onClick={() => handleImageClick("/images/Case-Studys/CS-Portal/Benefits_Customer_Success_Portal.png")}
                >
                  <img 
                    src="/icons/square-arrows-icon.svg" 
                    alt="Enlarge Icon" 
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Enlarged Image */}
          {isModalOpen && (
            <div 
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 cursor-pointer" 
              onClick={() => setModalOpen(false)}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged View" 
                className="max-w-full max-h-full" 
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
              />
            </div>
          )}
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground">
              The Customer Success Portal is an AI-powered platform designed to centralize critical information, automate workflows, and deliver actionable insights. It empowers Customer Success Managers to enhance customer experiences, strengthen relationships, and drive business growth.
            </p>
          </div>
        </div>
        {/* Other sections... */}

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground">
              The Customer Success Portal is an AI-powered platform designed to centralize critical information, automate workflows, and deliver actionable insights. It empowers Customer Success Managers to enhance customer experiences, strengthen relationships, and drive business growth.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <Brain className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Centralized Knowledge Base</h3>
              <p className="text-muted-foreground">Organizes client data, meeting notes, and support documentation in a single, accessible location.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <LineChart className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-muted-foreground">Predicts churn risks and identifies upsell opportunities through advanced analytics.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enhanced Collaboration</h3>
              <p className="text-muted-foreground">Facilitates seamless communication between stakeholders and clients.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <Smartphone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Intuitive Dashboards</h3>
              <p className="text-muted-foreground">Provides real-time insights with customizable KPIs and performance metrics.</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Results and Impact</h2>
          <div className="bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "40%", description: "Reduction in churn rates" },
                { metric: "85%", description: "Customer satisfaction improvement" },
                { metric: "500+", description: "Clients onboarded successfully" },
                { metric: "20%", description: "Increase in upsell opportunities" }
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
              <h3 className="text-lg font-semibold">Frontend Stack</h3>
              <ul className="space-y-3">
                {[
                  "Modern HTML5 and CSS3",
                  "Tailwind CSS for styling",
                  "Responsive design principles",
                  "Performance optimization",
                  "Cross-browser compatibility"
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
                src="/images/Case-Studys/CS-Portal/Features_Customer_Portal.png" 
                alt="Technical Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Future Enhancements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Expand Integrations",
                description: "Add support for additional CRM and communication tools."
              },
              {
                title: "Mobile Optimization",
                description: "Enhance the platform for seamless mobile use."
              },
              {
                title: "Advanced Analytics",
                description: "Incorporate predictive models for customer behavior."
              },
              {
                title: "User Feedback",
                description: "Gather client insights to improve features and usability."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
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