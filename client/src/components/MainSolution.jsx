'use client';
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { useTrigger } from '@/context/TriggerContext';

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
  const [ solution, setSolution ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    try {
      const storedData = localStorage.getItem("researcherData");
      console.log("Data retrieved from localStorage:", JSON.parse(storedData));

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const solution = parsedData?.data?.output_text_3; 
        setSolution(solution); 
      } else {
        setError("No data found in localStorage.");
      }
    } catch (err) {
      console.error("Error parsing data from localStorage:", err);
      setError("Failed to retrieve data from localStorage.");
    } finally {
      setLoading(false); 
    }
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
         
          {loading ? (
            <SkeletonLoader />
          ) : error ? (
            <div className="text-center text-red-500">{error}</div> 
          ) : (
            <Card className="relative bg-[#181E28] border-[#181E28] shadow-none">
              {/* Content */}
              <div className="relative p-8 md:p-12 bg-transparent">
                <div className="max-w-6xl">
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
  {solution ? (typeof solution === 'object' ? JSON.stringify(solution) : solution) : 'Loading...'}
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
