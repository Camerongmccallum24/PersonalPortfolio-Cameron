import { IframeDemo } from "@/components/ui/iframe-demo";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Demo() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <Helmet>
        <title>Demo | CSM Recommendation Engine</title>
        <meta 
          name="description" 
          content="Interactive demo of the Customer Success Management Recommendation Engine" 
        />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
      >
        Demo Showcase
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-muted-foreground mb-12"
      >
        Experience our CSM Recommendation Engine in action. This demo showcases how AI-powered insights can enhance customer success management.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <IframeDemo
          url="https://democsa.free.beeceptor.com"
          title="CSM Recommendation Engine"
          defaultHeight={800}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
}