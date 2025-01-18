import React from "react";

const initialWords = [
  "Innovation",
  "Technology",
  "Growth",
  "Strategy",
  "Teamwork",
  "Success",
  "Client",
  "Development",
  "Integrity",
  "Design",
  "Sustainability",
  "Solutions",
  "Efficiency",
  "Empowerment",
  "Knowledge",
  "Research",
  "Creativity",
  "Leadership",
  "Collaboration",
  "Transformation",
  "Inspiration",
  "Quality",
  "Performance",
  "Adaptability",
  "Focus",
  "Excellence",
  "Productivity",
];

function OrderedWordCloud() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-screen-xl">
        {initialWords.map((word, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 text-center rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            <span className="text-lg font-medium">{word}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderedWordCloud;
