import { cn } from "@/lib/utils";

// Elegant window chrome (macOS traffic lights + optional browser URL bar).
export default function WindowFrame({
  variant = "mac",
  url = "app.zentime.app",
  title,
  className = "",
  bodyClassName = "",
  children,
  toolbar,
  testId,
}) {
  return (
    <div
      data-testid={testId}
      className={cn(
        "window-shadow overflow-hidden rounded-xl border border-border bg-card",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        {variant === "browser" ? (
          <div className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-md border border-border bg-background/70 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
            <span className="truncate text-xs text-muted-foreground">{url}</span>
          </div>
        ) : (
          <span className="mx-auto text-xs font-medium text-muted-foreground">
            {title || "ZenTime"}
          </span>
        )}

        <div className="ml-auto w-10">{toolbar}</div>
      </div>
      <div className={cn("relative", bodyClassName)}>{children}</div>
    </div>
  );
}
