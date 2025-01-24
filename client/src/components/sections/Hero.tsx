import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, ExternalLink, FileDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background py-20 md:py-32">
      {/* SEO-friendly hidden heading */}
      <h1 className="sr-only">Cameron McCallum - AI & Customer Success Innovation Leader</h1>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                Cameron McCallum
              </span>
            </motion.h2>

            <motion.h3 
              className="text-2xl md:text-3xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              AI & Customer Success Innovation Leader
            </motion.h3>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transforming Customer Success through AI-Powered Solutions and Data-Driven Strategies
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Start Conversation
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <ExternalLink className="w-5 h-5" />
                View Portfolio
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <FileDown className="w-5 h-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex-1 max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-full opacity-75 blur-sm"></div>

              {/* Image */}
              <img
                src="/images/Profile_Picture.png"
                alt="Cameron McCallum - AI Strategy Consultant"
                className="relative rounded-full w-full h-full object-cover border-4 border-background"
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}