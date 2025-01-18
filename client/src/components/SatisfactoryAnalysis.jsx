"use client"

import { TrendingUp } from "lucide-react"
import { PolarRadiusAxis, RadialBar, RadialBarChart, Label } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Chart data for each tier
const tierData = [
  { name: "Tier 1", interested: 80, notInterested: 20 },
  { name: "Tier 2", interested: 65, notInterested: 35 },
  { name: "Tier 3", interested: 50, notInterested: 50 },
]

const chartConfig = {
  Interested: {
    label: "Interested",
    color: "hsl(220, 90%, 55%)",
  },
  "Not Interested": {
    label: "Not Interested",
    color: "hsl(0, 70%, 55%)",
  },
}

function SatisfactoryAnalysis() {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-gray-900 p-6">
      {tierData.map((tier, index) => {
        const totalResponses = tier.interested + tier.notInterested
        const chartData = [
          { status: "Interested", value: tier.interested },
          { status: "Not Interested", value: tier.notInterested },
        ]

        return (
          <Card
            key={index}
            className="flex flex-col w-full max-w-xs bg-gray-800 text-gray-200"
          >
            <CardHeader className="items-center pb-0">
              <CardTitle>{tier.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[220px] h-[240px]"
              >
                <RadialBarChart
                  data={chartData}
                  endAngle={180}
                  innerRadius={80}
                  outerRadius={130}
                  barSize={10}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  </PolarRadiusAxis>
                  <RadialBar
                    dataKey="value"
                    name="Interested"
                    stackId="a"
                    fill="hsl(220, 90%, 55%)"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                  />
                  <RadialBar
                    dataKey="value"
                    name="Not Interested"
                    stackId="a"
                    fill="hsl(0, 70%, 55%)"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default SatisfactoryAnalysis
