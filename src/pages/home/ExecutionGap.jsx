import { ListTodo, Calendar, Timer, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const TOOLS = [
  {
    icon: ListTodo,
    label: "A task manager",
    answers: "What do I need to do?",
    leaves: "You still decide what matters now.",
  },
  {
    icon: Calendar,
    label: "A calendar",
    answers: "When am I busy?",
    leaves: "You still decide what fits where.",
  },
  {
    icon: Timer,
    label: "A Pomodoro timer",
    answers: "How long should I focus?",
    leaves: "You still decide what to start.",
  },
];

export default function ExecutionGap() {
  return (
    <section data-band="muted" className="relative border-y border-border/70 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why a list is not a plan"
          title={
            <>
              Task apps, calendars, and timers each answer one question.
              <br />
              <span className="text-muted-foreground">None of them build the day for you.</span>
            </>
          }
          description="A task list can show seventeen items. A calendar can show class until 16:00. A timer can count twenty-five minutes. You are still left deciding what should happen at 16:30."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {TOOLS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Reveal key={tool.label} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{tool.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Answers: <span className="text-foreground">{tool.answers}</span>
                  </p>
                  <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                    {tool.leaves}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-foreground">
            <span className="font-medium text-primary">ZenTime answers</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
            <span>What next, when it fits, and start from here.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
