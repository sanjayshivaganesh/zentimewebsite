import { ArrowDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const INPUTS = ["Tasks", "Commitments", "Calendar", "Time & priorities"];
const OUTPUTS = ["Today's Plan", "Weekly Timetable", "Start work"];

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              One execution engine.
              <br />
              <span className="text-muted-foreground">Many views into the same plan.</span>
            </>
          }
          description="Tasks, commitments, calendar events and available time go in. A realistic execution schedule comes out — then you start."
        />

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Inputs
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {INPUTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="my-8 flex flex-col items-center gap-3">
              <ArrowDown className="h-5 w-5 text-muted-foreground" />
              <div className="rounded-xl border border-primary/40 bg-primary/10 px-6 py-4 text-center">
                <p className="text-sm font-semibold text-primary">Execution Engine</p>
                <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">
                  Considers commitments, available windows, priority, deadlines, dependencies,
                  duration, focus blocks and recovery — then places work where it can fit.
                </p>
              </div>
              <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </div>

            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Execution schedule
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {OUTPUTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The goal is not to fill every minute. It is to maximize sustainable execution —
            meaningful work that fits real life, with enough recovery to stay executable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
