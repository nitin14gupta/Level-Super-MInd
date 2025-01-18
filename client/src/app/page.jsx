import Image from "next/image";
import Landing from "@/components/Landing";
import Competitors from "@/components/Competitors";
import SatisfactoryAnalysis from "@/components/SatisfactoryAnalysis";
export default function Home() {
  return (
    <div>
      Hello, world!
      <Landing />
      <Competitors />
      <SatisfactoryAnalysis />
    </div>
  );
}
