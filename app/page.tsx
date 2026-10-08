import AboutSection from "@/components/home/AboutSection";
import CtaBanner from "@/components/home/CtaBanner";
import FeaturedProducts from "@/components/home/FeatureProducts";
import FeaturedProjects from "@/components/home/FeatureProjects";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnerSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection/>
      <AboutSection/>
      <FeaturedProducts/>
      <FeaturedProjects/>
      <WhyChooseUs/>
      <PartnersSection/>
      <CtaBanner/>
    </main>
  );
}