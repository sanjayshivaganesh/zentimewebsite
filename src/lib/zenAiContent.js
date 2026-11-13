/** Scripted marketing demonstrations based on verified Zen AI tools in the app. */

export const ZEN_AI_DISCLAIMER =
  "Demonstration of Zen AI in the ZenTime app. It is not connected to your account.";

export const ZEN_AI_DEMOS = [
  {
    id: "tasks",
    label: "Natural language",
    heading: "Describe the work. Zen AI captures it.",
    body: "Create, update, and complete tasks in conversation instead of filling a form for every item. Titles, durations, deadlines, and priorities are stored as real tasks in your workspace.",
    user: "Add a Physics assignment due Friday, 2 hours, high priority, and a 90-minute organic chemistry revision for tomorrow.",
    assistant:
      "Created two tasks in your list — they are not on the timetable yet until you ask to organise the day.",
    result: {
      kind: "tasks",
      items: [
        { title: "Physics assignment", meta: "Fri · 2h · High" },
        { title: "Revise organic chemistry", meta: "Tomorrow · 90m · Medium" },
      ],
    },
  },
  {
    id: "plan",
    label: "Day planning",
    heading: "Ask it to organise the day. The scheduler places the work.",
    body: "Zen AI does not invent time blocks. It sends constraints to ZenTime’s priority-based scheduler, which places work around lectures, events, and other busy time. You preview the timetable, then apply or discard it.",
    user: "I need to finish my Physics assignment, revise organic chemistry and work on my project today. Can you organise my day?",
    assistant:
      "I’ve organised those tasks around your existing commitments. Preview the placements before anything is applied.",
    result: {
      kind: "plan",
      constraint: "Today · keep 11:00–13:00 lecture · respect durations",
      scheduled: [
        { time: "09:00–11:00", title: "Physics assignment", tag: "Work" },
        { time: "11:00–13:00", title: "Molecular Biology lecture", tag: "Busy" },
        { time: "13:30–15:00", title: "Revise organic chemistry", tag: "Work" },
        { time: "15:15–17:15", title: "Project work", tag: "Work" },
      ],
      unscheduled: ["Gym — no open 60m block after 17:30"],
    },
  },
  {
    id: "workload",
    label: "Workload",
    heading: "Ask whether the day actually fits.",
    body: "Workload answers use outstanding tasks, estimated durations, deadlines, and remaining free time. They are feasibility checks — not a promise that everything will finish.",
    user: "Do I have enough time to finish everything tomorrow?",
    assistant:
      "Tomorrow has about 4h 15m of open time after commitments. Three open tasks total ~5h 30m. Physics still fits before the lab; the essay draft likely spills unless you shorten it or move it.",
    result: {
      kind: "workload",
      open: "4h 15m after commitments",
      needed: "~5h 30m estimated",
      note: "Feasible if the essay is split or deferred — not a guarantee.",
    },
  },
  {
    id: "decompose",
    label: "Breakdown",
    heading: "Turn a vague project into steps you can schedule.",
    body: "Decomposition proposes subtasks with optional durations and order. You review a breakdown preview, then apply it. The parent stays in Tasks; the steps become work the scheduler can place.",
    user: "Break the university application essay into manageable tasks.",
    assistant: "Proposed four steps with a suggested order. Apply the breakdown to add them as subtasks.",
    result: {
      kind: "decompose",
      parent: "University application essay · due 18 Nov",
      steps: [
        { title: "Outline argument", meta: "~30m" },
        { title: "Draft introduction", meta: "~45m · after outline" },
        { title: "Draft body", meta: "~90m · after intro" },
        { title: "Edit and proof", meta: "~40m · after body" },
      ],
    },
  },
  {
    id: "next",
    label: "What’s next",
    heading: "The next task is the same one the timetable would start.",
    body: "Next-task recommendations reuse the same Autopilot decision as Today’s Plan and Focus: current block, then the next scheduled block, then a ranked fallback. Zen AI does not pick a different “best” task in chat.",
    user: "What should I work on next?",
    assistant: "Your timetable has Physics assignment in progress until 11:00. That’s the next action — not a separate suggestion.",
    result: {
      kind: "next",
      title: "Physics assignment",
      window: "09:00–11:00 · scheduled now",
    },
  },
  {
    id: "execute",
    label: "Plan & Execute",
    heading: "From a sentence to a focus session.",
    body: "When you ask to add work and organise the day, Zen AI can create the tasks, preview the schedule, and — after you apply — offer to start the next scheduled task in Focus Workspace.",
    user: "Add Physics, chemistry revision, and project work to today’s schedule.",
    assistant:
      "Created the tasks and placed them around your lecture. Physics is next on the timetable. Start it in Focus when you are ready.",
    result: {
      kind: "execute",
      scheduled: "3 placed · 1 unscheduled",
      offerTitle: "Physics assignment",
      offerTime: "09:00 – 11:00",
      offerCta: "Start Physics assignment",
    },
  },
];
