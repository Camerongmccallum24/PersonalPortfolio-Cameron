import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const techStack = [
  {
    name: "AWS",
    logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  },
  {
    name: "Node.js",
    logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
  {
    name: "Django",
    logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
  },
  {
    name: "Express",
    logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  },
  {
    name: "MySQL",
    logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "GitHub",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  },
  {
    name: "Docker",
    logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  },
  {
    name: "Firebase",
    logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "Python",
    logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    name: "React",
    logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    name: "TypeScript",
    logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    name: "TensorFlow",
    logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
  },
  {
    name: "Kubernetes",
    logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  },
] as const;

export function TechStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-background/50 border-y border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background/50 to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <div
              className={cn(
                "flex",
                isMobile ? "animate-scroll-mobile" : "animate-scroll",
              )}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className={cn(
                    "flex-shrink-0",
                    isMobile ? "mx-4" : "mx-8",
                    "group relative",
                    "transition-transform duration-300 hover:scale-115",
                  )}
                >
                  <div
                    className={cn(
                      "relative",
                      isMobile ? "w-12 h-12" : "w-16 h-16",
                    )}
                  >
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/${isMobile ? "48" : "64"}?text=${tech.name.charAt(0)}`;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-xs text-muted-foreground">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
