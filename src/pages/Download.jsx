import { motion } from "framer-motion";
import {
  Globe,
  Download as DownloadIcon,
  MonitorDown,
  Apple,
  Check,
  ArrowUpRight,
  UserPlus,
  CalendarSync,
  CalendarCheck,
  Link2,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AppMockup from "@/components/mockups/AppMockup";
import BitsBackdrop from "@/components/bits/BitsBackdrop";
import FolderFloat from "@/components/bits/FolderFloat";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/pages/landing/CTA";
import { LAUNCH_APP_URL, INSTALL_APP_URL, OPEN_APP_LABEL } from "@/lib/links";

const BROWSER_STEPS = [
  { name: "Chrome", steps: "Click the install icon in the address bar \u2192 Install." },
  { name: "Edge", steps: "Open the \u22ef menu \u2192 Apps \u2192 Install this site as an app." },
  { name: "Safari", steps: "Open Share \u2192 Add to Dock (macOS) or Add to Home Screen (iOS)." },
];

const BROWSERS = [
  { name: "Chrome", slug: "googlechrome" },
  { name: "Edge", slug: "microsoftedge" },
  { name: "Brave", slug: "brave" },
  { name: "Arc", slug: "arc" },
  { name: "Safari", slug: "safari" },
];

const GCAL_STEPS = [
  { icon: Link2, title: "Open Settings", desc: "Head to Settings \u2192 Integrations inside ZenTime." },
  { icon: ShieldCheck, title: "Authorize Google or Outlook", desc: "Connect the calendar you already use for fixed commitments." },
  { icon: RefreshCw, title: "Fit work around events", desc: "ZenTime uses those events as busy time when building your plan." },
];

const START_STEPS = [
  { n: "1", icon: UserPlus, title: "Create your account", desc: "Sign up free in seconds \u2014 no credit card required." },
  { n: "2", icon: CalendarSync, title: "Add work & commitments", desc: "Tell Zen AI what you need to do, or capture tasks yourself and connect calendar events." },
  { n: "3", icon: CalendarCheck, title: "Organise and start", desc: "Preview a realistic day, apply it, then start the next block in Focus." },
];

const ROADMAP = [
  "Windows desktop app",
  "macOS desktop app",
  "Mobile companion",
  "Advanced insights (Pro)",
  "Cross-device sync improvements",
];

export default function Download() {
  return (
    <div data-testid="download-page" className="grain relative">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
        <BitsBackdrop variant="hero" opacity={0.28} className="-z-10" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-40" aria-hidden="true" />
        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                data-testid="download-headline"
              >
                Use ZenTime in the browser
                <br />
                <span className="text-primary">or install it on your device.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                This page is for installing the product. The ZenTime application is a web app —
                open it in the browser, or add it as a Progressive Web App. Native Mac, Windows,
                iOS, or Android apps are Coming Soon, not available to download.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a href={LAUNCH_APP_URL} target="_blank" rel="noopener noreferrer" data-testid="download-hero-launch">
                  <Button size="lg" className="group h-12 w-full rounded-full px-7 text-[15px] sm:w-auto">
                    {OPEN_APP_LABEL}
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </a>
                <a href={INSTALL_APP_URL} target="_blank" rel="noopener noreferrer" data-testid="download-hero-install">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 w-full rounded-full px-7 text-[15px] sm:w-auto"
                  >
                    <DownloadIcon className="mr-1 h-4 w-4" />
                    Install ZenTime
                  </Button>
                </a>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 text-sm text-muted-foreground"
              >
                No installation required · Works in your browser · Free forever
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <AppMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Get started"
            title="Open the app. Install the PWA if you want."
            description="ZenTime is a browser-based product today. Desktop and mobile native apps are Coming Soon — not available to download yet."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border-2 border-primary bg-card p-8" data-testid="platform-web">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Globe className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Available
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">Web App</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Runs directly in your browser with no installation required. The fastest way to start.
                </p>
                <a href={LAUNCH_APP_URL} target="_blank" rel="noopener noreferrer" className="mt-7" data-testid="platform-web-cta">
                  <Button className="group h-11 w-full rounded-full">
                    {OPEN_APP_LABEL}
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8" data-testid="platform-pwa">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MonitorDown className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Recommended</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">Progressive Web App</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Install ZenTime like a native desktop application, directly from your browser.
                </p>
                <div className="mt-5 space-y-2 rounded-xl border border-border bg-muted/40 p-4">
                  {BROWSER_STEPS.map((b) => (
                    <p key={b.name} className="text-xs leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">{b.name}:</span> {b.steps}
                    </p>
                  ))}
                </div>
                <a href={INSTALL_APP_URL} target="_blank" rel="noopener noreferrer" className="mt-7" data-testid="platform-pwa-cta">
                  <Button variant="secondary" className="h-11 w-full rounded-full">
                    <DownloadIcon className="mr-1 h-4 w-4" /> Install ZenTime
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {[
              { name: "Windows", icon: MonitorDown },
              { name: "macOS", icon: Apple },
              { name: "Linux", icon: MonitorDown },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.name} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-muted/20 p-7" data-testid={`platform-${p.name.toLowerCase()}`}>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">
                        Coming Soon
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-foreground">{p.name}</h3>
                    <Button disabled variant="outline" className="mt-5 h-10 w-full rounded-full">
                      Download
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browser support */}
      <section data-band="muted" className="border-y border-border/70 py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="eyebrow">Browser support</p>
            <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Works best in modern browsers.
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {BROWSERS.map((b) => (
                <span key={b.name} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                  {b.name}
                </span>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {["Google Calendar", "Microsoft Outlook", "Offline caching", "Installable PWA"].map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} /> {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Calendar setup */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Calendar setup"
            title="Connect Google Calendar or Outlook."
            description="Your calendar shows time you cannot freely use. ZenTime treats those events as busy time when it builds Today’s Plan — separate from the task list itself."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {GCAL_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section data-band="muted" className="border-y border-border/70 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Getting started" title="Up and running in three steps." />
          <div className="mt-16 flex justify-center">
            <FolderFloat
              label="Your first session"
              sublabel="Four notes to start"
              items={["Open the app", "Add a few tasks", "Connect a calendar", "Open Today’s Plan"]}
              trigger="click"
              closeOnSelect={false}
              folderColor="#1c2740"
              frontColor="#3d5cb8"
              paperColor="#e8eefc"
              itemColor="#f4f7ff"
              itemTextColor="#0f172a"
              labelColor="#f8fafc"
              width={210}
              height={154}
              spread={160}
              lift={32}
              defaultOpen
            />
          </div>
          <div className="mt-28 grid gap-5 md:grid-cols-3">
            {START_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="relative h-full rounded-2xl border border-border bg-card p-7">
                    <span className="font-display text-4xl font-semibold tracking-tight text-muted-foreground/25">{s.n}</span>
                    <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future native apps */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="On the roadmap" title="Coming soon — clearly labeled." align="center" />
            <Reveal className="mt-10" delay={0.05}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <ul className="space-y-4">
                  {ROADMAP.map((r) => (
                    <li key={r} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {r}
                      <span className="ml-auto text-xs text-muted-foreground">Soon</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
