import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialBarProps {
  className?: string;
}

const socials = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/cameron-g-mccallum",
    glowColor: "rgba(0, 119, 181, 0.4)" // LinkedIn brand color
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/camerongmccallum24",
    glowColor: "rgba(110, 84, 148, 0.4)" // GitHub brand color
  }
] as const;

export function SocialBar({ className }: SocialBarProps) {
  return (
    <div className={cn("flex justify-center gap-8", className)}>
      {socials.map(({ label, icon: Icon, href, glowColor }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          className={cn(
            "h-11 w-11 rounded-full relative",
            "transition-all duration-200 ease-in-out",
            "hover:bg-transparent hover:scale-110",
            "before:absolute before:inset-0 before:rounded-full",
            "before:transition-all before:duration-200",
            "before:opacity-0 hover:before:opacity-100",
            "before:shadow-[0_0_12px_2px_var(--glow-color)]"
          )}
          style={{ "--glow-color": glowColor } as React.CSSProperties}
          asChild
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow on ${label}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
}