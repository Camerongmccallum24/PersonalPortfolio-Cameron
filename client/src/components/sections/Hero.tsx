import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, ExternalLink, FileDown } from "lucide-react";
import { Helmet } from "react-helmet";

export function Hero() {
  return (
    <>
      <Helmet>
        <title>Cameron McCallum - AI & Customer Success Innovation Leader</title>
        <meta 
          name="description" 
          content="Transforming Customer Success through AI-Powered Solutions and Data-Driven Strategies. Expert in customer success automation and AI integration."
        />
        <meta name="keywords" content="AI Strategy, Customer Success, Innovation, Data-Driven Solutions, Cameron McCallum" />
      </Helmet>

      <section className="relative min-h-[calc(100vh-4rem)] bg-background py-20 md:py-32 overflow-hidden">
        {/* SEO-friendly hidden heading */}
        <h1 className="sr-only">Cameron McCallum - AI & Customer Success Innovation Leader</h1>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Content Section */}
            <motion.div 
              className="flex-1 text-left max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
                  Cameron McCallum
                </span>
              </motion.h2>

              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                AI & Customer Success Innovation Leader
              </motion.h3>

              <motion.p 
                className="text-base sm:text-lg md:text-xl text-muted-foreground/90 mb-8 max-w-2xl"
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
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                      className="gap-2 hover:scale-105 transition-all duration-300 relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/20 to-[#0072FF]/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                      <ExternalLink className="w-5 h-5" />
                    Contact Me
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="gap-2 hover:scale-105 transition-all duration-300 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/20 to-[#0072FF]/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    <ExternalLink className="w-5 h-5" />
                    View Portfolio
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 hover:scale-105 transition-all duration-300 relative group overflow-hidden"
                  asChild
                >
                  <a href="/Cameron McCallum - Customer Success Manager.pdf" download>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/20 to-[#0072FF]/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    <FileDown className="w-5 h-5" />
                    CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative flex-1 max-w-sm lg:max-w-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square">
                {/* Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-full opacity-75 blur-sm" />

                {/* Image */}
                <img
                  src="/images/Profile_Picture.png"
                  alt="Cameron McCallum - AI Strategy Consultant"
                  className="relative rounded-full w-full h-full object-cover border-4 border-background"
                  width={400}
                  height={400}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}