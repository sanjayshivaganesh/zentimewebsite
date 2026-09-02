import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProductShot from "@/components/mockups/ProductShot";

const STEPS = [
  { label: "Scheduled task", detail: "4:30 PM · Complete CAS Forms" },
  { label: "Start Focus", detail: "Begin from the plan" },
  { label: "Pomodoro", detail: "Do the work" },
  { label: "Complete", detail: "Record the finish" },
];

export default function ExecuteBridge() {
  return (
    <section className="relative border-y border-border bg-muted/30 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Execute"
          title={
            <>
              From scheduled work
              <br />
              <span className="text-muted-foreground">to focus — without switching systems.</span>
            </>
          }
          description="Planning does not stop when the schedule is created. ZenTime connects the block on your plan to the session where you actually work."
        />

        <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-2">
          {STEPS.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.07} className="contents">
              <div className="w-full max-w-[11rem] rounded-2xl border border-border bg-card px-4 py-5 text-center sm:w-auto">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">{step.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{step.detail}</p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-border sm:block" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-14 max-w-3xl">
          <ProductShot
            src="/screenshots/pomodoro.jpg"
            alt="ZenTime Focus session with Pomodoro timer"
            url="app.zentime.app/focus"
            caption="Focus & Pomodoro"
            purpose="Connect planning directly to execution."
            wireframe="pomodoro"
            testId="execute-bridge-shot"
          />
        </Reveal>
      </div>
    </section>
  );
}
