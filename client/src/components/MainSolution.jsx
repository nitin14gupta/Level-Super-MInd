'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from "@/components/ui/card";

// Skeleton loader component
function SkeletonLoader() {
  return (
    <div className="competitor-card animate-pulse">
      <div className="h-6 bg-gray-300 w-24 rounded mb-4"></div>
      <div className="space-y-6">
        <div className="h-6 bg-gray-300 w-48 rounded mb-2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 w-40 rounded"></div>
          <div className="h-4 bg-gray-200 w-40 rounded"></div>
          <div className="h-4 bg-gray-200 w-40 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function MainSolution() {
  const [solution, setSolution] = useState([]); 
  const [loading, setLoading] = useState(true);

  // Retrieve data from localStorage once the component is mounted
  useEffect(() => {
    const storedData = localStorage.getItem("researcherData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData?.data?.output_text_3) {
        setSolution(parsedData.data.output_text_3); // Update solution state with the data
      }
    }
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent text-white">
            Enterprise-Grade Solutions
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Delivering scalable, secure, and efficient solutions for modern businesses
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Main Solution Card */}
          {loading ? (
            <SkeletonLoader /> // Show skeleton loader while loading
          ) : (
            <Card className="relative bg-[#181E28] border-[#181E28] shadow-none">
              {/* Content */}
              <div className="relative p-8 md:p-12 bg-transparent">
                <div className="max-w-6xl">
                  <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                    {solution} {/* Render the solution text */}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
