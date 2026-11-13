import Reveal from "@/components/Reveal";

const LOAD = [
  "Homework",
  "Exams",
  "Projects",
  "Applications",
  "Extracurriculars",
  "Gym",
  "Meetings",
  "Deadlines",
];

export default function ProblemBrief() {
  return (
    <section id="problem" className="relative scroll-mt-28 py-24 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The problem
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            The list keeps growing.
            <br />
            <span className="text-muted-foreground">The day still has a fixed amount of time.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            When school, projects, and personal commitments compete for the same hours, writing
            everything down is easy. Turning that list into a plan you can actually start is the
            hard part — especially when the chatbot, the calendar, and the timer do not share a day.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          {LOAD.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
