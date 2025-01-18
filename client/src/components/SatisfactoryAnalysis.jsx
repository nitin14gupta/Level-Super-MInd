"use client"
import React, { useState } from "react";

function SatisfactoryAnalysis() {
  const [tiers, setTiers] = useState({
    tier1: 70,
    tier2: 50,
    tier3: 30,
  });

  return (
    <div className="p-8 bg-black min-h-screen text-gray-200 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-100">Satisfactory Analysis</h1>
      <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Tier 1 */}
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-blue-400 mb-4">Tier 1</h2>
          <div className="relative w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <div
              className="absolute top-0 left-0 w-24 h-24 rounded-full bg-blue-500"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${
                  50 + 50 * Math.cos((tiers.tier1 / 100) * Math.PI * 2 - Math.PI / 2)
                }% ${
                  50 + 50 * Math.sin((tiers.tier1 / 100) * Math.PI * 2 - Math.PI / 2)
                }%, 50% 50%)`,
              }}
            ></div>
            <p className="text-gray-100 text-lg font-bold">{tiers.tier1}%</p>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-green-400 mb-4">Tier 2</h2>
          <div className="relative w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <div
              className="absolute top-0 left-0 w-24 h-24 rounded-full bg-green-500"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${
                  50 + 50 * Math.cos((tiers.tier2 / 100) * Math.PI * 2 - Math.PI / 2)
                }% ${
                  50 + 50 * Math.sin((tiers.tier2 / 100) * Math.PI * 2 - Math.PI / 2)
                }%, 50% 50%)`,
              }}
            ></div>
            <p className="text-gray-100 text-lg font-bold">{tiers.tier2}%</p>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-red-400 mb-4">Tier 3</h2>
          <div className="relative w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <div
              className="absolute top-0 left-0 w-24 h-24 rounded-full bg-red-500"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${
                  50 + 50 * Math.cos((tiers.tier3 / 100) * Math.PI * 2 - Math.PI / 2)
                }% ${
                  50 + 50 * Math.sin((tiers.tier3 / 100) * Math.PI * 2 - Math.PI / 2)
                }%, 50% 50%)`,
              }}
            ></div>
            <p className="text-gray-100 text-lg font-bold">{tiers.tier3}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SatisfactoryAnalysis;
