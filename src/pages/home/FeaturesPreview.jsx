import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { FEATURES } from "@/lib/featuresData";

export default function FeaturesPreview() {
  return (
    <section className="relative border-t border-border bg-muted/30 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The product"
          title="Evidence of one execution system."
          description="Tasks, plans, timetable, focus and history are views into the same loop — not a pile of unrelated features."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                data-testid={`preview-feature-${f.id}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <span className="text-[11px] font-bold tabular-nums text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
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
              Explore the full journey
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
