import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MARKETING_SITE_URL } from "@/lib/links";

const DEFAULT_DESCRIPTION =
  "ZenTime is a productivity and task-scheduling app that turns your tasks, commitments, and calendar into a daily plan you can start.";

const PAGES = {
  "/": {
    title: "ZenTime — Productivity and Task-Scheduling App",
    description: DEFAULT_DESCRIPTION,
  },
  "/features": {
    title: "Features — ZenTime Productivity App",
    description:
      "See how ZenTime captures tasks, builds today’s plan, fits work around your week, and starts focus sessions from the schedule.",
  },
  "/download": {
    title: "Install ZenTime — Productivity App",
    description:
      "Use ZenTime in your browser or install it as a Progressive Web App. Open the productivity app to start planning and executing work.",
  },
  "/faq": {
    title: "FAQ — ZenTime Productivity App",
    description:
      "Answers about ZenTime’s free plan, Google Calendar, task scheduling, Pomodoro focus, and how the execution system works.",
  },
  "/privacy": {
    title: "Privacy Policy — ZenTime",
    description: "How ZenTime collects, uses, and protects your information.",
  },
  "/terms": {
    title: "Terms of Service — ZenTime",
    description: "Terms that govern your use of the ZenTime productivity app.",
  },
};

const NOT_FOUND = {
  title: "Page not found — ZenTime",
  description: "This page does not exist on the ZenTime marketing site.",
};

function upsertMeta(selector, attributes) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    link?.remove();
    return;
  }
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function setRobots(content) {
  const existing = document.head.querySelector('meta[name="robots"]');
  if (!content) {
    existing?.remove();
    return;
  }
  upsertMeta('meta[name="robots"]', { name: "robots", content });
}

export default function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = PAGES[pathname];
    const isKnown = Boolean(page);
    const meta = page || NOT_FOUND;
    const canonical = isKnown
      ? pathname === "/"
        ? `${MARKETING_SITE_URL}/`
        : `${MARKETING_SITE_URL}${pathname}`
      : null;

    document.title = meta.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });

    setCanonical(canonical);
    setRobots(isKnown ? null : "noindex, nofollow");

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical || `${MARKETING_SITE_URL}${pathname}`,
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: meta.description,
    });
  }, [pathname]);

  return null;
}
