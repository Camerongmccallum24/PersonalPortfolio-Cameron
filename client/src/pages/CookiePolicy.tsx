import React from 'react';
import { Helmet } from 'react-helmet';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cookie Policy - Cameron McCallum</title>
        <meta name="description" content="This Cookie Policy explains how our website uses cookies and similar technologies to provide, improve, and protect our services." />
      </Helmet>
      
      {/* Main container with standard page padding */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Standard page title styling */}
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 text-center">
          Cookie Policy
        </h1>
        
        <div className="max-w-4xl mx-auto prose prose-invert">
          <p className="mb-6 text-lg">This Cookie Policy explains how our website uses cookies and similar technologies to provide, improve, and protect our services.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">What are cookies?</h2>
          <p className="mb-6">Cookies are small text files stored on your device when you visit a website. They help the website remember your actions and preferences over time, so you don't have to re-enter them whenever you come back to the site or browse from one page to another.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Types of Cookies We Use</h2>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>Essential Cookies: Required for basic site functionality</li>
            <li>Analytics Cookies: Help us understand how visitors use our site</li>
            <li>Preference Cookies: Remember your settings and choices</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Managing Cookies</h2>
          <p className="mb-6">You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">If you have questions about our cookie policy, please contact us at <a href="mailto:contact@cameronmccallum.com" className="text-accent hover:text-accent-light transition-colors">contact@cameronmccallum.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
