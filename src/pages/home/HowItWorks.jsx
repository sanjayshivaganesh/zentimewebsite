import { MessageSquare, CalendarCheck, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const STAGES = [
  {
    id: "think",
    icon: MessageSquare,
    eyebrow: "Think",
    title: "Tell Zen AI what you need to accomplish",
    body: "Describe the work in a sentence — create tasks, break a project down, or ask whether tomorrow still fits. You do not have to tap through every form.",
    examples: [
      "Finish Physics and revise Chemistry today.",
      "Break this project into manageable tasks.",
      "Do I have time for another two-hour block?",
    ],
  },
  {
    id: "plan",
    icon: CalendarCheck,
    eyebrow: "Plan",
    title: "Let ZenTime organise the work",
    body: "Zen AI talks to the same priority-based scheduler that builds Today’s Plan. It can create tasks, preview a timetable around commitments, and explain why something did or did not fit — then you apply or discard the change.",
    examples: ["Deadlines and durations", "Calendar busy time", "Preview before apply"],
  },
  {
    id: "execute",
    icon: Play,
    eyebrow: "Execute",
    title: "Move from the plan into focused work",
    body: "You should not have to figure out what to do next after planning. The next scheduled task is the same in Zen AI, Today’s Plan, and Focus — including a Start card after Plan & Execute.",
    examples: ["Next scheduled block", "Focus Workspace", "Pomodoro from the plan"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Think. Plan. Execute.
              <br />
              <span className="text-muted-foreground">Zen AI connects the whole loop.</span>
            </>
          }
          description="ZenTime helps you turn intentions into organised work and organised work into action. The assistant is how you speak to the product; the scheduler still places the day."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <Reveal key={stage.id} delay={i * 0.07}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
                  <span className="text-[10px] font-bold tabular-nums text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">{stage.eyebrow}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{stage.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
                  <ul className="mt-5 space-y-1.5">
                    {stage.examples.map((item) => (
                      <li key={item} className="text-[12px] text-muted-foreground">
                        {stage.id === "think" ? `“${item}”` : item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
