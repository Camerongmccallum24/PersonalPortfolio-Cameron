import { Switch, Route, useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Welcome } from "@/components/sections/Welcome";
import { useEffect } from "react";
import Home from "@/pages/Home";
import LandingPage from "@/pages/LandingPage";
import About from "@/pages/About";
import Career from "@/pages/Career";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Demo from "@/pages/Demo";
import CaseStudyGPTShowcase from "@/pages/CaseStudyGPTShowcase";
import CaseStudyPortal from "@/pages/CaseStudyPortal";
import CaseStudyAutomator from "@/pages/CaseStudyAutomator";
import CSMDemo from "@/components/csm-demo";
import CaseStudyAITools from "@/pages/CaseStudyAITools";
import { AnimatePresence } from "framer-motion";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import CookiePolicy from "@/pages/CookiePolicy";
import DemoApp from "@/pages/DemoApp";

function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Welcome />
      <Navbar />
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/Demo" component={Demo} />
          <Route path="/case-study/ai-tools-directory" component={CaseStudyAITools} />
          <Route path="/case-study/customer-success-gpt-showcase" component={CaseStudyGPTShowcase} />
          <Route path="/case-study/customer-success-portal" component={CaseStudyPortal} />
          <Route path="/case-study/customer-success-automator" component={CaseStudyAutomator} />
          <Route path="/csm-demo" component={CSMDemo} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms" component={Terms} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route path="/DemoApp" component={DemoApp} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
