import { useEffect, useRef, useState } from "react";
import MicroSlats from "@/components/bits/MicroSlats";

const PRESETS = {
  hero: {
    preset: "tide",
    color: "#7b94ff",
    glintColor: "#dbe4ff",
    backgroundColor: "#0b1220",
    slatWidth: 9,
    slatHeight: 22,
    gap: 4,
    speed: 0.32,
    fog: 0.72,
    perspective: 0.62,
    glint: 0.35,
    introDuration: 1.8,
  },
  cta: {
    preset: "signal",
    color: "#8aa4ff",
    glintColor: "#ffffff",
    backgroundColor: "#0a1020",
    slatWidth: 8,
    slatHeight: 20,
    gap: 3,
    speed: 0.45,
    fog: 0.15,
    perspective: 0.2,
    glint: 0.4,
    introDuration: 1.2,
  },
};

export default function BitsBackdrop({ variant = "hero", className = "", opacity = 0.45 }) {
  const settings = PRESETS[variant] || PRESETS.hero;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: "120px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {visible && (
        <div className="absolute inset-0" style={{ opacity }}>
          <MicroSlats {...settings} interactive={false} intro />
        </div>
      )}
    </div>
  );
}
