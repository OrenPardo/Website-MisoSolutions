import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import ForTeams from "@/components/ForTeams";
import Stats from "@/components/Stats";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import Enterprise from "@/components/Enterprise";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <ForTeams />
        <Stats />
        <Logos />
        <Features />
        <Enterprise />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
