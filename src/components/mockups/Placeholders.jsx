import { ImageIcon, Play, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import WindowFrame from "@/components/mockups/WindowFrame";

/**
 * Blurred wireframe preview shown behind the "Coming Soon" label.
 * Geometric stand-ins for future real screenshots — never fake product UI.
 */
function Wireframe({ layout = "app" }) {
  return (
    <div className="pointer-events-none absolute inset-0 select-none opacity-[0.55] blur-[1.5px] dark:opacity-35" aria-hidden="true">
      {(layout === "app" || layout === "tasks") && (
        <div className="flex h-full">
          <div className="hidden w-1/5 flex-col gap-2 border-r border-border/60 p-4 sm:flex">
            <div className="h-3 w-3/4 rounded bg-foreground/10" />
            <div className="mt-2 h-2 w-full rounded bg-primary/25" />
            <div className="h-2 w-5/6 rounded bg-foreground/10" />
            <div className="h-2 w-2/3 rounded bg-foreground/10" />
          </div>
          <div className="flex-1 space-y-2.5 p-5">
            <div className="flex items-center justify-between">
              <div className="h-3 w-1/4 rounded bg-foreground/15" />
              <div className="h-3 w-16 rounded bg-muted-foreground/20" />
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/40 px-3 py-2.5">
                <div className="h-3.5 w-3.5 rounded-full bg-primary/25" />
                <div className="h-2.5 flex-1 rounded bg-foreground/12" />
                <div className="h-2.5 w-12 rounded bg-foreground/10" />
                <div className="h-2.5 w-8 rounded bg-rose-500/20" />
              </div>
            ))}
          </div>
        </div>
      )}

      {layout === "today" && (
        <div className="space-y-3 p-6">
          <div className="flex items-center justify-between">
            <div className="h-3 w-1/3 rounded bg-foreground/15" />
            <div className="h-3 w-20 rounded bg-primary/20" />
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
            <div className="h-2 w-16 rounded bg-primary/40" />
            <div className="mt-2 h-3 w-2/3 rounded bg-foreground/15" />
          </div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-2 w-10 rounded bg-muted-foreground/25" />
              <div className="h-10 flex-1 rounded-lg bg-foreground/[0.07]" />
            </div>
          ))}
        </div>
      )}

      {layout === "timetable" && (
        <div className="flex h-full flex-col gap-2 p-4">
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-2 rounded bg-foreground/10" />
            ))}
          </div>
          <div className="grid flex-1 grid-cols-5 gap-1.5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "rounded",
                  [2, 7, 11, 14].includes(i) ? "bg-primary/25" : [0, 5, 16].includes(i) ? "bg-foreground/12" : "bg-foreground/[0.05]"
                )}
              />
            ))}
          </div>
        </div>
      )}

      {layout === "focus-flow" && (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
          <div className="w-full max-w-xs rounded-lg border border-border/60 bg-background/50 px-4 py-3">
            <div className="h-2 w-14 rounded bg-muted-foreground/30" />
            <div className="mt-2 h-3 w-3/4 rounded bg-foreground/15" />
          </div>
          <ArrowRight className="h-4 w-4 rotate-90 text-primary/50" />
          <div className="rounded-full border border-primary/30 bg-primary/15 px-5 py-2">
            <div className="h-2.5 w-20 rounded bg-primary/50" />
          </div>
          <ArrowRight className="h-4 w-4 rotate-90 text-primary/50" />
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary/30">
            <div className="h-4 w-12 rounded bg-foreground/15" />
          </div>
        </div>
      )}

      {layout === "pomodoro" && (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-primary/30 border-t-primary/70">
            <div className="h-5 w-16 rounded bg-foreground/15" />
          </div>
          <div className="h-2.5 w-40 rounded bg-foreground/12" />
          <div className="flex gap-2">
            <div className="h-7 w-16 rounded-full bg-primary/30" />
            <div className="h-7 w-16 rounded-full bg-foreground/10" />
          </div>
        </div>
      )}

      {layout === "calendar" && (
        <div className="flex h-full">
          <div className="hidden w-1/4 flex-col gap-2 border-r border-border/60 p-4 sm:flex">
            <div className="h-3 w-3/4 rounded bg-foreground/12" />
            <div className="mt-3 h-8 rounded-lg bg-primary/20" />
            <div className="h-8 rounded-lg bg-foreground/[0.06]" />
          </div>
          <div className="flex-1 space-y-2 p-5">
            <div className="h-3 w-1/3 rounded bg-foreground/15" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="h-12 w-12 rounded-lg bg-foreground/10" />
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-2.5 w-2/3 rounded bg-foreground/12" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {layout === "stats" && (
        <div className="space-y-4 p-6">
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-border/50 bg-background/40 p-3">
                <div className="h-2 w-10 rounded bg-muted-foreground/25" />
                <div className="mt-2 h-4 w-12 rounded bg-foreground/15" />
              </div>
            ))}
          </div>
          <div className="flex h-28 items-end gap-1.5 rounded-lg border border-border/40 bg-background/30 px-3 pb-3 pt-4">
            {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/30" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      )}

      {layout === "list" && (
        <div className="space-y-3 p-6">
          <div className="h-4 w-1/4 rounded bg-foreground/15" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-4 w-4 rounded bg-primary/20" />
              <div className="h-3 flex-1 rounded bg-foreground/10" />
              <div className="h-3 w-10 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
      )}

      {layout === "grid" && (
        <div className="grid h-full grid-cols-7 gap-2 p-5">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="rounded bg-foreground/[0.06]" />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Elegant "Screenshot Coming Soon" placeholder inside a window frame.
 * Layout is preserved so real screenshots can drop in later.
 */
export function ScreenshotPlaceholder({
  label = "Screenshot Coming Soon",
  caption,
  purpose,
  variant = "browser",
  url,
  wireframe = "app",
  aspect = "aspect-[16/10]",
  className = "",
  testId,
}) {
  return (
    <WindowFrame variant={variant} url={url} title={caption} className={className} testId={testId}>
      <div className={cn("relative w-full overflow-hidden bg-muted/40", aspect)}>
        <Wireframe layout={wireframe} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/80 text-muted-foreground backdrop-blur-sm">
            <ImageIcon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">{label}</p>
            {caption && <p className="mt-0.5 text-xs font-medium text-foreground/80">{caption}</p>}
            {purpose && <p className="mt-1 text-xs text-muted-foreground">{purpose}</p>}
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

/** Large product demo video placeholder with play button overlay. */
export function VideoPlaceholder({
  label = "See ZenTime turn a workload into an execution plan (Coming Soon)",
  className = "",
  testId = "video-placeholder",
}) {
  return (
    <WindowFrame variant="browser" url="zentime.app/demo" className={className} testId={testId}>
      <div className="relative aspect-video w-full overflow-hidden bg-muted/40">
        <Wireframe layout="today" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4 text-center">
          <button
            type="button"
            aria-label="Play product demo (coming soon)"
            className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/40" />
            <Play className="ml-1 h-7 w-7 fill-current" />
          </button>
          <p className="max-w-md rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
            {label}
          </p>
        </div>
      </div>
    </WindowFrame>
  );
}
