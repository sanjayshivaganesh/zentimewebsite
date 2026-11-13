import { useEffect } from "react";

export default function PageTint() {
  useEffect(() => {
    let current = 0;
    let target = 0;
    let raf = 0;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const measure = () => {
      const bands = document.querySelectorAll("[data-band='muted']");
      const viewTop = window.innerHeight * 0.18;
      const viewBottom = window.innerHeight * 0.78;
      const span = Math.max(1, viewBottom - viewTop);
      let coverage = 0;
      bands.forEach((el) => {
        const box = el.getBoundingClientRect();
        const overlap = Math.max(0, Math.min(box.bottom, viewBottom) - Math.max(box.top, viewTop));
        coverage = Math.max(coverage, overlap / span);
      });
      target = Math.min(1, coverage);
    };

    const paint = (value) => {
      document.documentElement.style.setProperty("--page-tint", value.toFixed(4));
    };

    const tick = () => {
      raf = 0;
      const step = reduced ? 1 : 0.07;
      current += (target - current) * step;
      if (Math.abs(target - current) < 0.003) current = target;
      paint(current);
      if (current !== target) raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      measure();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    wake();
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", wake);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", wake);
      window.removeEventListener("resize", wake);
    };
  }, []);

  return null;
}
