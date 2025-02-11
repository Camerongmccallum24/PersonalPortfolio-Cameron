import React from 'react';
import { Helmet } from 'react-helmet';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service - Cameron McCallum</title>
        <meta name="description" content="Terms of Service for Cameron McCallum's portfolio website. Understanding your rights and responsibilities when using our services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 text-center">
          Terms of Service
        </h1>
        
        <div className="max-w-4xl mx-auto prose prose-invert">
          <p className="mb-6 text-lg">By accessing this website, you agree to be bound by these terms of service and all applicable laws and regulations.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Use License</h2>
          <p className="mb-6">Permission is granted to temporarily view the materials on Cameron McCallum's website for personal, non-commercial use only.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Intellectual Property</h2>
          <p className="mb-6">All content on this website, including text, graphics, logos, and code, is the property of Cameron McCallum and is protected by intellectual property laws.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Disclaimer</h2>
          <p className="mb-6">The materials on this website are provided "as is". Cameron McCallum makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation implied warranties.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Limitations</h2>
          <p className="mb-6">Cameron McCallum shall not be held liable for any damages arising out of the use or inability to use the materials on this website.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Changes to Terms</h2>
          <p className="mb-6">We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of this page.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Governing Law</h2>
          <p className="mb-6">These terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Contact</h2>
          <p className="mb-6">If you have any questions regarding these terms, please contact us at <a href="mailto:contact@cameronmccallum.com" className="text-accent hover:text-accent-light transition-colors">contact@cameronmccallum.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
