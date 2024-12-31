
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CaseStudy() {
  const metrics = [
    { value: "↓40%", label: "Reduction in Churn Rate" },
    { value: "↑35%", label: "Increase in Customer Satisfaction" },
    { value: "↑30%", label: "Boost in Customer Lifetime Value" },
    { value: "↑50%", label: "Team Productivity Improvement" }
  ];

  const features = [
    {
      title: "Centralized Knowledge Base",
      description: "Single source of truth for all client-related information.",
      items: [
        "Usage metrics tracking",
        "Support ticket management",
        "Training materials hub",
        "Onboarding progress monitoring"
      ]
    },
    {
      title: "AI-Powered Insights",
      description: "Advanced analytics and predictive capabilities.",
      items: [
        "Churn risk prediction",
        "Upsell opportunity identification",
        "Real-time alerts",
        "Behavioral analysis"
      ]
    },
    {
      title: "Workflow Automation",
      description: "Streamlined processes for enhanced efficiency.",
      items: [
        "Automated follow-ups",
        "Status updates",
        "Report generation",
        "CRM integration"
      ]
    }
  ];

  const techStack = {
    Frontend: ["React", "TypeScript"],
    Backend: ["FastAPI", "PostgreSQL"],
    Cloud: ["AWS"],
    Security: ["End-to-end encryption", "Role-based access"],
    Integrations: ["Salesforce", "HubSpot", "Slack", "Microsoft Teams"]
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Customer Success Automator
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-8">
            AI-Driven Platform for Enhanced Customer Success Management
          </p>

          <img
            src="/images/customer-success-automator.jpeg"
            alt="Customer Success Automator preview"
            className="w-full rounded-lg mb-12"
          />

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="bg-card p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The GPT Showcase revolutionizes customer success by harnessing the power of advanced AI models. 
                This innovative platform provides a centralized hub for a collection of custom GPTs, each designed 
                to address specific challenges and enhance key aspects of customer success management.
              </p>
              <div>
                <h3 className="font-semibold mb-2">Impact & Value</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Increased Customer Retention through proactive risk identification</li>
                  <li>• Enhanced Customer Satisfaction with personalized experiences</li>
                  <li>• Improved Team Efficiency via task automation</li>
                  <li>• Data-Driven Decision Making powered by predictive analytics</li>
                </ul>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "By providing a centralized hub for AI-powered tools, this platform empowers businesses 
                to deliver exceptional customer experiences and drive sustainable growth."
                <footer className="mt-2 font-semibold">
                  - Project Overview
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-3">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
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
      </div>
    </motion.main>
  );
}
