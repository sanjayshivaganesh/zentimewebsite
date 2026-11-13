import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import FeatureBlock from "@/components/FeatureBlock";
import ProductGallery from "@/pages/home/ProductGallery";
import Comparison from "@/pages/landing/Comparison";
import CTA from "@/pages/landing/CTA";
import { FEATURES } from "@/lib/featuresData";
import { LAUNCH_APP_URL, OPEN_APP_LABEL } from "@/lib/links";
import PageSectionNav from "@/components/PageSectionNav";
import ZenAiShowcase from "@/pages/home/ZenAiShowcase";

const FEATURE_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "zen-ai", label: "Zen AI" },
  { id: "screenshots", label: "Screenshots" },
  ...FEATURES.map((feature) => ({ id: feature.id, label: feature.eyebrow })),
  { id: "get-started", label: "Get started" },
];

export default function Features() {
  return (
    <div data-testid="features-page" className="grain relative">
      <PageSectionNav items={FEATURE_SECTIONS} />
      <PageHeader
        eyebrow="Product"
        title="From what you need to do to actually getting it done."
        description="Zen AI, tasks, Today’s Plan, the weekly timetable, focus, and insights are connected views of the same work — not a pile of unrelated productivity tools."
      >
        <a href={LAUNCH_APP_URL} target="_blank" rel="noopener noreferrer" data-testid="features-header-cta">
          <Button size="lg" className="group h-12 w-full rounded-full px-7 text-[15px] sm:w-auto">
            {OPEN_APP_LABEL}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </a>
        <Link to="/download">
          <Button size="lg" variant="outline" className="h-12 w-full rounded-full px-7 text-[15px] sm:w-auto">
            How to install
          </Button>
        </Link>
      </PageHeader>

      <ZenAiShowcase nested />

      <ProductGallery large cardWidth={520} />

      <section className="py-24 lg:py-28">
        <div className="container-page space-y-24 lg:space-y-32">
          {FEATURES.map((feature, i) => (
            <FeatureBlock key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </section>

      <Comparison />
      <CTA />
    </div>
  );
}
