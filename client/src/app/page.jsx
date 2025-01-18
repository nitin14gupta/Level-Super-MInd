import Image from "next/image";
import Landing from "@/components/Landing";
import Competitors from "@/components/Competitors";
import SatisfactoryAnalysis from "@/components/SatisfactoryAnalysis";
import BestHooks from "@/components/BestHooks";
import CrazyWordCloud from "@/components/CrazyWordCloud";
import GeneratedTagline from "@/components/GeneratedTagline";
import TierGraph from "@/components/TierGraph";

export default function Home() {
  return (
    <div>
      Hello, world!
      <Landing />
      <Competitors />
      <BestHooks />
      <CrazyWordCloud />
      <GeneratedTagline>                                                                        </GeneratedTagline>
      <SatisfactoryAnalysis />
      <TierGraph />
    </div>
  );
}
