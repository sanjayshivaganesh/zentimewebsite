import Hero from "@/pages/landing/Hero";
import ProblemBrief from "@/pages/home/ProblemBrief";
import ExecutionGap from "@/pages/home/ExecutionGap";
import Solution from "@/pages/landing/Solution";
import HowItWorks from "@/pages/home/HowItWorks";
import PlanReveal from "@/pages/home/PlanReveal";
import UsageFolders from "@/pages/home/UsageFolders";
import ExecuteBridge from "@/pages/home/ExecuteBridge";
import Comparison from "@/pages/landing/Comparison";
import FeaturesPreview from "@/pages/home/FeaturesPreview";
import ProductGallery from "@/pages/home/ProductGallery";
import ZenAiShowcase from "@/pages/home/ZenAiShowcase";
import CTA from "@/pages/landing/CTA";
import PageSectionNav from "@/components/PageSectionNav";

const HOME_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The problem" },
  { id: "how-it-works", label: "Think · Plan · Execute" },
  { id: "zen-ai", label: "Zen AI" },
  { id: "product", label: "The product" },
  { id: "get-started", label: "Get started" },
];

export default function Home() {
  return (
    <div data-testid="home-page" className="grain relative">
      <PageSectionNav items={HOME_SECTIONS} />
      <Hero />
      <ProblemBrief />
      <ExecutionGap />
      <Solution />
      <HowItWorks />
      <ZenAiShowcase />
      <PlanReveal />
      <UsageFolders />
      <ExecuteBridge />
      <Comparison />
      <FeaturesPreview />
      <ProductGallery />
      <CTA />
    </div>
  );
}
