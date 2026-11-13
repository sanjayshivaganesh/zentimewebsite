import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import GlassSurface from "@/components/bits/GlassSurface";
import GooeyNav from "@/components/bits/GooeyNav";
import { cn } from "@/lib/utils";
import { LAUNCH_APP_URL, OPEN_APP_LABEL } from "@/lib/links";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Install", to: "/download" },
  { label: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeIndex = NAV_LINKS.findIndex((link) =>
    link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to)
  );

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
    <header data-testid="navbar" className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <GlassSurface
        width="100%"
        height={70}
        borderRadius={32}
        backgroundOpacity={scrolled ? 0.18 : 0.1}
        displace={0.5}
        distortionScale={-180}
        renderer="svg"
        className="glass-surface--nav mx-auto max-w-7xl"
      >
        <nav className="grid h-full w-full grid-cols-[1fr_auto_1fr] items-center gap-3 px-1">
          <div className="justify-self-start">
            <Logo />
          </div>

          <div className="hidden md:block" data-testid="nav-links">
            <GooeyNav
              items={NAV_LINKS.map((link) => ({ label: link.label }))}
              activeIndex={activeIndex}
              onChange={(index) => navigate(NAV_LINKS[index].to)}
              theme="dark"
              color="#c7d2fe"
              activeTextColor="#0b1220"
              colors={["#8aa4ff", "#c7d2fe", "#a78bfa"]}
              size="sm"
              frame={false}
              particleCount={12}
              spread={40}
              animationTime={520}
              gooeyness={0.55}
              wobble={0.45}
              hoverEffect
            />
          </div>

          <div className="flex items-center justify-self-end gap-2">
            <Button
              asChild
              size="sm"
              className="group hidden h-8 rounded-full px-3.5 text-[13px] font-medium shadow-none sm:inline-flex"
            >
              <a
                href={LAUNCH_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={OPEN_APP_LABEL}
                data-testid="nav-launch-app"
              >
                {OPEN_APP_LABEL}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground md:hidden"
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </GlassSurface>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-xl md:hidden"
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
                <Button className="w-full rounded-full">{OPEN_APP_LABEL}</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
