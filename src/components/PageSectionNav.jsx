import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export default function PageSectionNav({ items = [] }) {
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visibleEntry) return;
        const index = ids.indexOf(visibleEntry.target.id);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  if (!items.length) return null;

  return (
    <nav
      aria-label="On this page"
      className={cn(
        "pointer-events-none fixed inset-x-0 top-[5.5rem] z-30 flex justify-center px-4 transition-all duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      )}
    >
      <div
        className={cn(
          "max-w-[min(100%,70rem)] overflow-x-auto rounded-full border border-white/10 bg-[#0c1524]/70 px-1.5 py-1 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          visible && "pointer-events-auto"
        )}
      >
        <ul className="flex items-center gap-0.5">
          {items.map((item, index) => {
            const isActive = index === active;
            return (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-tight transition-colors sm:px-3 sm:text-xs",
                    isActive
                      ? "bg-white/90 text-[#0b1220]"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  <span className="font-mono text-[10px] opacity-70">{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
