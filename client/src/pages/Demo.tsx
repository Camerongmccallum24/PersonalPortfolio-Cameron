import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Mock recommendations for development preview
const mockRecommendations = [
  "Schedule quarterly business reviews to align on goals",
  "Create personalized success plans based on customer objectives",
  "Set up regular check-ins for continuous feedback",
  "Implement automated health scoring system",
  "Develop targeted training programs"
];

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setRecommendations(mockRecommendations);
      setLoading(false);
      toast({
        title: "Success",
        description: "Generated recommendations based on your input.",
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            CSM Recommendation Engine
          </h1>
          <p className="text-lg text-muted-foreground">
            Get AI-powered recommendations to enhance your customer success strategies.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Customer Goals</label>
                <Textarea 
                  name="customerGoals"
                  placeholder="What are the customer's primary objectives? (e.g., increase adoption, improve retention)" 
                  required
                  className="h-24"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Current Challenges</label>
                <Textarea 
                  name="customerChallenges"
                  placeholder="What challenges is the customer facing? (e.g., low engagement, onboarding issues)" 
                  required
                  className="h-24"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Get Recommendations'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {recommendations.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
              <ul className="space-y-3">
                {recommendations.map((recommendation, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}