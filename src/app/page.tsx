import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/showcase/Showcase";
import FeatureGrid from "@/components/features/FeatureGrid";
import DownloadSection from "@/components/download/DownloadSection";
import SecuritySection from "@/components/security/SecuritySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase id="demo" />
        <FeatureGrid id="features" />
        <DownloadSection id="download" />
        <SecuritySection id="seguridad" />
      </main>
      <Footer />
    </>
  );
}