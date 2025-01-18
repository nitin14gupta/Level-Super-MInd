"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Sparkles, Shield, Cloud, Zap } from "lucide-react";

export default function MainSolution() {
  const solution = {
    description:
      "Robust cloud infrastructure designed to support mission-critical applications with high availability and disaster recovery built-in. Our cloud solutions are designed to scale with your business. We offer a range of services including cloud migration, cloud-native development, and cloud security. Our cloud solutions are designed to meet the needs of businesses of all sizes. Whether you are a small business looking to move to the cloud or a large enterprise looking to optimize your cloud infrastructure, we have the expertise to help you succeed.",
    features: [
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-grade security protocols with advanced threat detection"
      },
      {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "Scalable and resilient cloud architecture"
      },
      {
        icon: Zap,
        title: "High Performance",
        description: "Optimized for speed and reliability"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <Sparkles className="w-4 h-4 text-primary/70" />
            <span className="text-sm font-medium text-primary/70">Enterprise Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
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
            <div className="relative p-8 md:p-12">
              <div className="max-w-4xl">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {solution.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="relative group/item p-6 rounded-lg bg-primary/5 border border-primary/10 transition-colors hover:bg-primary/10"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <feature.icon className="w-8 h-8 text-primary/70 mb-4" />
                      <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
