import Image from "next/image";
import Competitors from "@/components/Competitors";
import SatisfactoryAnalysis from "@/components/SatisfactoryAnalysis";
export default function Home() {
  return (
    <div>
      Hello, world!
      <Competitors />
      <SatisfactoryAnalysis />
    </div>
  );
}
