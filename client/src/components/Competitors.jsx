"use client";
import React, { useState, useEffect } from "react";
import { ExternalLink, TrendingUp, Target, Hash, Globe } from "lucide-react";

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

function DetailItem({ icon: IconComponent, label, items }) {
  return (
    <div className="detail-item -z-10">
      <IconComponent className="w-4 h-4 text-gray-500 mt-0.5" />
      <div>
        <span className="detail-label">{label}</span>
        <div className="detail-content">
          {items.map((item, i) => (
            <span key={i} className="tag">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Competitors() {
  // Hardcoded data for testing
  const competitorsData = [
    {
      name: "Competitor 1",
      link: "https://competitor1.com",
      tier_focus: 1,
      strategy: ["Strategy A", "Strategy B"],
      trends: ["Trend 1", "Trend 2"],
      keywords: ["Keyword 1", "Keyword 2"],
      social_platform: "Instagram",
    },
    {
      name: "Competitor 2",
      link: "https://competitor2.com",
      tier_focus: 2,
      strategy: ["Strategy C"],
      trends: ["Trend 3"],
      keywords: ["Keyword 3", "Keyword 4"],
      social_platform: "Facebook",
    },
    {
      name: "Competitor 3",
      link: "https://competitor3.com",
      tier_focus: 3,
      strategy: ["Strategy D", "Strategy E"],
      trends: ["Trend 4", "Trend 5"],
      keywords: ["Keyword 5"],
      social_platform: "Twitter",
    },
  ];

  const [competitors, setCompetitors] = useState(competitorsData);
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-8 min-h-screen overflow-hidden -z-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
          Competitor Overview
        </h1>
        <p className="text-gray-500 mb-12">
          Analyzing the market landscape and competitive strategies
        </p>

        <div className="space-y-8">
          {competitors.length === 0 || loading
            ? [...Array(5)].map((_, index) => <SkeletonLoader key={index} />)
            : competitors?.map((competitor, index) => (
                <div key={index} className="competitor-card">
                  <div
                    className={`tier-badge ${
                      competitor.tier_focus === 1
                        ? "tier-badge-1"
                        : competitor.tier_focus === 2
                        ? "tier-badge-2"
                        : "tier-badge-3"
                    }`}
                  >
                    {competitor.tier_focus === 1
                      ? "1st Tier"
                      : competitor.tier_focus === 2
                      ? "2nd Tier"
                      : "3rd Tier"}
                  </div>

                  <div className="flex-1 space-y-6">
                    <a
                      href={competitor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="competitor-link"
                    >
                      {competitor.name}
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <div className="detail-section">
                      <DetailItem icon={Target} label="Strategy" items={competitor.strategy} />
                      <DetailItem icon={TrendingUp} label="Trends" items={competitor.trends} />
                      <DetailItem icon={Hash} label="Keywords" items={competitor.keywords} />
                      <DetailItem icon={Globe} label="Platform" items={[competitor.social_platform]} />
                    </div>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default Competitors;
