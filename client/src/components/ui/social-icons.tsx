
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

interface SocialIconsProps {
  className?: string;
}

export function SocialIcons({ className = "" }: SocialIconsProps) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a href="https://linkedin.com/in/cameron-g-mccallum" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-500 transition-colors" />
      </a>
      <a href="https://github.com/camerongmccallum24" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-800 text-2xl hover:text-gray-600 transition-colors" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 text-2xl hover:text-blue-300 transition-colors" />
      </a>
    </div>
  );
}
