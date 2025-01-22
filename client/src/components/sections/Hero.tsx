import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center mb-8"
          >
            <div className="w-64 h-64 relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-full"
                poster="/CM_Logo_Image (600 x 525 px).jpg"
              >
                <source src="/attached_assets/CM_Logo_Annimation.mp4" type="video/mp4" />
                {/* Fallback to static image if video fails */}
                <img 
                  src="/CM_Logo_Image (600 x 525 px).jpg"
                  alt="CM Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 rounded-full mix-blend-overlay" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cameron McCallum
          </motion.h1>

          <motion.p 
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Empowering Customer Success with AI-Driven Solutions and Data-Driven Strategies.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" asChild>
              <a href="/projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}