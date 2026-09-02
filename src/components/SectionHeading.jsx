import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
}) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "mx-auto max-w-2xl items-center text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
