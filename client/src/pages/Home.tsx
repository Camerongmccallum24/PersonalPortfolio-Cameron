import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <Hero />
    </motion.main>
  );
}
