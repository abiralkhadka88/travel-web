import DescriptionText from "@/components/DescriptionText/DescriptionText";
import HeroSection from "@/components/HeroSection/HeroSection";
import LogoTicker from "@/components/LogoTicker/LogoTicker";
import PopularActivities from "@/components/PopularActivities/PopularActivities";

export default function Home() {
  return (
    <div className="flex items-start justify-start flex-col w-full">
      <div className="w-full ">
        <HeroSection />
      </div>
      <DescriptionText />
      <div className="mx-auto">
        <PopularActivities />
      </div>
      <div className="mx-auto">
        <LogoTicker />
      </div>
    </div>
  );
}
