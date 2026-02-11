import { HeroSection } from "@/components/HeroSection";
import { NewsTicker } from "@/components/NewsTicker";
import { InstituteMap } from "@/components/InstituteMap";
import { ValuesSection } from "@/components/ValuesSection";
import { PartnershipSection } from "@/components/PartnershipSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker />
      <InstituteMap />
      <ValuesSection />
      <PartnershipSection />
    </>
  );
}
