'use client'
import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { Spotlight } from './ui/Spotlight';


function Landing() {
  const [niche, setNiche] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="min-h-screen bg-neutral-950">
      <Spotlight />
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
        <div className="relative overflow-hidden">
          <div className="header-flash" />
          <div className="header-top-flash" />
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-neutral-400" />
              <span className="text-xl font-bold tracking-tight text-neutral-100">Art Finder</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 pt-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
            Select Your Niche Industry
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Discover your perfect creative space and connect with like-minded artists
          </p>
        </div>

        <div className="mt-16 space-y-8">
          <div className="input-container">
            <div className="input-flash"></div>
            <div className="input-glow"></div>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="What's your creative field?"
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
              placeholder="Tell us about your artistic vision..."
              className="input-animated min-h-[120px] resize-none"
            />
          </div>

          <div className="flex justify-center pt-8">
            <button className="search-button">
              Find Your Space
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;