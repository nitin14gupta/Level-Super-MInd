"use client";
import { useTrigger } from "@/context/TriggerContext";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};


function SkeletonLoader() {
  return (
    <div className="competitor-card animate-pulse">
      <div className="h-6 bg-gray-300 w-24 rounded mb-4"></div>
      <div className="space-y-6">
        <div className="h-6 bg-gray-300 w-48 rounded mb-2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 w-40 rounded"></div>
          <div className="h-4 bg-gray-200 w-40 rounded"></div>
          <div className="h-4 bg-gray-200 w-40 rounded"></div>
        </div>
      </div>
    </div>
  );
}

function Component({ tierData }) {
  const totalDesktopPercentage = tierData?.tier1 ? 100 - tierData.tier1 : 100;

  return (
    <Card className="p-6 bg-neutral-800">
      <CardHeader>
        <CardTitle className="text-neutral-300">Area Chart - Stacked</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={[{ desktop: tierData?.tier2 || 0, mobile: totalDesktopPercentage }]}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none text-neutral-300">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}


function Container({ tierData }) {
  const totalDesktopPercentage = tierData?.tier1 ? 100 - tierData.tier1 : 100;

  return (
    <Card className="p-6 bg-neutral-800">
      <CardHeader>
        <CardTitle className="text-neutral-300">Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <ChartContainer config={chartConfig} className="min-h-[150px] w-5xl">
        <BarChart accessibilityLayer data={[{ desktop: tierData?.tier1 || 0, mobile: totalDesktopPercentage }]}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
}

export default function TierGraph() {
  const [loading, setLoading] = useState(true);
  const [tierData, setTierData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("researcherData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const solution = parsedData?.data?.output_text_7;
        if (solution) {
          setTierData(solution);
        } else {
          setError("No tier data found in the stored data.");
        }
      } else {
        setError("No data found in localStorage.");
      }
    } catch (err) {
      console.error("Error parsing data from localStorage:", err);
      setError("Failed to retrieve data from localStorage.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-6 bg-black p-10 align-baseline">
        <div className="grid grid-cols-1 gap-6">
          
          {tierData && <Container tierData={tierData} />}
        </div>

        <div className="grid grid-cols-1 gap-6 bg-black">
         
          {tierData && <Component tierData={tierData} />}
        </div>
      </div>
    </>
  );
}
