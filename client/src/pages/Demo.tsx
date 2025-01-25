import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      customerName: formData.get('customerName'),
      customerGoals: formData.get('customerGoals'),
      customerChallenges: formData.get('customerChallenges'),
    };

    try {
      const response = await fetch('/api/demo/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to generate recommendations');
      }

      const result = await response.json();
      setResult(result);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <Helmet>
        <title>Interactive Demo | CSM Recommendation Engine</title>
        <meta 
          name="description" 
          content="Experience our AI-powered Customer Success Management Recommendation Engine in action" 
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            Interactive Demo
          </h1>
          <p className="text-lg text-muted-foreground">
            Experience our AI-powered Customer Success Management tool in action. 
            This demo showcases how intelligent recommendations can enhance your customer success strategies.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">CSM Recommendation Engine</h2>
            <p className="text-muted-foreground">
              Enter customer details below to generate AI-powered recommendations for optimizing customer success.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Customer Name</label>
                <Input 
                  name="customerName"
                  placeholder="Enter customer name" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Customer Goals</label>
                <Textarea 
                  name="customerGoals"
                  placeholder="What are the customer's primary objectives? (e.g., increase adoption, improve retention)" 
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Current Challenges</label>
                <Textarea 
                  name="customerChallenges"
                  placeholder="What challenges is the customer facing? (e.g., low engagement, onboarding issues)" 
                  required
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
                    Generating Recommendations...
                  </>
                ) : (
                  'Generate Recommendations'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{result.summary}</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Sentiment Analysis</h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                      ${result.sentiment === 'Positive' ? 'bg-green-100 text-green-800' :
                        result.sentiment === 'Opportunity' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'}`}
                    >
                      {result.sentiment}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                    <ul className="space-y-2">
                      {result.recommendations.map((recommendation: string, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            {index + 1}
                          </span>
                          <span>{recommendation}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}