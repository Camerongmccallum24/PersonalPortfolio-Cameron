import React from 'react';
import { Helmet } from 'react-helmet';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-background">
      <Helmet>
        <title>Cookie Policy - Cameron McCallum</title>
        <meta name="description" content="This Cookie Policy explains how our website uses cookies and similar technologies to provide, improve, and protect our services." />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="mb-4">This Cookie Policy explains how our website uses cookies and similar technologies to provide, improve, and protect our services.</p>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4">What are cookies?</h2>
        <p className="mb-4">Cookies are small text files stored on your device when you visit a website. They help the website remember your actions and preferences over time, so you don't have to re-enter them whenever you come back to the site or browse from one page to another.</p>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4">How we use cookies</h2>
        <p className="mb-4">We use cookies to:</p>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">Ensure the website functions correctly</li>
          <li className="mb-2">Remember your preferences and settings</li>
          <li className="mb-2">Analyze how you use our website to improve performance</li>
          <li className="mb-2">Deliver relevant advertisements</li>
        </ul>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4">Types of cookies we use</h2>
        <p className="mb-4">We use the following types of cookies:</p>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">
            <strong>Essential cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.
          </li>
          <li className="mb-2">
            <strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
          </li>
          <li className="mb-2">
            <strong>Advertising cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests.
          </li>
        </ul>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4">Managing cookies</h2>
        <p className="mb-4">You can manage your cookie preferences through your browser settings. Most browsers allow you to:</p>
        <ul className="list-disc pl-8 mb-4">
          <li className="mb-2">See what cookies you have and delete them on an individual basis</li>
          <li className="mb-2">Block third-party cookies</li>
          <li className="mb-2">Block cookies from particular sites</li>
          <li className="mb-2">Block all cookies from being set</li>
          <li className="mb-2">Delete all cookies when you close your browser</li>
        </ul>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4">Changes to this Cookie Policy</h2>
        <p className="mb-4">We may update this Cookie Policy from time to time to reflect changes in our practices. We encourage you to review this page periodically for the latest information on our cookie practices.</p>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4">Contact us</h2>
        <p>If you have any questions about our use of cookies, please contact us at [Your Contact Information].</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
