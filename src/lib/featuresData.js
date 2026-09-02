import {
  ListTodo,
  CalendarCheck,
  LayoutGrid,
  Timer,
  BarChart3,
} from "lucide-react";

// Single source of truth for feature content (used by Home preview + Features page).
// Structured around the execution journey — not a generic feature checklist.
export const FEATURES = [
  {
    id: "tasks",
    icon: ListTodo,
    eyebrow: "Capture",
    title: "Everything starts with what you need to do.",
    short: "Add tasks with priorities, projects, deadlines, durations and dependencies.",
    desc: "Capture homework, projects, exams, applications and personal work in one place. Priorities, projects, deadlines, estimated durations and dependencies give ZenTime the information it needs to build a realistic plan — the task system feeds the execution engine, not the other way around.",
    points: ["Projects & priorities", "Deadlines & durations", "Dependencies between tasks", "Completion state"],
    shot: {
      caption: "Tasks",
      purpose: "Capture everything that needs to get done.",
      url: "app.zentime.app/tasks",
      wireframe: "tasks",
      src: "/screenshots/tasks.png",
    },
  },
  {
    id: "today",
    icon: CalendarCheck,
    eyebrow: "Today's Plan",
    title: "ZenTime turns your workload into today's executable plan.",
    short: "Open Today’s Plan and see the work that is actually scheduled for today.",
    desc: "Today’s Plan is not a checklist. It is your daily execution view — current work, upcoming tasks, commitments, breaks and remaining work — drawn from the same schedule as your weekly timetable. The question it answers: what should you work on today?",
    points: ["Current & upcoming work", "Scheduled execution blocks", "Commitments & breaks", "Remaining work for the day"],
    shot: {
      caption: "Today's Plan",
      purpose: "Turn your workload into today’s executable plan.",
      url: "app.zentime.app/today",
      wireframe: "today",
      src: "/screenshots/todays-plan.jpg",
    },
  },
  {
    id: "timetable",
    icon: LayoutGrid,
    eyebrow: "Weekly Timetable",
    title: "See how your entire week fits together.",
    short: "Fixed commitments, Google Calendar events, scheduled tasks and breaks in one week view.",
    desc: "The timetable is the broader view of your execution plan. ZenTime places work around school, meetings, gym, sleep and Google Calendar events — so you see how everything you need to accomplish fits into the week, instead of dragging blocks onto a blank calendar.",
    points: ["Fixed commitments", "Scheduled task blocks", "Google Calendar events", "Breaks & available time"],
    shot: {
      caption: "Weekly Timetable",
      purpose: "See how work fits around commitments and calendar events.",
      url: "app.zentime.app/timetable",
      wireframe: "timetable",
      src: "/screenshots/timetable.jpg",
    },
  },
  {
    id: "focus",
    icon: Timer,
    eyebrow: "Focus & Pomodoro",
    title: "When it’s time, start immediately.",
    short: "Go from a scheduled task straight into a focus session — then mark it complete.",
    desc: "Planning does not stop when the schedule is created. From a scheduled block, start a focus session or Pomodoro, do the work, and complete the task. ZenTime bridges the gap between knowing what to do and actually doing it.",
    points: ["Scheduled task → Start Focus", "Pomodoro sessions", "Stay with the current block", "Complete when finished"],
    shot: {
      caption: "Focus & Pomodoro",
      purpose: "Connect planning directly to execution.",
      url: "app.zentime.app/focus",
      wireframe: "pomodoro",
      src: "/screenshots/pomodoro.jpg",
    },
  },
  {
    id: "stats",
    icon: BarChart3,
    eyebrow: "Execution history",
    title: "See what you’ve actually accomplished.",
    short: "Completion and focus history so finished work becomes a record of execution.",
    desc: "ZenTime retains information about completed work and focus sessions — so you can see completion history, time spent and momentum over time. Finished work does not disappear; it becomes part of your execution record.",
    points: ["Completion history", "Focus time", "Time by project", "Weekly momentum"],
    shot: {
      caption: "Statistics",
      purpose: "Understand what you’ve actually accomplished.",
      url: "app.zentime.app/stats",
      wireframe: "stats",
      // Two complementary views of the same Insights page.
      src: ["/screenshots/stats-1.jpg", "/screenshots/stats-2.jpg"],
      srcAlts: [
        "ZenTime Insights overview — focus time, streak, sessions and peak hours",
        "ZenTime Insights detail — time by project and completion",
      ],
    },
  },
];

/** Ordered gallery for the “From Plan to Execution” story. */
export const GALLERY = [
  {
    id: "gallery-tasks",
    caption: "Tasks",
    purpose: "Dump your workload into ZenTime.",
    url: "app.zentime.app/tasks",
    wireframe: "tasks",
    src: "/screenshots/tasks.png",
  },
  {
    id: "gallery-today",
    caption: "Today's Plan",
    purpose: "ZenTime turns it into today’s plan.",
    url: "app.zentime.app/today",
    wireframe: "today",
    src: "/screenshots/todays-plan.jpg",
  },
  {
    id: "gallery-timetable",
    caption: "Weekly Timetable",
    purpose: "See how it fits into your week — including calendar events.",
    url: "app.zentime.app/timetable",
    wireframe: "timetable",
    src: "/screenshots/timetable.jpg",
  },
  {
    id: "gallery-pomodoro",
    caption: "Pomodoro",
    purpose: "When the time comes, start and actually do the work.",
    url: "app.zentime.app/focus",
    wireframe: "pomodoro",
    src: "/screenshots/pomodoro.jpg",
  },
  {
    id: "gallery-stats-overview",
    caption: "Insights",
    purpose: "Focus time, streak and rhythm at a glance.",
    url: "app.zentime.app/stats",
    wireframe: "stats",
    src: "/screenshots/stats-1.jpg",
  },
  {
    id: "gallery-stats-detail",
    caption: "Time by project",
    purpose: "See where focus went — and what you completed.",
    url: "app.zentime.app/stats",
    wireframe: "stats",
    src: "/screenshots/stats-2.jpg",
  },
];
