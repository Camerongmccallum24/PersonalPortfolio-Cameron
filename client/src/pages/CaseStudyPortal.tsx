
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CaseStudyPortal() {
  const metrics = [
    { value: "95%", label: "Client Satisfaction" },
    { value: "↑40%", label: "Team Efficiency" },
    { value: "↓30%", label: "Support Time" },
    { value: "↑60%", label: "Data Accuracy" }
  ];

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
            Customer Success Portal
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-8">
            A Comprehensive Platform for Enhanced Customer Success Management
          </p>
          
          <img
            src="/images/customer-succes-portal.jpg"
            alt="Customer Success Portal preview"
            className="w-full rounded-lg mb-12"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
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
