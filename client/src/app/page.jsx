import Image from "next/image";
import Landing from "@/components/Landing";
import Competitors from "@/components/Competitors";
import SatisfactoryAnalysis from "@/components/SatisfactoryAnalysis";
import BestHooks from "@/components/BestHooks";
import CrazyWordCloud from "@/components/CrazyWordCloud";
import GeneratedTagline from "@/components/GeneratedTagline";
import TierGraph from "@/components/TierGraph";
import Headder from "@/components/Headder";

export default function Home() {
  return (
    <div>
      <Headder/>
      <Landing />
      <Competitors />
      <div className="flex justify-around"><BestHooks />
      <CrazyWordCloud /></div>
      
      <GeneratedTagline>                                                                        </GeneratedTagline>
      <SatisfactoryAnalysis />
      <TierGraph />
    </div>
  );
}
