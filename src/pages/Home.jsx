import Hero from "@/pages/landing/Hero";
import ProblemBrief from "@/pages/home/ProblemBrief";
import ExecutionGap from "@/pages/home/ExecutionGap";
import Solution from "@/pages/landing/Solution";
import HowItWorks from "@/pages/home/HowItWorks";
import ExecuteBridge from "@/pages/home/ExecuteBridge";
import Comparison from "@/pages/landing/Comparison";
import FeaturesPreview from "@/pages/home/FeaturesPreview";
import ProductGallery from "@/pages/home/ProductGallery";
import CTA from "@/pages/landing/CTA";

export default function Home() {
  return (
    <div data-testid="home-page" className="grain relative">
      <Hero />
      <ProblemBrief />
      <ExecutionGap />
      <Solution />
      <HowItWorks />
      <ExecuteBridge />
      <Comparison />
      <FeaturesPreview />
      <ProductGallery />
      <CTA />
    </div>
  );
}
