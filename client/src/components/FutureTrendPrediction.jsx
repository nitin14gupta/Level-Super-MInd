"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

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

export default function FutureTrendPrediction() {
  const [trends, setTrends] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("researcherData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData?.data?.output_text_6) {
          setTrends(parsedData.data.output_text_6); // Update trends state with output_text_6 data
        } else {
          console.warn("No 'output_text_6' found in localStorage data.");
        }
      } else {
        console.warn("No 'researcherData' found in localStorage.");
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
    setLoading(false); // Stop loading
  }, []);

  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <Brain className="w-4 h-4 text-primary/70" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent text-white">
            Technology Trends
          </h1>

          <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Emerging technologies shaping the future of enterprise solutions
          </p>
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => <SkeletonLoader key={idx} />)
          ) : trends && trends.length > 0 ? (
            trends.map((trend, idx) => (
              <Card
                key={idx}
                className="group relative overflow-hidden bg-[#161D24] border border-primary/10 hover:border-primary/20 transition-colors duration-300"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-300 mb-2">
                      {trend?.title || "No title available"}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {trend?.description || "No description available"}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-neutral-400 text-center col-span-full">
              No trends available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}