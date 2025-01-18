'use client';
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SatisfactoryAnalysis = () => {
  const data = {
    labels: ["Tier 1", "Tier 2"],
    datasets: [
      {
        data: [30, 50, 20], // Values for each tier
        backgroundColor: ["#ff5370", "#2196f3"], // Colors for tiers
        hoverBackgroundColor: ["#ff788e", "#42a5f5"], // Hover effect
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%", // Creates the hollow center
    plugins: {
      legend: {
        display: false, // Hides legend
      },
      tooltip: {
        enabled: true, // Shows tooltips on hover
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="relative w-64 h-64">
        <Doughnut data={data} options={options} />
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white">1,830</p>
          <p className="text-sm text-gray-400">Visitors</p>
        </div>
      </div>
    </div>
  );
};

export default SatisfactoryAnalysis;


// 