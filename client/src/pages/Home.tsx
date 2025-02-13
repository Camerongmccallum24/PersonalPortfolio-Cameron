import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { ParticlesBackground } from "@/components/sections/ParticlesBackground";
import { FloatingParticles } from "@/components/sections/FloatingParticles";  // NEW: Floating Particles
import { MobileNav } from "@/components/navigation/MobileNav";  // NEW: Mobile Navigation

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 relative min-h-screen"
    >
      {/* Mobile Navigation (Hamburger Menu) */}
      <MobileNav />

      {/* Background Particles */}
      <ParticlesBackground className="opacity-50" />
      
      {/* Floating Particles for extra effect */}
      <FloatingParticles />

      {/* Main Hero Section */}
      <Hero />
    </motion.main>
  );
};

export default Home;
