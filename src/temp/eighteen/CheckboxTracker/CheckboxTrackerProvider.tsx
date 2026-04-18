import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export const CHECKBOX_CLASS = "track-checkbox";

const CheckboxTrackerContext = createContext({});
export const useCheckboxTracker = () => useContext(CheckboxTrackerContext);

export default function CheckboxTrackerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const initialChecked = useRef(new Set<string>());
  const added = useRef(new Set<string>());
  const removed = useRef(new Set<string>());

  const getId = (el: HTMLInputElement) => el.dataset.id ?? "";

  const snapshot = () => {
    const container = containerRef.current;
    if (!container) return;

    // Reset everything and re-baseline from current DOM state
    initialChecked.current.clear();
    added.current.clear();
    removed.current.clear();
    setCount(0);
    setHasInteracted(false);

    container
      .querySelectorAll<HTMLInputElement>(`.${CHECKBOX_CLASS}`)
      .forEach((el) => {
        if (el.checked) initialChecked.current.add(getId(el));
      });
  };

  // Re-snapshot whenever children re-render (catches async prefills)
  useLayoutEffect(() => {
    // Small delay so async state (setTimeout in features) settles first
    const timer = setTimeout(snapshot, 50);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleChange = (e: Event) => {
      const el = e.target as HTMLInputElement;
      if (
        el.tagName !== "INPUT" ||
        el.type !== "checkbox" ||
        !el.classList.contains(CHECKBOX_CLASS)
      ) return;

      const id = getId(el);
      if (!id) return;

      setHasInteracted(true);

      const wasInitiallyChecked = initialChecked.current.has(id);

      if (wasInitiallyChecked) {
        if (!el.checked) removed.current.add(id);
        else             removed.current.delete(id);
      } else {
        if (el.checked) added.current.add(id);
        else            added.current.delete(id);
      }

      setCount(added.current.size + removed.current.size);
    };

    container.addEventListener("change", handleChange);
    return () => container.removeEventListener("change", handleChange);
  }, []);

  return (
    <CheckboxTrackerContext.Provider value={{}}>
      <div ref={containerRef}>
        {hasInteracted && count > 0 && (
          <div className="mb-3 text-sm text-blue-600">
            Modified Count: {count}
          </div>
        )}
        {children}
      </div>
    </CheckboxTrackerContext.Provider>
  );
}
