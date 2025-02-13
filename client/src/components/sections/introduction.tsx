
import { FileDown, Linkedin } from 'lucide-react';
import { Button } from '../shared/Button';

export const Introduction = () => {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="space-y-8">
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 text-lg leading-relaxed">
          With over a decade of experience in Customer Success and AI development, 
          I specialize in bridging technology and business needs to drive client 
          retention and satisfaction.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          My unique blend of technical expertise and business acumen allows me to 
          develop AI-driven solutions that deliver measurable results for organizations.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm passionate about leveraging emerging technologies to solve complex business 
          challenges and create impactful solutions that drive growth and innovation.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button 
          variant="outline" 
          size="lg"
          onClick={handleDownloadResume}
        >
          <FileDown className="w-4 h-4 mr-2" />
          My CV 
        </Button>
        <a
          href="https://linkedin.com/in/cameron-g-mccallum"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="LinkedIn"
          style={{
            background: '#0077B515',
            boxShadow: '0 0 12px #0077B566'
          }}
        >
          <Linkedin 
            className="w-5 h-5 transition-transform group-hover:scale-110" 
            style={{ color: '#0077B5' }}
          />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-6 pt-4">
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h4 className="text-cyan-400 font-medium mb-2">Experience</h4>
          <p className="text-gray-300">10+ years in Customer Success</p>
        </div>
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h4 className="text-cyan-400 font-medium mb-2">Projects</h4>
          <p className="text-gray-300">50+ successful implementations</p>
        </div>
      </div>
    </div>
  );
};
