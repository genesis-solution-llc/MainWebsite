import HeroSection from "@/components/sections/HeroSection";
import MovingImages from "@/components/sections/MovingImages";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <WhoWeAre />
      <MovingImages />
    </div>
  );
}
