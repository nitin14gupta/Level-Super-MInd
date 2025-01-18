"use client";

import React, { useState } from "react";

function GeneratedTagline() {
  const [taglines] = useState([
    "Empower your online presence.",
    "Connecting creators to their fans.",
    "Your platform for intimate connections.",
  ]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-black text-white py-8">
      <h1 className="text-3xl font-bold">Generated Taglines</h1>
      <div className="space-y-2">
        {taglines.map((tagline, index) => (
          <p key={index} className="text-xl italic">
            {tagline}
          </p>
        ))}
      </div>
    </div>
  );
}

export default GeneratedTagline;
