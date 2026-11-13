import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppMockup from "@/components/mockups/AppMockup";
import LightPillar from "@/components/bits/LightPillar";
import { LAUNCH_APP_URL } from "@/lib/links";

const MotionLink = motion.create(Link);

function HeroStage() {
  const ref = useRef(null);
  const [spot, setSpot] = useState({ x: 62, y: 28 });

  useEffect(() => {
    const onMove = (event) => {
      const box = ref.current?.getBoundingClientRect();
      if (!box) return;
      setSpot({
        x: ((event.clientX - box.left) / box.width) * 100,
        y: ((event.clientY - box.top) / box.height) * 100,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="hero-orb hero-orb--a" />
      <div className="hero-orb hero-orb--b" />
      <div className="hero-grid absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(28rem circle at ${spot.x}% ${spot.y}%, hsl(224 95% 72% / 0.32), transparent 58%)`,
        }}
      />
      <LightPillar
        topColor="#8aa4ff"
        bottomColor="#c4b5fd"
        intensity={1.2}
        glowAmount={0.003}
        bloom={0.65}
        pillarWidth={3.2}
        pillarHeight={0.4}
        pillarRotation={18}
        rotationSpeed={0.34}
        interactive
        clickPulse
        intro
        quality="medium"
        mixBlendMode="screen"
        fade={0.08}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/15 to-background" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden scroll-mt-28 pt-36 sm:pt-40 lg:pt-44">
      <HeroStage />

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
              Install ZenTime as a Progressive Web App
              <ArrowRight className="h-3.5 w-3.5" />
            </MotionLink>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[16ch] text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:max-w-none sm:text-5xl"
              data-testid="hero-headline"
            >
              From what you need to do
              <br />
              <span className="text-primary">to actually getting it done.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Meet ZenTime — an intelligent productivity workspace. Tell Zen AI what you need to
              accomplish, let the scheduler organise a realistic day around your commitments, then
              start the next block in Focus. Your time, intentionally spent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={LAUNCH_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get started — open the ZenTime app"
                data-testid="hero-cta-primary"
              >
                <Button size="lg" className="group h-12 w-full rounded-full px-7 text-[15px] sm:w-auto">
                  Get started
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#zen-ai" data-testid="hero-cta-secondary">
                <Button
                  size="lg"
                  variant="outline"
                  className="group h-12 w-full rounded-full px-7 text-[15px] sm:w-auto"
                >
                  Explore Zen AI
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Free to use · Browser or PWA · Built by a student
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
            <span>Students</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>University</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Side projects</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Packed weeks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
