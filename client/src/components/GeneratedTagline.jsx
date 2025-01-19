"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles, Quote } from "lucide-react";

// Skeleton loader component
function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white text-xl font-bold animate-pulse">Loading taglines...</p>
    </div>
  );
}

function GeneratedTagline() {
  const [taglines, setTaglines] = useState([]); // State to store taglines
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Simulated backend call with dummy taglines
    const dummyTaglines = [
      "Empowering the future, one step at a time.",
      "Innovation meets creativity to inspire change.",
      "Simplifying solutions for a complex world.",
    ];

    // Simulate a delay for loading state
    setTimeout(() => {
      setTaglines(dummyTaglines);
    }, 1000);
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    if (taglines.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % taglines.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [taglines]);

  // Display skeleton loader while taglines are being fetched
  if (taglines.length === 0) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Card className="w-full max-w-2xl bg-[#181E28] border border-muted/10">
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                Generated Taglines
              </h1>
            </div>
            <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center">
              <Quote className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="relative h-[120px] overflow-hidden">
            {taglines.map((tagline, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-2xl font-light italic text-white">{tagline}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {taglines.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white w-8"
                    : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
                }`}
                aria-label={`Show tagline ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default GeneratedTagline;
