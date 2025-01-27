import { Link } from "wouter";
import { Github, Linkedin, Youtube } from "lucide-react";
import { IconBrandX, IconBrandGoogleFilled } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 AI Strategy & Customer Success Portfolio.
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://github.com/camerongmccallum24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon github hover:text-inherit"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://linkedin.com/in/cameron-g-mccallum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon linkedin hover:text-inherit"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://g.dev/cameron-g-mccallum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon google hover:text-inherit"
              >
                <IconBrandGoogleFilled className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://x.com/CamGMcCallum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon x hover:text-inherit"
              >
                <IconBrandX className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="http://www.youtube.com/@cameronmccallum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon youtube hover:text-inherit"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
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