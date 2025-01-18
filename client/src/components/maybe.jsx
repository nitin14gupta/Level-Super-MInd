'use client'
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { TrendingUp } from 'lucide-react'

const data = [
  {
    id: "Performance",
    data: [
      { x: "CPU", y: 85 },
      { x: "Memory", y: 72 },
      { x: "Storage", y: 93 },
      { x: "Network", y: 78 }
    ]
  },
  {
    id: "Efficiency",
    data: [
      { x: "CPU", y: 75 },
      { x: "Memory", y: 88 },
      { x: "Storage", y: 68 },
      { x: "Network", y: 92 }
    ]
  },
  {
    id: "Reliability",
    data: [
      { x: "CPU", y: 92 },
      { x: "Memory", y: 85 },
      { x: "Storage", y: 78 },
      { x: "Network", y: 89 }
    ]
  }
]

function maybe() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            System Performance Metrics
          </h1>
          <p className="mt-2 text-neutral-400">
            Real-time analysis of system components across different metrics
          </p>
        </div>

        <div className="relative h-[600px] rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 p-6 border border-neutral-800/50 shadow-lg backdrop-blur-sm">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <ResponsiveRadialBar
            data={data}
            valueFormat=">-.2f"
            padding={0.4}
            cornerRadius={4}
            margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
            circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
            colors={{ scheme: 'nivo' }}
            tracksColor="rgba(255,255,255,.05)"
            enableRadialGrid={false}
            enableCircularGrid={false}
            theme={{
              textColor: 'rgba(255,255,255,0.7)',
              fontSize: 12,
              tooltip: {
                container: {
                  background: '#1a1a1a',
                  color: '#fff',
                  fontSize: '12px',
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                  padding: '12px',
                }
              }
            }}
            legends={[
              {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#fff',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#fff',
                      symbolSize: 24,
                    }
                  }
                ]
              }
            ]}
          />

          {/* Trend Indicator */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-medium text-green-400">
            <TrendingUp className="h-4 w-4" />
            <span>Overall performance improved by 12% this month</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default maybe
