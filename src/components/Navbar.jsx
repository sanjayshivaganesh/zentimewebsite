import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import { LAUNCH_APP_URL } from "@/lib/links";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Download", to: "/download" },
  { label: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    );

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
              data-testid={`nav-${link.label.toLowerCase()}`}
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-5 rounded-full bg-primary"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={LAUNCH_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-launch-app"
            className="hidden sm:inline-flex"
          >
            <Button className="group rounded-full font-medium">
              Launch App
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
            data-testid="mobile-menu"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium",
                      isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )
                  }
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={LAUNCH_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2"
              >
                <Button className="w-full rounded-full">Launch App</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
