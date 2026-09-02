import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import FeatureBlock from "@/components/FeatureBlock";
import Comparison from "@/pages/landing/Comparison";
import CTA from "@/pages/landing/CTA";
import { FEATURES } from "@/lib/featuresData";
import { LAUNCH_APP_URL } from "@/lib/links";

export default function Features() {
  return (
    <div data-testid="features-page" className="grain relative">
      <PageHeader
        eyebrow="Product"
        title="One continuous system — from capture to complete."
        description="ZenTime is not a pile of productivity features. It is an execution engine with different views into the same plan: capture work, fit it around real life, then start."
      >
        <Link to="/download" data-testid="features-header-cta">
          <Button size="lg" className="group h-12 w-full rounded-full px-7 text-[15px] sm:w-auto">
            Get Started Free
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
        <a href={LAUNCH_APP_URL} target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="h-12 w-full rounded-full px-7 text-[15px] sm:w-auto">
            Launch Web App
          </Button>
        </a>
      </PageHeader>

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
