
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
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function CaseStudyPortal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
    setModalOpen(prev => !prev);
  };

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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
          <div className="relative z-10">
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
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">CSAT Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clients Onboarded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20%</div>
              <div className="text-sm text-muted-foreground">Revenue Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px] mx-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="challenge">Challenge</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Project Overview</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The Customer Success Portal is an AI-powered platform designed to centralize critical information,
                    automate workflows, and deliver actionable insights. It empowers Customer Success Managers to
                    enhance customer experiences, strengthen relationships, and drive business growth.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 pt-8">
                    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/5">
                      <Clock className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">Project Duration</h3>
                      <p className="text-sm text-muted-foreground">12 Weeks</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/5">
                      <Users className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">Team Size</h3>
                      <p className="text-sm text-muted-foreground">8 Members</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/5">
                      <Target className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">Industry</h3>
                      <p className="text-sm text-muted-foreground">SaaS / Technology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Client Background</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      A leading enterprise SaaS provider serving 500+ global clients with a focus on marketing automation.
                      Prior to our solution, they faced significant challenges in scaling their customer success operations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Project Goals</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {["Reduce customer churn rate", "Improve customer satisfaction", "Automate manual processes", "Enable data-driven decisions"].map((goal, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="challenge" className="space-y-8">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Key Challenges</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {challenges.map((challenge, index) => (
                      <div key={index} className="p-6 rounded-lg bg-primary/5 space-y-4">
                        <challenge.icon className="h-8 w-8 text-primary" />
                        <h3 className="font-semibold">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-8">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Our Solution</h2>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-muted-foreground">{solution.overview}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Key Features</h3>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-primary/5">
                          <Brain className="h-6 w-6 text-primary mb-2" />
                          <h4 className="font-semibold mb-2">AI-Powered Insights</h4>
                          <p className="text-sm text-muted-foreground">
                            Predictive analytics for churn prevention and growth opportunities
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/5">
                          <LineChart className="h-6 w-6 text-primary mb-2" />
                          <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                          <p className="text-sm text-muted-foreground">
                            Customizable dashboards with actionable metrics
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/5">
                          <Users className="h-6 w-6 text-primary mb-2" />
                          <h4 className="font-semibold mb-2">Collaboration Tools</h4>
                          <p className="text-sm text-muted-foreground">
                            Integrated communication and task management
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Implementation Process</h3>
                      <ul className="space-y-4">
                        {solution.implementation.map((step, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                              {index + 1}
                            </div>
                            <span className="text-muted-foreground">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <div className="py-8">
                <h3 className="text-xl font-semibold mb-8 text-center">Technology Stack</h3>
                <div className="flex justify-center gap-16 flex-wrap">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-16 h-16" alt="React" title="React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-16 h-16" alt="TypeScript" title="TypeScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-16 h-16" alt="Node.js" title="Node.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-16 h-16" alt="PostgreSQL" title="PostgreSQL" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" className="w-16 h-16" alt="AWS" title="AWS" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-8">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Impact & Results</h2>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                          <TrendingDown className="h-8 w-8 text-green-500" />
                          <div>
                            <div className="text-2xl font-bold">40% Reduction</div>
                            <div className="text-sm text-muted-foreground">in customer churn rate</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                          <ArrowUpCircle className="h-8 w-8 text-blue-500" />
                          <div>
                            <div className="text-2xl font-bold">85% Improvement</div>
                            <div className="text-sm text-muted-foreground">in customer satisfaction</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                          <Users2 className="h-8 w-8 text-purple-500" />
                          <div>
                            <div className="text-2xl font-bold">500+ Clients</div>
                            <div className="text-sm text-muted-foreground">successfully onboarded</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                          <ArrowUp className="h-8 w-8 text-yellow-500" />
                          <div>
                            <div className="text-2xl font-bold">20% Growth</div>
                            <div className="text-sm text-muted-foreground">in revenue</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Customer Testimonials</h3>
                      <div className="space-y-4">
                        <Card>
                          <CardContent className="pt-6">
                            <p className="text-muted-foreground italic">
                              "The Customer Success Portal has transformed how we manage client relationships. The AI-driven insights have been game-changing for our team."
                            </p>
                            <div className="mt-4">
                              <div className="font-semibold">Sarah Johnson</div>
                              <div className="text-sm text-muted-foreground">Head of Customer Success</div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <p className="text-muted-foreground italic">
                              "We've seen a dramatic improvement in our team's efficiency and client satisfaction since implementing this solution."
                            </p>
                            <div className="mt-4">
                              <div className="font-semibold">Michael Chen</div>
                              <div className="text-sm text-muted-foreground">Customer Success Manager</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
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
