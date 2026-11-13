import CircularCarousel from "@/components/bits/CircularCarousel";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY } from "@/lib/featuresData";

const ITEMS = GALLERY.map((shot) => ({
  src: shot.src,
  alt: `${shot.caption} — ${shot.purpose}`,
  title: shot.caption,
  subtitle: shot.purpose,
}));

export default function ProductGallery({ cardWidth = 260, large = false }) {
  return (
    <section id="screenshots" className="relative scroll-mt-28 py-24 lg:py-32">
      <div className={large ? "mx-auto w-full max-w-[90rem] px-4 sm:px-6" : "container-page"}>
        <SectionHeading
          eyebrow="Inside the app"
          title="See what you are looking at."
          description="Drag the ring, or sit with it. Each card is a real view of ZenTime — tasks, today, the week, focus, and what you finished."
        />

        <div
          className={
            large
              ? "product-gallery-stage product-gallery-stage--large relative mt-12 h-[620px] overflow-hidden rounded-[2rem] border border-border bg-card/50 sm:h-[740px] lg:h-[860px]"
              : "product-gallery-stage relative mt-12 h-[420px] overflow-hidden rounded-[2rem] border border-border bg-card/50 sm:h-[520px] lg:h-[580px]"
          }
          data-testid="product-gallery-carousel"
        >
          <CircularCarousel
            items={ITEMS}
            preset="orbit"
            intro="rise"
            captions
            cardWidth={cardWidth}
            aspectRatio={large ? 1.6 : 1.6}
            gap={large ? 64 : 40}
            spread={large ? 1.28 : 1.22}
            fitWindow={large ? 1.35 : undefined}
            speed={9}
            fadeColor="#0c1524"
            innerShade={0.45}
            cornerRadius={16}
            depthFade={0.4}
            parallax={0.22}
            autoplay="drift"
            pauseOnHover
          />
        </div>
      </div>
    </section>
  );
}
