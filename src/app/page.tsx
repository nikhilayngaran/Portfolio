import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import Works from "@/components/Works";
import MethodSection from "@/components/MethodSection";
import SkillsSection from "@/components/SkillsSection";
import NeedSection from "@/components/NeedSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <Works />
      <MethodSection />
      <SkillsSection />
      <NeedSection />
      <ContactSection />
    </main>
  );
}
