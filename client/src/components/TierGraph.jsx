"use client";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

const COLORS = ["#4b7bc4", "#00C49F", "#FFBB28"]; // Colors for tiers

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-neutral-700 p-2 rounded-lg shadow-lg">
        <p className="font-medium text-white">{payload[0].name}</p>
        <p className="text-sm text-neutral-400">
          Percentage: {payload[0].value.toFixed(2)}%
        </p>
      </div>
    );
  }
  return null;
};

export default function TierPercentageChart() {
  const [tierData, setTierData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTierDataFromLocalStorage = () => {
      try {
        const storedData = localStorage.getItem("researcherData");
        if (!storedData) {
          console.error("No data found in localStorage");
          setLoading(false);
          return;
        }
  
        const parsedData = JSON.parse(storedData);
        const tierValues = parsedData?.tierValues;
  
        if (
          !tierValues ||
          typeof tierValues.tier1 !== "number" ||
          typeof tierValues.tier2 !== "number" ||
          typeof tierValues.tier3 !== "number"
        ) {
          console.error("Invalid or missing tier data in localStorage");
          setLoading(false);
          return;
        }
  
        const total = (tierValues.tier1 || 0) + (tierValues.tier2 || 0) + (tierValues.tier3 || 0);
        if (total === 0) {
          setTierData([]);
        } else {
          const processedData = [
            { name: "Tier 1", value: (tierValues.tier1 / total) * 100 },
            { name: "Tier 2", value: (tierValues.tier2 / total) * 100 },
            { name: "Tier 3", value: (tierValues.tier3 / total) * 100 },
          ];
          setTierData(processedData);
        }
      } catch (error) {
        console.error("Error processing localStorage data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTierDataFromLocalStorage();
  }, []);
  

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-[1400px] mx-auto">
        <Card className="p-6 bg-neutral-800">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Tier Distribution</h2>
            <p className="text-sm text-neutral-400">
              Distribution of Tier Data in Percentage
            </p>
            <div className="h-[300px] w-full">
              {loading ? (
                <p className="text-neutral-400">Loading...</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tierData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                      paddingAngle={2}
                    >
                      {tierData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              {tierData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-neutral-400">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
