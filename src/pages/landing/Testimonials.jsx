import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

/** Positioning quotes — illustrative, not attributed customer reviews. */
const QUOTES = [
  {
    quote:
      "I stopped starting my day by staring at a list. I open Today’s Plan and know what to work on.",
    role: "For crowded student weeks",
  },
  {
    quote:
      "Between lectures, labs and projects, the timetable finally shows how everything fits — not just that I’m busy.",
    role: "For mixed school and life",
  },
  {
    quote:
      "Dependencies matter. The next block should unlock the work behind it — not bury it under busywork.",
    role: "For project-shaped work",
  },
  {
    quote:
      "When energy is low, I don’t want another planning session. I want a plan I can start.",
    role: "For sustainable execution",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The feeling"
          title="Less deciding. More finishing."
          description="Illustrative positioning — not customer testimonials."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUOTES.map((t, i) => (
            <motion.figure
              key={t.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20"
              data-testid={`testimonial-${i}`}
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5 text-xs font-medium text-muted-foreground">
                {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
