import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForTeams from "@/components/ForTeams";
import Stats from "@/components/Stats";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import Enterprise from "@/components/Enterprise";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Placeholder from "@/components/Placeholder";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-0">
          <Placeholder />
          <ForTeams />
          <Stats />
          <Logos />
          <Features />
          <Enterprise />
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
