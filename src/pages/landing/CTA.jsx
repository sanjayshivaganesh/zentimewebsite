import { motion } from "framer-motion";
import { ArrowUpRight, MonitorDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BitsBackdrop from "@/components/bits/BitsBackdrop";
import { LAUNCH_APP_URL, INSTALL_APP_URL, OPEN_APP_LABEL } from "@/lib/links";

const MICRO = ["Free to use", "Runs in your browser", "Installable as a PWA"];

export default function CTA() {
  return (
    <section id="get-started" className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grain relative overflow-hidden rounded-[2rem] border border-border bg-[#0a1020] px-6 py-20 text-center sm:px-12 lg:py-28"
        >
          <BitsBackdrop variant="cta" opacity={0.5} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a1020]/40 via-transparent to-[#0a1020]/70" aria-hidden="true" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Start organising your day.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Open the ZenTime app to talk to Zen AI, connect your calendar, follow a realistic
              daily plan, and start a focus session from the next block.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={LAUNCH_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={OPEN_APP_LABEL}
                data-testid="cta-launch"
              >
                <Button
                  size="lg"
                  className="group h-12 w-full rounded-full bg-primary px-8 text-[15px] text-primary-foreground hover:bg-primary/90 sm:w-auto"
                >
                  Get started
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
              <a href={INSTALL_APP_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-install">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-full border-foreground/25 bg-transparent px-8 text-[15px] text-foreground hover:bg-foreground/10 hover:text-foreground sm:w-auto"
                >
                  <MonitorDown className="mr-1.5 h-4 w-4" />
                  Install ZenTime
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {MICRO.map((m) => (
                <span key={m} className="inline-flex items-center gap-1.5 text-sm text-foreground/60">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                  {m}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs text-foreground/45">
              Free forever. <span className="text-foreground/70">Pro</span> advanced insights &amp;
              analytics — <span className="text-foreground/70">Coming Soon</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
