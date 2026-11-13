import { motion } from "framer-motion";

// Reusable header for interior pages. Adds top spacing to clear the fixed navbar.
export default function PageHeader({ id = "overview", eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative overflow-hidden scroll-mt-28 pt-32 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-45" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow justify-center"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {description}
            </motion.p>
          )}
          {children && <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">{children}</div>}
        </div>
      </div>
    </section>
  );
}
