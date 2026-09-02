import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const ROWS = [
  {
    question: "What do I need to do?",
    others: "Task manager",
    zentime: "Captured as inputs to the engine",
  },
  {
    question: "When am I busy?",
    others: "Calendar",
    zentime: "Commitments that shape the plan",
  },
  {
    question: "How long should I focus?",
    others: "Pomodoro timer",
    zentime: "Focus started from a scheduled task",
  },
  {
    question: "What should I do next — and can I start now?",
    others: "You figure it out",
    zentime: "ZenTime’s core answer",
  },
];

export default function Comparison() {
  return (
    <section className="relative border-y border-border bg-muted/30 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why ZenTime is different"
          title="Planning and execution in one continuous system."
          description="Other tools answer pieces of the problem. ZenTime connects them so you leave with a plan you can start."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-3">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-3 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[1.2fr_1fr_1.2fr] sm:items-center sm:gap-4 sm:p-6"
              data-testid={`comparison-row-${i}`}
            >
              <p className="text-sm font-semibold text-foreground">{row.question}</p>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                  <X className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>
                  <span className="font-medium text-foreground/80">{row.others}</span>
                  {i < 3 ? " — alone" : ""}
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {row.zentime}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
