import React from 'react';
import { Share2, BarChart2, Link2, Maximize2, Copy, Info } from 'lucide-react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const ProjectCard = ({ title, description, technologies, image }: ProjectCardProps) => {
  return (
    <div className="bg-[#0B0F17] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors duration-300 group">
      <div className="relative">
        <img 
          src={image}
          alt={`${title} Preview`}
          className="w-full h-56 object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-black/20 backdrop-blur-sm rounded-lg hover:bg-black/40 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 bg-black/20 backdrop-blur-sm rounded-lg hover:bg-black/40 transition-colors">
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;