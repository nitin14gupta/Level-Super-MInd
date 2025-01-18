import Image from "next/image";
import Landing from "@/components/Landing";
import Competitors from "@/components/Competitors";
import SatisfactoryAnalysis from "@/components/SatisfactoryAnalysis";
import BestHooks from "@/components/BestHooks";
export default function Home() {
  return (
    <div>
      Hello, world!
      <Landing />
      <Competitors />
      <BestHooks></BestHooks>
      <SatisfactoryAnalysis />
    </div>
  );
}
