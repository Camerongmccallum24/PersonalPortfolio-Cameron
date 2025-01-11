import { Switch, Route } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Welcome } from "@/components/sections/Welcome";
import Home from "@/pages/Home";
import LandingPage from "@/pages/LandingPage";
import { About } from "@/pages/About";
import Career from "@/pages/Career";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import CaseStudyGPTShowcase from "@/pages/CaseStudyGPTShowcase";
import CaseStudyPortal from "@/pages/CaseStudyPortal";
import CaseStudy from "@/pages/CaseStudy";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Welcome />
      <Navbar />
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/case-study/customer-success-gpt-showcase" component={CaseStudyGPTShowcase} />
          <Route path="/case-study/customer-success-portal" component={CaseStudyPortal} />
          <Route path="/case-study/customer-success-automator" component={CaseStudy} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;