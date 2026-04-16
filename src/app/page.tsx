import ScrollyCanvas from "@/components/ScrollyCanvas";
import IntroSection from "@/components/IntroSection";
import Works from "@/components/Works";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <ScrollyCanvas />
      <IntroSection />
      <Works />
      <StatsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
