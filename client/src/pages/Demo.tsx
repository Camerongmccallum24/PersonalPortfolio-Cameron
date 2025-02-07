
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Target, AlertCircle, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";

export default function EnhancedDemo() {
  const [recommendations, setRecommendations] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setRecommendations([
        "Schedule bi-weekly check-ins to track progress against stated objectives",
        "Create a custom adoption dashboard to monitor key metrics",
        "Develop targeted training sessions for power users"
      ]);
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Generated recommendations based on your input.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <div className="flex justify-center">
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
              CSM Recommendation Engine
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your customer success strategies with AI-powered recommendations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2 text-primary">
                      <Target className="h-4 w-4" />
                      Customer Goals
                    </label>
                    <Textarea 
                      name="customerGoals"
                      placeholder="What are the customer's primary objectives? (e.g., increase adoption, improve retention)" 
                      required
                      className="focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2 text-primary">
                      <AlertCircle className="h-4 w-4" />
                      Current Challenges
                    </label>
                    <Textarea 
                      name="customerChallenges"
                      placeholder="What challenges is the customer facing? (e.g., low engagement, onboarding issues)" 
                      required
                      className="focus:ring-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing Input...
                      </div>
                    ) : (
                      'Generate Recommendations'
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
              <Card className="glass overflow-hidden">
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
                        className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          {index + 1}
                        </span>
                        <p className="text-foreground">{recommendation}</p>
                      </motion.div>
                    ))}
                  </div>

                  <Alert className="mt-6 bg-primary/5 border-primary/20">
                    <AlertDescription className="text-sm text-muted-foreground">
                      These recommendations are generated based on your input. Consider them as starting points for your customer success strategy.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
