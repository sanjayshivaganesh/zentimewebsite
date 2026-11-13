import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const ROWS = [
  {
    question: "What do I need to do?",
    others: "Task manager",
    zentime: "Tasks that feed today’s plan",
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
    zentime: "The same next task in the plan, Zen AI, and Focus",
  },
  {
    question: "Can I just say what I need done?",
    others: "A chatbot with no timetable",
    zentime: "Zen AI talks to your tasks and scheduler",
  },
];

export default function Comparison() {
  return (
    <section data-band="muted" className="relative border-y border-border/70 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why ZenTime is different"
          title="A list, a calendar, and a timer — connected."
          description="A task manager, a calendar, a timer, and a chatbot each answer one piece. ZenTime connects them so you can describe the work, organise the day, and start the next block."
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
                  {i < 4 ? " — alone" : ""}
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
