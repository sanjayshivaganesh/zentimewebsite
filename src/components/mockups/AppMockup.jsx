import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ListTodo,
  CalendarRange,
  Timer,
  LayoutGrid,
  CheckCircle2,
  Circle,
  Plus,
  Clock,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "tasks", label: "Tasks", icon: ListTodo },
  { id: "today", label: "Today's Plan", icon: CalendarRange },
  { id: "timetable", label: "Timetable", icon: LayoutGrid },
  { id: "pomodoro", label: "Focus", icon: Timer },
];

const PRIORITY = {
  high: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
  med: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  low: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
};

const TASKS = [
  { title: "Finish Data Structures assignment", project: "CS 201", p: "high", done: false },
  { title: "Draft university application essay", project: "Apps", p: "high", done: false },
  { title: "Review lecture notes — Ch. 6", project: "Biology", p: "med", done: true },
  { title: "Complete CAS forms", project: "Extracurricular", p: "med", done: false },
  { title: "Gym — strength session", project: "Personal", p: "low", done: false },
];

const PLAN = [
  { time: "09:00", title: "Deep work — DS assignment", tag: "Work", accent: true, startable: true },
  { time: "11:00", title: "Lecture — Molecular Biology", tag: "School" },
  { time: "13:30", title: "Application essay draft", tag: "Work", accent: true, startable: true },
  { time: "16:00", title: "Gym", tag: "Commitment" },
  { time: "16:45", title: "Break", tag: "Recovery" },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const SLOTS = [
  { day: 0, start: 0, span: 2, label: "School", accent: false },
  { day: 0, start: 3, span: 1, label: "Focus", accent: true },
  { day: 1, start: 1, span: 2, label: "Focus", accent: true },
  { day: 2, start: 0, span: 1, label: "Lab", accent: false },
  { day: 2, start: 2, span: 2, label: "Focus", accent: true },
  { day: 3, start: 1, span: 1, label: "Gym", accent: false },
  { day: 3, start: 3, span: 1, label: "Focus", accent: true },
  { day: 4, start: 0, span: 2, label: "Seminar", accent: false },
];

function TasksView() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">Workload</h4>
        <span className="text-[11px] text-muted-foreground">5 open · 2 projects</span>
      </div>
      {TASKS.map((t, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-3 py-2.5"
        >
          {t.done ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
          ) : (
            <Circle className="h-4 w-4 shrink-0 text-muted-foreground/60" />
          )}
          <span
            className={cn(
              "flex-1 truncate text-[13px]",
              t.done ? "text-muted-foreground line-through" : "text-foreground"
            )}
          >
            {t.title}
          </span>
          <span className="hidden rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline">
            {t.project}
          </span>
          <span className={cn("rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase", PRIORITY[t.p])}>
            {t.p}
          </span>
        </div>
      ))}
    </div>
  );
}

function TodayView() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">Today · Tue</h4>
        <span className="text-[11px] text-muted-foreground">Executable plan</span>
      </div>
      <div className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Now</p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate text-[13px] font-medium text-foreground">DS assignment</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
            <Play className="h-2.5 w-2.5 fill-current" /> Start
          </span>
        </div>
      </div>
      <div className="relative space-y-2.5 pl-4">
        <div className="absolute bottom-1 left-[6px] top-1 w-px bg-border" />
        {PLAN.map((p, i) => (
          <div key={i} className="relative">
            <span
              className={cn(
                "absolute -left-[13px] top-2.5 h-2.5 w-2.5 rounded-full border-2 border-background",
                p.accent ? "bg-primary" : "bg-muted-foreground/50"
              )}
            />
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-3 py-2.5">
              <span className="w-10 text-[11px] font-medium tabular-nums text-muted-foreground">{p.time}</span>
              <span className="flex-1 truncate text-[13px] text-foreground">{p.title}</span>
              <span
                className={cn(
                  "rounded-md px-1.5 py-0.5 text-[10px] font-medium",
                  p.accent ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                )}
              >
                {p.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PomodoroView() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 py-4">
      <div className="rounded-lg border border-border bg-background/60 px-4 py-2 text-center">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">From Today&apos;s Plan</p>
        <p className="mt-0.5 text-[13px] font-medium text-foreground">Complete CAS Forms · 16:30</p>
      </div>
      <div className="relative flex h-36 w-36 items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r="44" className="fill-none stroke-muted" strokeWidth="6" />
          <circle
            cx="50"
            cy="50"
            r="44"
            className="fill-none stroke-primary"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="276"
            strokeDashoffset="90"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="font-display text-3xl font-semibold tabular-nums text-foreground">18:24</span>
          <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Focus</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[13px] font-medium text-foreground">Session in progress</p>
        <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
          <Clock className="h-3 w-3" /> Linked to scheduled block
        </p>
      </div>
      <div className="flex gap-2">
        <span className="rounded-full bg-primary px-5 py-1.5 text-[12px] font-medium text-primary-foreground">Pause</span>
        <span className="rounded-full border border-border px-5 py-1.5 text-[12px] font-medium text-muted-foreground">Complete</span>
      </div>
    </div>
  );
}

function TimetableView() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">This week</h4>
        <span className="text-[11px] text-muted-foreground">Work around commitments</span>
      </div>
      <div className="mb-2 grid grid-cols-5 gap-1.5">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[11px] font-semibold text-muted-foreground">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {DAYS.map((_, dayIdx) => (
          <div key={dayIdx} className="grid grid-rows-4 gap-1.5">
            {Array.from({ length: 4 }).map((_, row) => {
              const slot = SLOTS.find((s) => s.day === dayIdx && s.start === row);
              const covered = SLOTS.find(
                (s) => s.day === dayIdx && row > s.start && row < s.start + s.span
              );
              if (covered) return null;
              if (!slot) return <div key={row} className="h-9 rounded-md bg-muted/40" />;
              return (
                <div
                  key={row}
                  style={{ gridRow: `span ${slot.span}` }}
                  className={cn(
                    "flex items-center justify-center rounded-md px-1 text-[10px] font-medium",
                    slot.accent
                      ? "bg-primary/15 text-primary"
                      : "bg-foreground/[0.06] text-muted-foreground"
                  )}
                >
                  {slot.label}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

const VIEWS = {
  tasks: TasksView,
  today: TodayView,
  pomodoro: PomodoroView,
  timetable: TimetableView,
};

export default function AppMockup({ className = "" }) {
  const [active, setActive] = useState("today");
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const order = NAV.map((n) => n.id);
    const id = setInterval(() => {
      setActive((cur) => order[(order.indexOf(cur) + 1) % order.length]);
    }, 3800);
    return () => clearInterval(id);
  }, [autoplay]);

  const ActiveView = VIEWS[active];

  return (
    <div
      className={cn(
        "window-shadow overflow-hidden rounded-xl border border-border bg-card",
        className
      )}
      onMouseEnter={() => setAutoplay(false)}
      data-testid="hero-app-mockup"
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="mx-auto text-xs font-medium text-muted-foreground">ZenTime · Execution preview</span>
        <div className="w-10" />
      </div>

      <div className="flex h-[380px] sm:h-[420px]">
        {/* sidebar */}
        <aside className="flex w-16 shrink-0 flex-col gap-1 border-r border-border bg-muted/30 p-2 sm:w-44 sm:p-3">
          <div className="mb-2 hidden items-center gap-2 px-2 py-1 sm:flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground">
              Z
            </span>
            <span className="text-sm font-semibold text-foreground">ZenTime</span>
          </div>
          {NAV.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => {
                  setAutoplay(false);
                  setActive(n.id);
                }}
                data-testid={`mockup-tab-${n.id}`}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2 py-2 text-left text-[13px] font-medium transition-colors sm:px-3",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden truncate sm:inline">{n.label}</span>
              </button>
            );
          })}
          <div className="mt-auto hidden sm:block">
            <div className="flex items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2 text-[12px] text-muted-foreground">
              <Plus className="h-3.5 w-3.5" /> Quick add
            </div>
          </div>
        </aside>

        {/* content */}
        <div className="relative flex-1 overflow-hidden p-4 sm:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ActiveView />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
