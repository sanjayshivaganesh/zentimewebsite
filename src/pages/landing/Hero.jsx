import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppMockup from "@/components/mockups/AppMockup";

const MotionLink = motion.create(Link);

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
          {/* copy */}
          <div className="max-w-xl">
            <MotionLink
              to="/download"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 py-1.5 pl-1.5 pr-3.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
              data-testid="hero-badge"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                <Star className="h-3 w-3 fill-current" /> New
              </span>
              Now available as a Progressive Web App
              <ArrowRight className="h-3.5 w-3.5" />
            </MotionLink>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              data-testid="hero-headline"
            >
              Stop Managing Tasks.
              <br />
              <span className="text-primary">Start Executing Them.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              ZenTime is a productivity and execution system for students and ambitious people with
              competing responsibilities. It turns tasks, commitments, calendar events and available
              time into a plan you can start — so you spend less time deciding and more time doing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link to="/download" data-testid="hero-cta-primary">
                <Button size="lg" className="group h-12 w-full rounded-full px-7 text-[15px] sm:w-auto">
                  Get Started Free
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/features" data-testid="hero-cta-secondary">
                <Button
                  size="lg"
                  variant="outline"
                  className="group h-12 w-full rounded-full px-7 text-[15px] sm:w-auto"
                >
                  See how it works
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Free forever plan · Web app &amp; PWA · Google Calendar supported
            </motion.p>
          </div>

          {/* mockup */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <AppMockup />
          </motion.div>
        </div>

        {/* trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border pt-10 lg:mt-24"
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Built for crowded weeks
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground/80">
            <span>High school</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>University</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Solo builders</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Ambitious learners</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
