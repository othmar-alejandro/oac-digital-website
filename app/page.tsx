import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { ProcessSection } from "@/components/home/process-section";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { LocationsReach } from "@/components/home/locations-reach";
import { BlogPreview } from "@/components/home/blog-preview";
import { AboutAtmospherePreview } from "@/components/home/about-atmosphere-preview";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection 
        headline="We design beautiful digital innovations"
        subHeadline="Award-winning web development, marketing automation, and SEO strategies that drive business success."
        backgroundImage="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <ServicesOverview />
      <ProcessSection />
      <PortfolioPreview />
      <LocationsReach />
      <BlogPreview />
      <AboutAtmospherePreview />
      <CTASection />
    </Layout>
  );
}