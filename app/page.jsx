import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Enterprise from "@/components/Enterprise";
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
          <Enterprise />
        </div>
      </main>
      <Footer />
    </>
  );
}
