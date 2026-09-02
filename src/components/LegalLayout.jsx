import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

// Shared layout for legal/prose pages (Privacy, Terms).
export default function LegalLayout({ eyebrow, title, lastUpdated, intro, sections, testId }) {
  return (
    <div data-testid={testId} className="grain relative">
      <PageHeader eyebrow={eyebrow} title={title} description={intro} />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            <div className="mt-8 rounded-xl border border-dashed border-border bg-muted/30 p-4 text-sm text-muted-foreground">
              This is placeholder legal copy for the ZenTime marketing site and is not legal advice.
              Replace it with your reviewed policy before launch.
            </div>

            <div className="mt-10 space-y-10">
              {sections.map((s, i) => (
                <div key={s.heading}>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {i + 1}. {s.heading}
                  </h2>
                  {s.body.map((p, j) => (
                    <p key={j} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
