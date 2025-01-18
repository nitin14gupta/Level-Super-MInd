import React from "react";

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

function Competitors() {
  return (
    <div className="p-6 bg-black min-h-screen text-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-gray-100">Competitor Overview</h1>
      <div className="space-y-4">
        {data.competitors.map((competitor, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md"
          >
            {/* Competitor Name */}
            <div className="flex-1">
              <a
                href={competitor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:text-blue-300"
              >
                {competitor.name}
              </a>
            </div>

            {/* Competitor Details */}
            <div className="flex-1 text-sm text-gray-400">
              <p>
                <strong>Strategy:</strong> {competitor.strategy.join(", ")}
              </p>
              <p>
                <strong>Tier:</strong>{" "}
                {competitor.tier_focus === 1 ? "1st Tier" : "2nd Tier"}
              </p>
              <p>
                <strong>Trends:</strong> {competitor.trends.join(", ")}
              </p>
              <p>
                <strong>Keywords:</strong> {competitor.keywords.join(", ")}
              </p>
            </div>

            {/* Social Platform */}
            <div className="flex-1 text-right text-gray-300">
              <p>
                <strong>Platform:</strong> {competitor.social_platform}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Competitors;
