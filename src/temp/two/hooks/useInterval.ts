/* eslint-disable no-console */
import { useEffect, useRef } from "react";

function useInterval(
  cb: () => void,
  delay: number = 2000,
  deps: unknown[] = []
) {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Clear any previous timer before creating a new one
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(cb, delay);
    console.log("Interval started:", timerRef.current);

    // Cleanup on unmount or dependency change
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        console.log("Interval cleared:", timerRef.current);
      }
    };
  }, [cb, delay, ...deps]); // 👈 moved spread inside array literal

  // No return value, purely effect-based
}

export default useInterval;
