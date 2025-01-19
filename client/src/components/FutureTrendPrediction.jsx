"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

export default function FutureTrendPrediction() {
  const [trends, setTrends] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://level-super-mind.onrender.com/researcher",
          {
            description: "Emerging trends in AI and technology",
            industry: "technology",
          }
        );

        // Extract trends data from the response
        const fetchedTrends = response.data?.data?.output_text_6
          ? Object.values(response.data.data.output_text_6)
          : [];
        setTrends(fetchedTrends); // Update the state with the trends data
        setLoading(false); // Set loading to false
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch trends. Please try again later.");
        setLoading(false);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array to run only once

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <p className="text-white text-xl font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <p className="text-red-500 text-xl font-bold">{error}</p>
      </div>
    );
  }

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
          {trends.map((trend, idx) => (
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
                    {trend || "No title available"}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {trend || "No description available"}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
