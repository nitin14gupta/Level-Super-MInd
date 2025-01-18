"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "@/components/ui/card";

// Monthly data for bar charts
const monthlyData = [
  { name: "Jan", Desktop: 120, Mobile: 80 },
  { name: "Feb", Desktop: 180, Mobile: 90 },
  { name: "Mar", Desktop: 140, Mobile: 100 },
  { name: "Apr", Desktop: 80, Mobile: 140 },
  { name: "May", Desktop: 160, Mobile: 110 },
  { name: "Jun", Desktop: 150, Mobile: 120 },
];

// Pie chart data
const pieData = [
  { name: "Tier", value: monthlyData.reduce((acc, curr) => acc + curr.Desktop, 0) },
  // { name: "Mobile", value: monthlyData.reduce((acc, curr) => acc + curr.Mobile, 0) },
];

// Colors for charts (neutral shades)
const COLORS = ["#6B7280", "#374151"]; // Neutral shades (gray)

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-neutral-700 p-2 rounded-lg shadow-lg">
        <p className="font-medium text-white">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-neutral-400">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BarChartComponent = ({ title, subtitle }) => (
  <div className="space-y-4">
    <div>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-neutral-400">{subtitle}</p>
    </div>
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis
            dataKey="name"
            stroke="#9CA3AF"
            fontSize={12}
            tick={{ fill: "#9CA3AF" }}
          />
          <YAxis
            stroke="#9CA3AF"
            fontSize={12}
            tick={{ fill: "#9CA3AF" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="Desktop" fill={COLORS[0]} radius={[4, 4, 0, 0]} />
          {/* <Bar dataKey="Mobile" fill={COLORS[1]} radius={[4, 4, 0, 0]} /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default function TierGraph() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-[1400px] mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Q1 Performance */}
          <Card className="p-6 bg-neutral-800">
            <BarChartComponent title="Tier Distribution" subtitle="Distribution between diffrent cities" />
          </Card>

          {/* Total Distribution */}
          <Card className="p-6 bg-neutral-800">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-white">Age percentage</h2>
                <p className="text-sm text-neutral-400">Overall Age Distribution</p>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded" />
                  <span className="text-sm text-neutral-400">Desktop</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-800 rounded" />
                  <span className="text-sm text-neutral-400">Mobile</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Q2 Performance */}
          <Card className="p-6 bg-neutral-800">
            <BarChartComponent title="Q2 Performance" subtitle="Desktop vs Mobile usage (Apr-Jun)" />
          </Card>
        </div>
      </div>
    </div>
  );
}
