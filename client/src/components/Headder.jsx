import React from 'react'
import { ScanSearch } from 'lucide-react';

function Headder() {
  return (
    <div>
      <header className="fixed top-0 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm z-10">
        <div className="relative overflow-hidden">
          <div className="header-flash" />
          <div className="header-top-flash" />
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2">
              <ScanSearch className="h-8 w-8 text-neutral-400" />
              <span className="text-xl font-bold tracking-tight text-neutral-100">MarketLens</span>
              <div>
                <span className="text-sm text-neutral-400">Clarity through competition</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Headder
