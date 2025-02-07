
import React from 'react';
import { IframeDemo } from '@/components/ui/iframe-demo';
import { Helmet } from 'react-helmet';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background/50 pt-20 pb-16">
      <Helmet>
        <title>AI Dashboard | Cameron McCallum</title>
        <meta
          name="description"
          content="Phoenix AI Dashboard - Customer Success Analytics"
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
          Phoenix AI Dashboard
        </h1>
        <IframeDemo
          url="https://phoenix-ai-cam-g-mccallum.replit.app/dashboard"
          title="Phoenix AI Dashboard"
          defaultHeight={800}
          className="w-full"
        />
      </div>
    </div>
  );
}
