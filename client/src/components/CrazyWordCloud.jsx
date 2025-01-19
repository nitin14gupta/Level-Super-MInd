"use client";
import React, { useEffect, useState } from "react";

function OrderedWordCloud() {
  const [words, setWords] = useState([]); // State to store words
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    try {
      // Retrieve data from localStorage
      const storedData = localStorage.getItem("researcherData");
      console.log("Data retrieved from localStorage:", storedData);

      if (storedData) {
        const parsedData = JSON.parse(storedData);

        // Safely access the nested property
        const retrievedWords = parsedData?.data?.output_text_5;

        // Check if retrievedWords is an array
        if (Array.isArray(retrievedWords)) {
          setWords(retrievedWords); // Update state with retrieved words
        } else {
          setError("Expected data format is not found."); // Handle unexpected format
        }
      } else {
        setError("No data found in localStorage."); // Handle missing data
      }
    } catch (err) {
      console.error("Error parsing data from localStorage:", err);
      setError("Failed to retrieve or parse data from localStorage.");
    } finally {
      setLoading(false); // Stop loading
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl font-bold">{error}</p>
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
