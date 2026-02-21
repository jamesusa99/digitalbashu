import { HeroSectionEN } from "@/components/en/HeroSectionEN";
import { NewsTicker } from "@/components/NewsTicker";
import { BashuCultureSection } from "@/components/BashuCultureSection";
import { InstituteMapEN } from "@/components/en/InstituteMapEN";
import { ValuesSectionEN } from "@/components/en/ValuesSectionEN";
import { VideoSection } from "@/components/VideoSection";
import { PartnershipSection } from "@/components/PartnershipSection";

export default function HomeEN() {
  return (
    <>
      <HeroSectionEN />
      <NewsTicker />
      <BashuCultureSection />
      <InstituteMapEN />
      <ValuesSectionEN />
      <VideoSection />
      <PartnershipSection />
    </>
  );
}
