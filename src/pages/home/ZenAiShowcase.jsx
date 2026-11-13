import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ChatBubble, DemoDisclaimer, DemoResult, ZenAiPanel } from "@/components/ZenAiDemo";
import { ZEN_AI_DEMOS } from "@/lib/zenAiContent";
import { cn } from "@/lib/utils";
import { LAUNCH_APP_URL } from "@/lib/links";

export default function ZenAiShowcase({ nested = false }) {
  const [activeId, setActiveId] = useState(ZEN_AI_DEMOS[1].id);
  const demo = ZEN_AI_DEMOS.find((item) => item.id === activeId) || ZEN_AI_DEMOS[0];

  return (
    <section id="zen-ai" className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Zen AI"
          title="More than an AI chatbot."
          description="Zen AI understands your workload, works with your timetable, and helps turn plans into work you can start. The scheduler still places the blocks — the assistant is how you talk to that system."
        />

        <Reveal className="mx-auto mt-12 max-w-5xl">
          <div className="flex flex-wrap justify-center gap-1.5">
            {ZEN_AI_DEMOS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors sm:text-[13px]",
                  item.id === activeId
                    ? "bg-white text-[#0b1220]"
                    : "border border-border bg-card/60 text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{demo.label}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{demo.heading}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{demo.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={LAUNCH_APP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="h-11 w-full rounded-full px-6 sm:w-auto">Try ZenTime</Button>
              </a>
              {!nested && (
                <Link to="/features#zen-ai">
                  <Button variant="outline" className="group h-11 w-full rounded-full px-6 sm:w-auto">
                    More on Features
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              )}
            </div>
            <div className="mt-6">
              <DemoDisclaimer />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ZenAiPanel>
              <ChatBubble role="user">{demo.user}</ChatBubble>
              <ChatBubble role="assistant">{demo.assistant}</ChatBubble>
              <DemoResult result={demo.result} />
            </ZenAiPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
