"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Sparkles, Shield, Cloud, Zap } from "lucide-react";

export default function MainSolution() {
  const solution = {
    description:
      "Robust cloud infrastructure designed to support mission-critical applications with high availability and disaster recovery built-in. Our cloud solutions are designed to scale with your business. We offer a range of services including cloud migration, cloud-native development, and cloud security. Our cloud solutions are designed to meet the needs of businesses of all sizes. Whether you are a small business looking to move to the cloud or a large enterprise looking to optimize your cloud infrastructure, we have the expertise to help you succeed.",
  };

  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white">
            Enterprise-Grade Solutions
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Delivering scalable, secure, and efficient solutions for modern businesses
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Main Solution Card */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-background via-muted/5 to-primary/5 border border-primary/10">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Content */}
            <div className="relative p-8 md:p-12 bg-[#171f28]">
              <div className="max-w-6xl">
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
