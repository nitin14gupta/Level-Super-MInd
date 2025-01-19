"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

function BestHooks() {
  const [hooksData, setHooksData] = useState([]); // State to hold hooks data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.post("https://level-super-mind.onrender.com/researcher", {
          description: "I'm thinking to open a business for e-commerce of shoes company",
          industry: "e-commerce",
        });

        // Extract hooks data from the response
        const hooks = response.data?.data?.output_text_2?.top_competitors || [];
        setHooksData(hooks); // Update the state with the hooks data
        setLoading(false); // Set loading to false
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array to run only once

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <p className="text-white text-xl font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <p className="text-red-500 text-xl font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12 tracking-wide">
        Best Performing Hooks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
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
