import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const DemoApp: React.FC = () => {
  const [demoData, setDemoData] = useState({ value: 50 }); // Example state for interaction

  const handleDataChange = (newValue: number) => {
    setDemoData({ value: newValue });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Demo App - AI-Powered Presentation Builder | Cameron McCallum</title>
        <meta name="description" content="Experience our AI-powered interactive application designed for Customer Success Managers to create data-driven presentations effortlessly." />
      </Helmet>

      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            AI-Powered Presentation Builder
          </h1>
          <p className="mt-4 text-lg text-white">
            Empowering Customer Success Managers with data-driven storytelling.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Create Stunning Presentations from Your Data
          </h2>
          <p className="text-lg text-gray-700">
            Our demo app allows Customer Success Managers to effortlessly turn complex data into compelling stories.
            Explore interactive charts, custom reports, and narrative techniques powered by Artificial Intelligence.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold text-primary mb-2">Interactive Data Upload</h3>
            <p className="mb-4 text-gray-700">
              Simply upload your datasets and let our system visualize the insights dynamically.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Upload Data
            </button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold text-primary mb-2">AI-Driven Storytelling</h3>
            <p className="mb-4 text-gray-700">
              Transform raw numbers into engaging narratives with our AI-powered engine, making data more accessible.
            </p>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Generate Story
            </button>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Live Demo Preview</h2>
          <div className="bg-white rounded shadow p-8">
            <p className="text-gray-700 mb-4">
              Experience our interactive interface where you can mix and match data visualizations,
              adjust parameters, and see real-time updates powered by AI.
            </p>
            {/* Interactive Demo Component */}
            <div className="border rounded border-gray-300 p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Interactive Chart Example
              </h3>
              <p className="text-gray-700 mb-4">
                Adjust the slider to see how the data visualization changes.
              </p>
              <div className="flex items-center mb-4">
                <label htmlFor="dataSlider" className="mr-2 text-gray-700">
                  Value: {demoData.value}
                </label>
                <input
                  type="range"
                  id="dataSlider"
                  min="0"
                  max="100"
                  value={demoData.value}
                  onChange={(e) => handleDataChange(parseInt(e.target.value, 10))}
                  className="w-full"
                />
              </div>
              {/* Placeholder for a chart (e.g., using a library like Chart.js) */}
              <div className="h-48 bg-gray-200 rounded">
                {/*  Replace this with a real chart component */}
                <p className="text-center text-gray-600 pt-20">
                  Chart Visualization Here (Data: {demoData.value})
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
{'}'};

export default DemoApp;
