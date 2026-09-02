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
    <section className="relative py-24 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The problem
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Too much to manage.
            <br />
            <span className="text-muted-foreground">Not enough clarity on what to do next.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            When school, work and personal projects compete for the same day, recording tasks is easy.
            Deciding which one to start — and when it realistically fits — is the hard part.
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
