"use client";

import React, { useState } from "react";

const initialWords = [
  "Adult",
  "Chat",
  "Videocall",
  "Dating",
  "Relationship",
  "Intimacy",
  "Sex",
  "Romance",
  "Flirting",
  "Cam",
  "Live",
  "Streaming",
  "Webcam",
  "Virtual",
  "Reality",
  "Adulting",
  "Mature",
  "Discreet",
  "Private",
  "Secure",
  "Encryption",
  "Safety",
  "Consent",
  "Communication",
  "Community",
  "Platform",
];

function OrderedWordCloud() {
  const [words] = useState(initialWords);

  // Generate random font sizes for each word
  const getFontSize = () => `${Math.floor(Math.random() * 24) + 16}px`; // Between 16px and 40px

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-4 gap-6 p-8 max-w-screen-lg">
        {words.map((word, index) => (
          <span
            key={index}
            className="font-bold"
            style={{
              fontSize: getFontSize(),
              color: `hsl(${Math.random() * 360}, 70%, 60%)`, // Random vibrant colors
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default OrderedWordCloud;
