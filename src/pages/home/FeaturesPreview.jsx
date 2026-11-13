import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { FEATURES } from "@/lib/featuresData";

const ZEN_PREVIEW = {
  id: "zen-ai",
  eyebrow: "Zen AI",
  short: "Describe the work. ZenTime organises it and helps you start the next block.",
};

export default function FeaturesPreview() {
  return (
    <section id="product" data-band="muted" className="relative scroll-mt-28 border-t border-border/70 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The product"
          title="How the pieces work together."
          description="Zen AI talks to the same tasks, timetable, and Focus Workspace you already use — not a separate chatbot bolted on the side."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group h-full rounded-2xl border border-primary/30 bg-card p-6 shadow-sm sm:col-span-2 lg:col-span-1"
            data-testid="preview-feature-zen-ai"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <span className="text-[11px] font-bold tabular-nums text-muted-foreground/50">01</span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{ZEN_PREVIEW.eyebrow}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ZEN_PREVIEW.short}</p>
          </motion.div>
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: ((i + 1) % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-28px_hsl(var(--primary)/0.55)]"
                data-testid={`preview-feature-${f.id}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <span className="text-[11px] font-bold tabular-nums text-muted-foreground/50">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{f.eyebrow}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.short}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/features" data-testid="preview-explore-features">
            <Button size="lg" variant="outline" className="group h-12 rounded-full px-7 text-[15px]">
              See every feature
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
