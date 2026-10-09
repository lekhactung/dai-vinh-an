import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import CtaBanner from "@/components/home/CtaBanner";
import FeaturedProducts from "@/components/home/FeatureProducts";
import FeaturedProjects from "@/components/home/FeatureProjects";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnerSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata: Metadata = {
  title: "DVA Steel | Thép cho hiện tại - Vững cho tương lai",
  description:
    "Công ty TNHH Đại Vĩnh An — DVA Steel. Cung cấp thép tấm, thép hình, thép hộp, thép ống, xà gồ đạt tiêu chuẩn quốc tế. 30+ năm kinh nghiệm, 3 chi nhánh TP. Hồ Chí Minh.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturedProducts />
      <FeaturedProjects />
      <WhyChooseUs />
      <PartnersSection />
      <CtaBanner />
    </main>
  );
}