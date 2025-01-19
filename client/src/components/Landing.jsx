"use client";
import React, { useState } from "react";
import axios from "axios";
import { Spotlight } from "./ui/Spotlight";
import { useTrigger } from '../context/TriggerContext';

function Landing() {
  const [niche, setNiche] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { trigger, setTrigger } = useTrigger("");

  const handleSubmit = async () => {
    if (!niche || !description) {
      alert("Please fill out both fields before submitting.");
      return;
    }

    const payload = {
      description,
      industry: niche,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        "https://level-super-mind.onrender.com/researcher",
        payload
      );

      // Debugging: Log the response
      console.log("Response from API:", response.data);

      // Save response to localStorage
      localStorage.setItem("researcherData", JSON.stringify(response.data));

      // Debugging: Verify that data is saved
      const storedData = localStorage.getItem("researcherData");

      if (storedData) {
        // Set trigger to true only after data is saved
        setTrigger(storedData);
        
      }

    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <Spotlight />
      <main className="mx-auto max-w-3xl px-4 pt-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
            MarketLens
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-400">
            Clarity through competition
          </p>
        </div>
        <div className="mt-6 text-xl leading-8 text-neutral-400">
          Tell us Your Niche Industry and Describe your Idea and we will Manage
          the Rest
        </div>

        <div className="mt-16 space-y-8">
          <div className="input-container">
            <div className="input-flash"></div>
            <div className="input-glow"></div>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="Enter your Niche Industry"
              className="input-animated"
            />
          </div>
          <div className="input-container">
            <div className="input-flash"></div>
            <div className="input-glow"></div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your project or idea"
              className="input-animated min-h-[120px] resize-none"
            />
          </div>

          <div className="flex justify-center pt-8">
            <button
              className="search-button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Let the Magic Begin"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
