import { useEffect, useRef, useState, useCallback } from "react";

type UseCheckboxDeltaTrackerReturn = {
  modifiedCount: number;
  resetChanges: () => void;
};

export function useCheckboxDeltaTracker1(
  val1: boolean,
  className: string = "tracked-checkbox",
  resetTrigger?: unknown, // can be number | boolean | string depending on usage
): UseCheckboxDeltaTrackerReturn {
  const initialRef = useRef<Set<string> | null>(null); // baseline
  const currentRef = useRef<Set<string>>(new Set()); // live state
  const [modifiedCount, setModifiedCount] = useState<number>(0);

  const getCheckedIds = (): Set<string> => {
    const nodes = document.querySelectorAll<HTMLInputElement>(`.${className}`);
    const set = new Set<string>();

    nodes.forEach((node) => {
      if (node.checked) {
        const id = node.getAttribute("data-id");
        if (id) set.add(id);
      }
    });

    return set;
  };

  // ✅ capture initial (async safe)
  useEffect(() => {
    if (!val1) return;

    const timer = setTimeout(() => {
      const initial = getCheckedIds();
      initialRef.current = initial;
      currentRef.current = new Set(initial);
      setModifiedCount(0);
    }, 300);

    return () => clearTimeout(timer);
  }, [val1]);

  // ✅ RESET FUNCTION (manual)
  const resetChanges = useCallback((): void => {
    // const current = getCheckedIds();
    const current = [];

    initialRef.current = new Set(current);
    currentRef.current = new Set(current);
    setModifiedCount(0);
  }, []);

  // ✅ external reset trigger (optional)
  useEffect(() => {
    if (!val1 || !resetTrigger) return;

    resetChanges();
  }, [resetTrigger, val1, resetChanges]);

  // ✅ listen changes
  useEffect(() => {
    if (!val1) return;

    const handler = (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (!target.classList.contains(className)) return;

      const id = target.getAttribute("data-id");
      if (!id) return;

      if (target.checked) {
        currentRef.current.add(id);
      } else {
        currentRef.current.delete(id);
      }

      const initial = initialRef.current || new Set<string>();
      const current = currentRef.current;

      let count = 0;

      current.forEach((id) => {
        if (!initial.has(id)) count++;
      });

      initial.forEach((id) => {
        if (!current.has(id)) count++;
      });

      setModifiedCount(count);
    };

    document.addEventListener("change", handler);
    return () => document.removeEventListener("change", handler);
  }, [val1, className]);

  return { modifiedCount, resetChanges };
}
