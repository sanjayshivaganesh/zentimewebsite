import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductShot from "@/components/mockups/ProductShot";

function shotList(shot) {
  const srcs = Array.isArray(shot.src) ? shot.src : shot.src ? [shot.src] : [];
  const alts = shot.srcAlts || [];
  return srcs.map((src, i) => ({
    src,
    alt: alts[i] || shot.caption,
  }));
}

export default function FeatureBlock({ feature, index }) {
  const Icon = feature.icon;
  const reversed = index % 2 === 1;
  const large = feature.id === "timetable" || feature.id === "today" || feature.id === "stats";
  const shots = shotList(feature.shot);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: reversed ? 24 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(reversed && "lg:order-2")}
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" strokeWidth={1.9} />
        </span>
        <p className="eyebrow mt-5">{feature.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {feature.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          {feature.desc}
        </p>
        <ul className="mt-6 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
          {feature.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-foreground">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn("relative", reversed && "lg:order-1", large && "lg:scale-[1.02]")}
      >
        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/[0.05] blur-2xl" />
        {shots.length > 1 ? (
          <div className="space-y-4">
            {shots.map((s, i) => (
              <ProductShot
                key={s.src}
                src={s.src}
                alt={s.alt}
                url={feature.shot.url}
                caption={feature.shot.caption}
                purpose={feature.shot.purpose}
                wireframe={feature.shot.wireframe}
                testId={`feature-shot-${feature.id}-${i + 1}`}
              />
            ))}
          </div>
        ) : (
          <ProductShot
            src={feature.shot.src}
            alt={feature.shot.caption}
            url={feature.shot.url}
            caption={feature.shot.caption}
            purpose={feature.shot.purpose}
            wireframe={feature.shot.wireframe}
            testId={`feature-shot-${feature.id}`}
          />
        )}
      </motion.div>
    </div>
  );
}
