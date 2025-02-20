import DescriptionText from "@/components/DescriptionText/DescriptionText";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="flex items-start justify-start flex-col w-full">
      <div className="w-full bg-red-50">
        <HeroSection />
      </div>
      <div className="">
        <DescriptionText />
      </div>
      <div>Ohters</div>
    </div>
  );
}
