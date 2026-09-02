import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTA from "@/pages/landing/CTA";
import { CONTACT_EMAIL } from "@/lib/links";
import { FAQS } from "@/lib/faqData";

export default function FAQ() {
  return (
    <div data-testid="faq-page" className="grain relative">
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered."
        description="Straight answers about what ZenTime is — and what it is not. Still stuck? We're one email away."
      />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {FAQS.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger
                    className="py-5 text-left text-base font-medium text-foreground hover:no-underline"
                    data-testid={`faq-trigger-${i}`}
                  >
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/30 p-8 text-center">
              <p className="text-base font-medium text-foreground">Still have a question?</p>
              <p className="max-w-md text-sm text-muted-foreground">
                Reach out and we'll get back to you. We read every message.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={`mailto:${CONTACT_EMAIL}`} data-testid="faq-contact">
                  <Button className="h-11 rounded-full px-6">Contact us</Button>
                </a>
                <Link to="/download" data-testid="faq-get-started">
                  <Button variant="outline" className="h-11 rounded-full px-6">Get Started</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </div>
  );
}
