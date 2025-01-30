import { Link } from "wouter";
import { Github, Linkedin, Youtube } from "lucide-react";
import { IconBrandX, IconBrandGoogleFilled } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-4">  
            © 2025 AI Strategy & Customer Success Portfolio.
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a 
               href="https://github.com/camerongmccallum24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon github text-white"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://linkedin.com/in/cameron-g-mccallum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon linkedin text-blue-700"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://g.dev/cameron-g-mccallum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon google text-red-500"
              >
                <IconBrandGoogleFilled className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://x.com/CamGMcCallum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon x text-blue-400"
              >
                <IconBrandX className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="http://www.youtube.com/@cameronmccallum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon youtube text-red-600"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
          </div>
            
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/Projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}