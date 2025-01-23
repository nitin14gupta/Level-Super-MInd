"use client";
import React from "react";

function BestHooks({ solution }) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12 tracking-wide">
        Best Performing Hooks
      </h1>
      {Object.entries(solution).map(([category, competitors]) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
            {competitors.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-lg text-gray-300 italic font-medium border-l-4 border-blue-500 pl-4 group-hover:border-purple-500 transition-all duration-300">
                  {item.hooks}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BestHooks;
