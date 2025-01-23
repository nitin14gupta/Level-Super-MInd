'use client';
import React from "react";
import { Card } from "@/components/ui/card";

export default function MainSolution({ solution }) {
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
          {solution ? (
            <Card className="relative bg-[#181E28] border-[#181E28] shadow-none">
              <div className="relative p-8 md:p-12 bg-transparent">
                <div className="max-w-6xl">
                  <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                    {typeof solution === "object" ? JSON.stringify(solution) : solution}
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <div className="text-center text-red-500">No solution data available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
