"use client";
import React, { useEffect, useState } from "react";

function OrderedWordCloud() {
  const [words, setWords] = useState([]); // State to store words
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Generate dummy data with 50 words
    const dummyWords = [
      "Innovation", "Collaboration", "Creativity", "Adaptability", "Motivation",
      "Strategy", "Growth", "Technology", "Inspiration", "Knowledge",
      "Success", "Empathy", "Communication", "Leadership", "Vision",
      "Integrity", "Dedication", "Focus", "Teamwork", "Persistence",
      "Commitment", "Resilience", "Curiosity", "Analysis", "Planning",
      "Execution", "Optimization", "Networking", "Problem-solving", "Passion",
      "Empowerment", "Flexibility", "Support", "Development", "Opportunity",
      "Impact", "Achievement", "Research", "Creativity", "Mindfulness",
      "Skillset", "Expertise", "Diversity", "Engagement", "Alignment",
      "Productivity", "Balance", "Trust", "Innovation", "Excellence", "Quality",
    ];

    // Simulate data fetching
    setTimeout(() => {
      setWords(dummyWords); // Set dummy data
      setLoading(false); // Stop loading
    }, 1000); // Simulated delay
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl mt-5 sm:text-5xl font-extrabold text-white text-center tracking-wide">
        Word Cloud
      </h1>
      <div className="min-h-screen text-gray-100 flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-screen-xl">
          {words.map((word, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 text-center rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
            >
              <span className="text-lg font-medium">{word}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderedWordCloud;
