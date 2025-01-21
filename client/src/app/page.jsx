'use client';
import { useEffect, useState } from "react";
import Headder from "@/components/Headder";
import Landing from "@/components/Landing";
import Competitors from "@/components/Competitors";
import BestHooks from "@/components/BestHooks";
import CrazyWordCloud from "@/components/CrazyWordCloud";
import GeneratedTagline from "@/components/GeneratedTagline";
import TierGraph from "@/components/TierGraph";
import MainSolution from "@/components/MainSolution";
import FutureTrendPrediction from "@/components/FutureTrendPrediction";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("researcherData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData?.data);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Headder />
      <Landing />
      <Competitors solution={data.output_text_1}/>
      <div className="flex justify-around">
        <BestHooks solution={data?.output_text_2} />
        <CrazyWordCloud solution={data?.output_text_5}/>
      </div>
      <GeneratedTagline solution={data?.output_text_4}/>
      <MainSolution solution={data?.output_text_3} />
      <FutureTrendPrediction solution={data?.output_text_6}/>
      <TierGraph />
    </div>
  );
}
