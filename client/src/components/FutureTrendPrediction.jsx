"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

export default function FutureTrendPrediction({ solution }) {
  const trends = solution
    ? Object.entries(solution).map(([key, value]) => ({
        title: value,
        description: key,
      }))
    : [];

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
          {trends.length > 0 ? (
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
                      {trend.title || "No title available"}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {trend.description || "No description available"}
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
