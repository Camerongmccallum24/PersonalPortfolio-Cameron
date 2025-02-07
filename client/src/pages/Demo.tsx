import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Target, AlertCircle, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Target className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              CSM Recommendation Engine
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your customer success strategies with AI-powered recommendations
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    Customer Goals
                  </label>
                  <Textarea 
                    name="customerGoals"
                    placeholder="What are the customer's primary objectives? (e.g., increase adoption, improve retention)" 
                    required
                    className="h-24 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    Current Challenges
                  </label>
                  <Textarea 
                    name="customerChallenges"
                    placeholder="What challenges is the customer facing? (e.g., low engagement, onboarding issues)" 
                    required
                    className="h-24 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4"
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

          {recommendations.length > 0 && (
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-2xl font-semibold">Strategic Recommendations</h2>
                </div>

                <div className="space-y-4">
                  {recommendations.map((recommendation, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 items-start p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{recommendation}</p>
                    </div>
                  ))}
                </div>

                <Alert className="mt-6 bg-blue-50 border-blue-200">
                  <AlertDescription className="text-sm text-gray-600">
                    These recommendations are generated based on your input. Consider them as starting points for your customer success strategy.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}