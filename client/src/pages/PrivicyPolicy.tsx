import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy - Cameron McCallum</title>
        <meta name="description" content="Privacy Policy for Cameron McCallum's portfolio website. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="max-w-4xl mx-auto prose prose-invert">
          <p className="mb-6 text-lg">This Privacy Policy describes how your personal information is collected, used, and shared when you visit cameronmccallum.com.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Information We Collect</h2>
          <p className="mb-6">When you visit the site, we automatically collect certain information about your device, including browser type, IP address, and referring website.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>Improve and optimize our website</li>
            <li>Monitor analytics and statistics</li>
            <li>Protect against spam and abuse</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Data Retention</h2>
          <p className="mb-6">We retain your data only for as long as necessary to fulfill the purposes outlined in this privacy policy.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Contact</h2>
          <p className="mb-6">For more information about our privacy practices, please contact us at <a href="mailto:contact@cameronmccallum.com" className="text-accent hover:text-accent-light transition-colors">contact@cameronmccallum.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;