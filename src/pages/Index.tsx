import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyMarquee from "@/components/CompanyMarquee";
import HowItWorks from "@/components/HowItWorks";
import MarketTrend from "@/components/MarketTrend";
import Features from "@/components/Features";
import TradePlatform from "@/components/TradePlatform";
import MobilePlatform from "@/components/MobilePlatform";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CompanyMarquee />
      <HowItWorks />
      <MarketTrend />
      <Features />
      <TradePlatform />
      <MobilePlatform />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
