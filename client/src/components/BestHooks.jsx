import React from "react";

const hooksData = [
  { name: "OnlyFans", hooks: "Your Fans, Your Rules" },
  { name: "Patreon", hooks: "Support Your Favorite Creators" },
  { name: "ManyVids", hooks: "Buy, Sell, and Share Adult Content" },
  { name: "FanCentro", hooks: "Monetize Your Fame" },
  { name: "JustForFans", hooks: "Where Creators Get Paid" },
];

function BestHooks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900 p-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12 tracking-wide">
        Best Performing Hooks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hooksData.map((item, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              {item.name}
            </h2>
            <p className="text-lg text-gray-300 italic font-medium border-l-4 border-blue-500 pl-4 group-hover:border-purple-500 transition-all duration-300">
              {item.hooks}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestHooks;
