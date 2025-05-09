import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  description: string;
  url: string;
}

export function ShareButtons({ title, description, url }: ShareButtonsProps) {
  const { toast } = useToast();
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The project link has been copied to your clipboard."
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually.",
        variant: "destructive"
      });
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const socialButtons = [
    {
      name: "Twitter",
      icon: Twitter,
      url: shareUrls.twitter,
      hoverClass: "hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.5)]"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: shareUrls.linkedin,
      hoverClass: "hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.5)]"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: shareUrls.facebook,
      hoverClass: "hover:bg-[#4267B2]/20 hover:text-[#4267B2] hover:shadow-[0_0_15px_rgba(66,103,178,0.5)]"
    }
  ];

  return (
    <motion.div 
      className="flex items-center gap-1.5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {socialButtons.map((button) => (
        <motion.div
          key={button.name}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            variant="ghost"
            size="icon"
            className={`bg-background/80 backdrop-blur-sm transition-all duration-300 border border-border/50 ${button.hoverClass}`}
            onClick={() => window.open(button.url, '_blank')}
          >
            <button.icon className="h-4 w-4" />
          </Button>
        </motion.div>
      ))}
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Button
          variant="ghost"
          size="icon"
          className="bg-background/80 backdrop-blur-sm transition-all duration-300 border border-border/50 hover:bg-primary/20 hover:text-primary hover:shadow-[0_0_15px_var(--primary)]"
          onClick={copyToClipboard}
        >
          <Link2 className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}