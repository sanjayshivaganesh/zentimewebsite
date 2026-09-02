import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProductShot from "@/components/mockups/ProductShot";
import { GALLERY } from "@/lib/featuresData";

export default function ProductGallery() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="From plan to execution"
          title="See ZenTime in action."
          description="Each view is part of one continuous system — from capturing work to finishing it."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((shot, i) => (
            <Reveal key={shot.id} delay={(i % 3) * 0.06}>
              <figure className="flex h-full flex-col gap-3" data-testid={`gallery-${shot.id}`}>
                <ProductShot
                  src={shot.src}
                  alt={shot.caption}
                  url={shot.url}
                  caption={shot.caption}
                  purpose={shot.purpose}
                  wireframe={shot.wireframe}
                  testId={`gallery-shot-${shot.id}`}
                />
                <figcaption className="px-1">
                  <p className="text-sm font-semibold text-foreground">
                    {i + 1}. {shot.caption}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{shot.purpose}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
