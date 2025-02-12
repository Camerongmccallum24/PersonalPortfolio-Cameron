import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeatureCard = ({ icon, title, items }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <div className="text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300 text-sm">{item}</li>
      ))}
    </ul>
  </div>
);

const MetricCard = ({ percentage, label }) => (
  <div className="text-center">
    <div className="text-green-400 text-3xl font-bold mb-2">{percentage}%</div>
    <div className="text-gray-300 text-sm">{label}</div>
  </div>
);

const CaseStudyTemplate = ({ 
  title = "Customer Success Automator",
  subtitle = "AI-Driven Platform for Enhanced Customer Success Management",
  description = "An intelligent platform empowering Customer Success Managers with automated workflows, predictive analytics, and data-driven insights to improve client engagement and retention.",
  features = [],
  metrics = [],
  successStory = {},
}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        <p className="text-gray-400 max-w-3xl">{description}</p>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-12 text-center">Impact & Value</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </section>

      {/* Success Story Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Success Story: {successStory.company}</h2>

        <div className="bg-gray-800 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
          <p className="text-gray-300 mb-8">{successStory.challenge}</p>

          <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
          <p className="text-gray-300 mb-8">{successStory.solution}</p>

          <h3 className="text-xl font-semibold mb-4">Key Results</h3>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            {successStory.results.map((result, index) => (
              <li key={index} className="mb-2">{result}</li>
            ))}
          </ul>

          <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-gray-300">
            "{successStory.testimonial.quote}"
            <footer className="mt-4 text-sm">
              <div className="font-semibold">{successStory.testimonial.author}</div>
              <div className="text-gray-400">{successStory.testimonial.role}</div>
            </footer>
          </blockquote>
        </div>

        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
          Download Full Case Study
          <ArrowUpRight size={20} />
        </button>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Customer Success?</h2>
        <p className="text-gray-300 mb-8">Schedule a demo to see how our platform can help you deliver exceptional customer experiences.</p>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg">
          Request Demo
        </button>
      </section>
    </div>
  );
};

export default CaseStudyTemplate;
