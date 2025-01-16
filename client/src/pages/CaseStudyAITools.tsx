
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, LineChart, Users, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CaseStudyAITools() {
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
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">AI Tools Directory</h1>
          <p className="text-xl text-muted-foreground mb-8">A Curated Platform for Customer Success AI Tools</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {["UI/UX Design", "Web Development", "HTML/CSS", "Tailwind CSS"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <img 
            src="/images/ai-tools-directory.jpg" 
            alt="AI Tools Directory Preview" 
            className="w-full rounded-lg shadow-xl mb-8"
          />
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground">
              The AI Tools Directory is a comprehensive web platform designed to help Customer Success Managers 
              discover, evaluate, and compare AI-powered solutions for their teams. In an era where AI tools 
              are rapidly evolving, this platform serves as a centralized hub for CS professionals to make 
              informed decisions about their tech stack.
            </p>
          </div>
        </div>

        {/* The Challenge */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Time-Consuming Research</h3>
              <p className="text-muted-foreground">CS teams spent hours researching across multiple vendors</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <LineChart className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Feature Comparison</h3>
              <p className="text-muted-foreground">Difficulty comparing features and pricing across tools</p>
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
                title: "Intuitive Search",
                description: "Advanced filtering by use case, pricing, and integrations"
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Comparison Tools",
                description: "Side-by-side feature analysis and pricing comparison"
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Responsive Design",
                description: "Fully functional across all device sizes"
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
                { metric: "60%", description: "Reduction in research time" },
                { metric: "95%", description: "User satisfaction rate" },
                { metric: "1000+", description: "Active users" },
                { metric: "50+", description: "Tools listed" }
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
                src="/images/ai-tools-directory.jpg" 
                alt="Technical Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Future Enhancements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "API Integration",
                description: "Real-time feature updates from tool providers"
              },
              {
                title: "Community Features",
                description: "User reviews and discussions"
              },
              {
                title: "Personalization",
                description: "AI-powered tool recommendations"
              },
              {
                title: "Analytics Dashboard",
                description: "Tool adoption and usage trends"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
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
