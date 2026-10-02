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
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-50">
        <div className="absolute -top-32 left-[12%] h-[520px] w-[520px] rounded-full bg-violet-600/[0.1] blur-[160px]" />
        <div className="absolute top-[38%] right-[8%] h-[480px] w-[480px] rounded-full bg-cyan-500/[0.08] blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[440px] w-[560px] rounded-full bg-indigo-500/[0.08] blur-[170px]" />
      </div>
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