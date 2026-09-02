import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";

// Captures the browser's install prompt so we can offer a real PWA install.
export default function usePwaInstall() {
  const [deferred, setDeferred] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferred(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  return useCallback(async () => {
    if (deferred) {
      deferred.prompt();
      const { outcome } = await deferred.userChoice;
      if (outcome === "accepted") toast.success("Installing ZenTime\u2026");
      setDeferred(null);
    } else {
      toast.info("Open your browser menu \u2192 \u201cInstall app\u201d to add ZenTime to your device.");
    }
  }, [deferred]);
}
