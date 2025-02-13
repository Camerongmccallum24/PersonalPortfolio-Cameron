import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { Tooltip } from "@/components/ui/tooltip";

export default function EnhancedDemo() {
  const [recommendations, setRecommendations] = useState([]);
  const [customerGoals, setCustomerGoals] = useState('');
  const [customerChallenges, setCustomerChallenges] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "customerGoals") {
      setCustomerGoals(value);
    } else if (name === "customerChallenges") {
      setCustomerChallenges(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call with a timeout
    setTimeout(() => {
      setRecommendations([
        "Schedule bi-weekly check-ins to track progress against stated objectives",
        "Create a custom adoption dashboard to monitor key metrics",
        "Develop targeted training sessions for power users",
      ]);
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Generated recommendations based on your input.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background/50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            CSM Recommendation Engine
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your customer success strategies with AI-powered insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass border border-primary/30 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-primary flex items-center gap-2">
                    Customer Goals
                    <Tooltip content="Describe the key objectives of the customer, such as increasing adoption or reducing churn." />
                  </label>
                  <Textarea
                    name="customerGoals"
                    value={customerGoals}
                    onChange={handleInputChange}
                    placeholder="What are the customer's primary objectives?"
                    required
                    className="focus:ring-primary focus:border-primary bg-white/20 backdrop-blur-lg text-white border border-white/30 rounded-xl p-3"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-primary flex items-center gap-2">
                    Current Challenges
                    <Tooltip content="Identify current customer pain points, such as engagement or onboarding struggles." />
                  </label>
                  <Textarea
                    name="customerChallenges"
                    value={customerChallenges}
                    onChange={handleInputChange}
                    placeholder="What challenges is the customer facing?"
                    required
                    className="focus:ring-primary focus:border-primary bg-white/20 backdrop-blur-lg text-white border border-white/30 rounded-xl p-3"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-primary-foreground shadow-lg rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing Input...
                    </div>
                  ) : (
                    "Generate Recommendations"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass border border-primary/30 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                    Strategic Recommendations
                  </h2>
                </div>

                <div className="space-y-4">
                  {recommendations.map((recommendation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-white">{recommendation}</p>
                    </motion.div>
                  ))}
                </div>

                <Alert className="mt-6 bg-primary/10 border-primary/20">
                  <AlertDescription className="text-sm text-muted-foreground">
                    These recommendations are AI-generated based on your input. Use them as actionable insights.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}