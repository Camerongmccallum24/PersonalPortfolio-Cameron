import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { ParticlesBackground } from "@/components/sections/ParticlesBackground";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 relative min-h-screen"
    >
      <ParticlesBackground className="opacity-50" />
      <Hero />
    </motion.main>
  );
}