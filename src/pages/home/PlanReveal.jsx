import ScrollExpand from "@/components/bits/ScrollExpand";

export default function PlanReveal() {
  return (
    <section className="relative bg-background" data-testid="plan-reveal">
      <ScrollExpand
        src="/screenshots/todays-plan.jpg"
        alt="ZenTime Today’s Plan — a realistic timetable for the day"
        title="Today’s Plan"
        scrollHint="Keep scrolling"
        useWindowScroll
        startWidth={38}
        startHeight={54}
        startRadius={28}
        endRadius={0}
        mediaZoom={1.28}
        scrollDistance={1.15}
        holdDistance={0.28}
        smoothing={0.12}
        overlayScrim={0.55}
      >
        <p className="eyebrow justify-center text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Inside the day
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          A timetable you can follow, not another list you ignore.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Work sits around lectures, commitments, and breaks. When the next block starts, you already know what to open.
        </p>
      </ScrollExpand>
    </section>
  );
}
