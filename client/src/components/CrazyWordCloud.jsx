"use client";
import React, { useEffect, useState } from "react";

function OrderedWordCloud({solution}) {

  return (
    <div>
      <h1 className="text-4xl mt-5 sm:text-5xl font-extrabold text-white text-center tracking-wide">
        Word Cloud
      </h1>
      <div className="min-h-screen text-gray-100 flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-screen-xl">
          {solution.map((word, index) => (
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