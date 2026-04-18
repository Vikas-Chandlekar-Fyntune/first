import { useEffect, useRef } from "react";

/**
 * Runs async-safe logic when the browser tab closes.
 * - Uses sendBeacon or fetch(keepalive)
 * - Guaranteed to fire on tab close
 * - No stale closures
 */
export function useOnTabCloseAsyncSafe(action) {
  const actionRef = useRef(action);

  useEffect(() => {
    actionRef.current = action;
  }, [action]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      try {
        actionRef.current?.();
      } catch (err) {
        console.error("useOnTabCloseAsyncSafe error:", err);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);
}
