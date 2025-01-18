import React from "react";
import { ExternalLink, TrendingUp, Target, Hash, Globe, Icon } from 'lucide-react';

const data = {
  competitors: [
    {
      name: "Omegle",
      link: "https://www.omegle.com/",
      strategy: ["Anonymous chat", "Random video matching", "No registration required"],
      tier_focus: 1,
      trends: ["Anonymous social media", "Random video chat", "No registration required"],
      keywords: ["anonymous chat", "random video chat", "no registration required"],
      social_platform: "Website",
    },
    {
      name: "Chatroulette",
      link: "https://www.chatroulette.com/",
      strategy: ["Random video chat", "No registration required", "User moderation"],
      tier_focus: 1,
      trends: ["Random video chat", "No registration required", "User moderation"],
      keywords: ["random video chat", "no registration required", "user moderation"],
      social_platform: "Website",
    },
    {
      name: "AdultFriendFinder",
      link: "https://www.adultfriendfinder.com/",
      strategy: ["Adult dating and chat", "Large user base", "Premium features"],
      tier_focus: 2,
      trends: ["Adult dating", "Large user base", "Premium features"],
      keywords: ["adult dating", "large user base", "premium features"],
      social_platform: "Website",
    },
    {
      name: "Cam4",
      link: "https://www.cam4.com/",
      strategy: ["Live adult cam shows", "User interaction", "Tip-based revenue"],
      tier_focus: 2,
      trends: ["Live adult cam shows", "User interaction", "Tip-based revenue"],
      keywords: ["live adult cam shows", "user interaction", "tip-based revenue"],
      social_platform: "Website",
    },
    {
      name: "Stripchat",
      link: "https://www.stripchat.com/",
      strategy: ["Live adult cam shows", "Token-based revenue", "User interaction"],
      tier_focus: 2,
      trends: ["Live adult cam shows", "Token-based revenue", "User interaction"],
      keywords: ["live adult cam shows", "token-based revenue", "user interaction"],
      social_platform: "Website",
    },
  ],
};

// Updated DetailItem component
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
  return (
    <div className="p-8 min-h-screen overflow-hidden -z-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
          Competitor Overview
        </h1>
        <p className="text-gray-500 mb-12">Analyzing the market landscape and competitive strategies</p>
        
        <div className="space-y-8">
          {data.competitors.map((competitor, index) => (
            <div key={index} className="competitor-card">
              <div className={`tier-badge ${competitor.tier_focus === 1 ? 'tier-badge-1' : 'tier-badge-2'}`}>
                {competitor.tier_focus === 1 ? '1st Tier' : '2nd Tier'}
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
                  <DetailItem 
                    icon={Target} 
                    label="Strategy" 
                    items={competitor.strategy} 
                  />
                  <DetailItem 
                    icon={TrendingUp} 
                    label="Trends" 
                    items={competitor.trends} 
                  />
                  <DetailItem 
                    icon={Hash} 
                    label="Keywords" 
                    items={competitor.keywords} 
                  />
                  <DetailItem 
                    icon={Globe} 
                    label="Platform" 
                    items={[competitor.social_platform]} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Competitors;
