import { Inbox, Brain, ArrowUpNarrowWide, CalendarClock, Focus, Play, Trophy, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const FLOW = [
  { icon: Inbox, label: "Capture", desc: "Add everything that needs doing." },
  { icon: Brain, label: "Understand", desc: "Uses deadlines, priorities, and busy time." },
  { icon: ArrowUpNarrowWide, label: "Prioritize", desc: "Urgent, important and dependent work first." },
  { icon: CalendarClock, label: "Schedule", desc: "Work lands in real time blocks." },
  { icon: Focus, label: "Focus", desc: "Start a session from the plan." },
  { icon: Play, label: "Execute", desc: "Do the work." },
  { icon: Trophy, label: "Complete", desc: "Finish — and keep the record." },
];

export default function Solution() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The ZenTime solution"
          title={
            <>
              One place for tasks, commitments,
              <br />
              <span className="text-muted-foreground">and the work of the day.</span>
            </>
          }
          description="Tell Zen AI what you need to do, or capture it yourself. Connect the calendar you already use. ZenTime builds a priority-based schedule around fixed commitments, then lets you start a focus session from the next block."
        />

        <div className="mt-16 lg:mt-20">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {FLOW.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.label} delay={i * 0.05}>
                  <div className="group relative flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <span className="text-[10px] font-bold tabular-nums text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{step.label}</h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                    {i < FLOW.length - 1 && (
                      <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-border lg:block" />
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
