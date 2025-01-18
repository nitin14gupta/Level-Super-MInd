'use client'
import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';

function Landing() {
  const [niche, setNiche] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="min-h-screen bg-neutral-950">
      <Spotlight />
      {/* Header */}
      

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 pt-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
          MarketLens
          </h1>
          <p className="mt-6 text-xl   leading-8 text-neutral-400">
          Clarity through competition
          </p>
        </div>
        <div className="mt-6 my-auto text-xl leading-8 text-neutral-400">Tell us Your Niche Industry and Describe your Idea and we will Manage the Rest</div>

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
            <div className="placeholder-suggestions pl-6 pt-4" 
                 aria-hidden="true"></div>
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
            <button className="search-button">
              Let the Magic Begin
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;