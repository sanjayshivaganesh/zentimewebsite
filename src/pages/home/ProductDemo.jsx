import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { VideoPlaceholder } from "@/components/mockups/Placeholders";

const DEMO_BEATS = [
  "Add tasks",
  "Add commitments",
  "Sync calendar",
  "Generate the schedule",
  "Open Today’s Plan",
  "Start a task",
  "Start Pomodoro",
  "Complete the task",
];

export default function ProductDemo() {
  return (
    <section className="relative border-y border-border bg-muted/30 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Product demo"
          title="See ZenTime turn a workload into an execution plan."
          description="The walkthrough follows the product loop — not a tour of unrelated screens."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <VideoPlaceholder
            label="See ZenTime turn a workload into an execution plan (Coming Soon)"
            testId="product-demo-video"
          />
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <ol className="flex flex-wrap items-center justify-center gap-2">
            {DEMO_BEATS.map((beat, i) => (
              <li
                key={beat}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
              >
                <span className="font-semibold tabular-nums text-primary">{i + 1}</span>
                {beat}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
