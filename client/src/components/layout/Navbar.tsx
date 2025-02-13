import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  FileText,
  Mail,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/career", label: "Career", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: FolderGit2 },
  { path: "/blog", label: "Blog", icon: FileText },
  { path: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full z-50 bg-background/30 backdrop-blur-xl border-b border-border/30 supports-[backdrop-filter]:bg-background/20"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 cursor-pointer"
          >
            Portfolio
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link key={path} href={path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={location === path ? "default" : "ghost"}
                  className="relative overflow-hidden group px-4"
                >
                  <Icon className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {label}
                  {location === path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </Button>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="mobile-menu absolute top-20 left-0 right-0 bg-background/30 backdrop-blur-xl border-b border-border/30 md:hidden overflow-hidden"
          >
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", bounce: 0 }}
              className="container mx-auto px-4 py-4 flex flex-col space-y-2"
            >
              {navItems.map(({ path, label, icon: Icon }, index) => (
                <Link key={path} href={path}>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant={location === path ? "default" : "ghost"}
                      className="w-full justify-start group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      {label}
                    </Button>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
