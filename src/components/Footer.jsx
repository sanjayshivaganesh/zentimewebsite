import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import { CONTACT_EMAIL, GITHUB_URL, DOCS_URL, LAUNCH_APP_URL } from "@/lib/links";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Download", href: "/download" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: DOCS_URL },
      { label: "Launch App", href: LAUNCH_APP_URL, external: true },
      { label: "GitHub", href: GITHUB_URL, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're on the list. We'll be in touch soon.");
    setEmail("");
  };

  return (
    <footer data-testid="footer" className="relative border-t border-border bg-muted/30">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div className="max-w-sm">
            <Logo testId="footer-logo" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A productivity and execution system that turns your tasks, commitments
              and available time into a plan you can start.
            </p>

            <form onSubmit={onSubscribe} className="mt-7" data-testid="newsletter-form" noValidate>
              <label className="eyebrow mb-3 block">Join the waitlist</label>
              <div className="flex max-w-sm items-center gap-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  aria-label="Email address"
                  data-testid="newsletter-email"
                  className="h-11 rounded-full bg-background"
                />
                <Button type="submit" size="icon" className="h-11 w-11 shrink-0 rounded-full" data-testid="newsletter-submit">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external || link.href.startsWith("mailto:") ? (
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ZenTime. Crafted for people who execute.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Code2 className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
