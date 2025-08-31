import Image from "next/image";
import NavBar from "@/components/sections/NavBar/NavBar";
import Hero from "@/components/sections/Hero/Hero";
import MissionSection from "@/components/sections/MissionSection/MissionSection";
import JourneySection from "@/components/sections/JourneySection/JourneySection";
import GetStartedSection from "@/components/sections/GetStartedSection/GetStartedSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import Footer from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-ivory w-screen">
    <NavBar/>
    <Hero/>
    <MissionSection />
    <JourneySection />
    <GetStartedSection />
    <ContactSection />
    <Footer />
    </div>
  );
}
