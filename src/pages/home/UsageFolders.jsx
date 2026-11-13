import { useEffect, useState } from "react";
import FolderFloat from "@/components/bits/FolderFloat";
import SectionHeading from "@/components/SectionHeading";

const FOLDER = {
  folderColor: "#1c2740",
  frontColor: "#3d5cb8",
  paperColor: "#e8eefc",
  itemColor: "#f4f7ff",
  itemTextColor: "#0f172a",
  labelColor: "#f8fafc",
  closeOnSelect: false,
  physics: true,
  drift: 0.45,
};

const FOLDERS = [
  {
    label: "A typical day",
    sublabel: "What usually piles up",
    items: ["Lectures until 4", "CAS forms", "Exam next week", "Gym", "Side project"],
  },
  {
    label: "Then ZenTime",
    sublabel: "How you actually use it",
    items: ["Capture the list", "Connect calendar", "Open Today’s Plan", "Start focus", "Check insights"],
  },
];

export default function UsageFolders() {
  const [trigger, setTrigger] = useState("click");

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setTrigger(mq.matches ? "hover" : "click");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section data-band="muted" className="relative overflow-x-hidden border-y border-border/70 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How people use it"
          title="Open the week. Pull out the next thing."
          description="Hover or tap a folder. The notes are the same loop ZenTime is built around — capture the load, fit it around real time, then start."
        />

        <div className="mt-8 flex justify-center">
          <p className="text-xs text-muted-foreground">
            {trigger === "hover" ? "Hover a folder — drag a note if you like." : "Tap a folder to open it."}
          </p>
        </div>

        <div className="mt-28 flex flex-col items-center justify-center gap-28 pb-8 sm:mt-32 sm:flex-row sm:items-end sm:gap-24 lg:gap-36">
          {FOLDERS.map((folder) => (
            <FolderFloat
              key={folder.label}
              {...FOLDER}
              {...folder}
              trigger={trigger}
              width={210}
              height={154}
              spread={168}
              lift={34}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
