'use client';
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

// Dummy data for the solution
const dummySolution = "This is a dummy enterprise-grade solution that is scalable, secure, and efficient for modern businesses.";

export default function MainSolution() {
  const [solution, setSolution] = useState(dummySolution); // Set solution to dummy data

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
        </div>
      </div>
    </div>
  );
}
