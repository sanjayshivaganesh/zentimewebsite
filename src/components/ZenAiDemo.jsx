import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ZEN_AI_DISCLAIMER } from "@/lib/zenAiContent";

export function ZenAiPanel({ children, className = "", compact = false }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.15rem] border border-primary/20 bg-[#10182a] shadow-[0_18px_48px_rgba(2,8,23,0.28)]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-violet-500/15 via-blue-500/10 to-transparent px-4 py-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-800 text-white">
          <Sparkles className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">Zen AI</p>
          <p className="text-[11px] text-muted-foreground">Works with your tasks and timetable</p>
        </div>
      </div>
      <div className={cn("space-y-3 p-4", compact ? "max-h-[22rem] overflow-y-auto" : "")}>{children}</div>
    </div>
  );
}

export function ChatBubble({ role, children }) {
  const isUser = role === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[92%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
          isUser
            ? "rounded-br-md bg-primary text-primary-foreground"
            : "rounded-bl-md border border-white/10 bg-white/5 text-foreground"
        )}
      >
        {!isUser && <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-300">Zen AI</p>}
        {children}
      </div>
    </div>
  );
}

export function DemoResult({ result }) {
  if (!result) return null;

  if (result.kind === "tasks") {
    return (
      <div className="rounded-xl border border-white/10 bg-black/20 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Created in Tasks</p>
        <ul className="mt-2 space-y-2">
          {result.items.map((item) => (
            <li key={item.title} className="flex items-center justify-between gap-3 text-[13px]">
              <span className="text-foreground">{item.title}</span>
              <span className="shrink-0 text-[11px] text-muted-foreground">{item.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (result.kind === "plan") {
    return (
      <div className="rounded-xl border border-white/10 bg-black/20 p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Schedule preview</p>
          <span className="text-[10px] text-muted-foreground">Apply to place</span>
        </div>
        <p className="mt-1 text-[11px] text-muted-foreground">{result.constraint}</p>
        <ul className="mt-2 space-y-1.5">
          {result.scheduled.map((block) => (
            <li key={block.time} className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-[12px]">
              <span className="w-[5.5rem] shrink-0 tabular-nums text-muted-foreground">{block.time}</span>
              <span className="flex-1 text-foreground">{block.title}</span>
              <span className={cn("text-[10px]", block.tag === "Busy" ? "text-muted-foreground" : "text-primary")}>
                {block.tag}
              </span>
            </li>
          ))}
        </ul>
        {result.unscheduled?.length > 0 && (
          <p className="mt-2 text-[11px] text-amber-200/80">Unscheduled: {result.unscheduled.join("; ")}</p>
        )}
      </div>
    );
  }

  if (result.kind === "workload") {
    return (
      <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-[13px]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Workload check</p>
        <p className="mt-2 text-foreground">Open time: {result.open}</p>
        <p className="text-foreground">Estimated work: {result.needed}</p>
        <p className="mt-2 text-[12px] text-muted-foreground">{result.note}</p>
      </div>
    );
  }

  if (result.kind === "decompose") {
    return (
      <div className="rounded-xl border border-white/10 bg-black/20 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Breakdown preview</p>
        <p className="mt-1 text-[12px] text-foreground">{result.parent}</p>
        <ol className="mt-2 space-y-1.5">
          {result.steps.map((step, i) => (
            <li key={step.title} className="flex items-baseline justify-between gap-3 text-[13px]">
              <span>
                <span className="mr-2 font-mono text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                {step.title}
              </span>
              <span className="shrink-0 text-[11px] text-muted-foreground">{step.meta}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (result.kind === "next") {
    return (
      <div className="rounded-xl border border-primary/25 bg-primary/10 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">Same as the timetable</p>
        <p className="mt-1 text-sm font-semibold text-foreground">{result.title}</p>
        <p className="text-[12px] text-muted-foreground">{result.window}</p>
      </div>
    );
  }

  if (result.kind === "execute") {
    return (
      <div className="space-y-2">
        <p className="text-[11px] text-muted-foreground">{result.scheduled}</p>
        <div className="rounded-xl border border-primary/30 bg-primary/10 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">Ready to get started?</p>
            <span className="text-[11px] tabular-nums text-muted-foreground">{result.offerTime}</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-foreground">{result.offerTitle}</p>
          <div className="mt-3 flex justify-end gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-muted-foreground">Not now</span>
            <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-primary-foreground">
              {result.offerCta}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export function DemoDisclaimer() {
  return <p className="text-[11px] leading-relaxed text-muted-foreground">{ZEN_AI_DISCLAIMER}</p>;
}
