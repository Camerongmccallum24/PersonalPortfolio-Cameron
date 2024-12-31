import { Switch, Route } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Welcome } from "@/components/sections/Welcome";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Career from "@/pages/Career";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
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
          <Route path="/case-study/:id" component={CaseStudy} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;