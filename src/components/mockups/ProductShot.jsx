import WindowFrame from "@/components/mockups/WindowFrame";
import { ScreenshotPlaceholder } from "@/components/mockups/Placeholders";
import { cn } from "@/lib/utils";

/** Real product screenshot in window chrome, with placeholder fallback. */
export default function ProductShot({
  src,
  alt,
  url,
  caption,
  purpose,
  wireframe = "app",
  className = "",
  testId,
}) {
  if (!src) {
    return (
      <ScreenshotPlaceholder
        variant="browser"
        url={url}
        caption={caption}
        purpose={purpose}
        wireframe={wireframe}
        testId={testId}
        className={className}
      />
    );
  }

  return (
    <WindowFrame variant="browser" url={url} title={caption} className={className} testId={testId}>
      <img
        src={src}
        alt={alt || caption || "ZenTime screenshot"}
        className={cn("block w-full bg-muted/40")}
      />
    </WindowFrame>
  );
}
