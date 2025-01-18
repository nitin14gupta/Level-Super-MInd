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
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-100 text-center mb-6">
        Best Performing Hooks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hooksData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-100 mb-2">
              {item.name}
            </h2>
            <p className="text-lg text-gray-300 font-medium italic border-l-4 border-blue-500 pl-4">
              {item.hooks}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestHooks;
