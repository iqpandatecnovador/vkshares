import Hero from "@/components/Hero";
import TopResorts from "@/components/TopResorts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipCards from "@/components/MembershipCards";
import AIConciergeWidget from "@/components/AIConciergeWidget";
import MissionVision from "@/components/MissionVision";
import TrustMetrics from "@/components/TrustMetrics";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <Hero />
      <TopResorts />
      <TrustMetrics />
      <MissionVision />
      <WhyChooseUs />
      <MembershipCards />
      <Testimonials />
      <FAQ />
      <Footer />
      <AIConciergeWidget />
    </main>
  );
}
