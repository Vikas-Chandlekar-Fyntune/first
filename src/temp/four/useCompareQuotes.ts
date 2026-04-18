import { useCallback, useMemo, useRef, useState } from "react";
import type { ISingleQuoteResponseSchema } from "./types";
import { MAX_QUOTES_TO_COMPARE } from "./constants";

interface IUseCompareQuotesOptions {
  maxCompare?: number;
  onMaxReached?: (max: number, attemptedPolicyId: number) => void;
}

/**
 * Custom hook to manage quote comparison selection.
 * Prevents exceeding maxCompare and avoids repeated alerts.
 */
export default function useCompareQuotes(
  quotes: ISingleQuoteResponseSchema[],
  {
    maxCompare = MAX_QUOTES_TO_COMPARE,
    onMaxReached,
  }: IUseCompareQuotesOptions = {}
) {
  const [compareQuotes, setCompareQuotes] = useState<number[]>([]);
  const lastBlockedIdRef = useRef<number | null>(null);

  /** ✅ Toggle compare selection */
  const toggleCompare = useCallback(
    (policyId: number) => {
      setCompareQuotes((prev) => {
        const isSelected = prev.includes(policyId);

        // --- Case 1: Already selected → remove it
        if (isSelected) {
          lastBlockedIdRef.current = null; // reset alert lock
          return prev.filter((id) => id !== policyId);
        }

        // --- Case 2: Trying to add new item
        if (prev.length >= maxCompare) {
          // Avoid multiple alerts for same item
          if (lastBlockedIdRef.current !== policyId) {
            lastBlockedIdRef.current = policyId;
            onMaxReached?.(maxCompare, policyId);
          }
          return prev; // no change
        }

        // --- Case 3: Add new item normally
        lastBlockedIdRef.current = null;
        return [...prev, policyId];
      });
    },
    [maxCompare, onMaxReached]
  );

  /** ✅ Map for fast lookup */
  const quoteMap = useMemo(
    () => new Map(quotes.map((quote) => [quote.data.policyId, quote])),
    [quotes]
  );

  /** ✅ Derived list of selected quote objects */
  const filteredCompareList = useMemo(() => {
    return compareQuotes
      .map((id) => quoteMap.get(id))
      .filter((q): q is ISingleQuoteResponseSchema => Boolean(q));
  }, [compareQuotes, quoteMap]);

  return {
    compareQuotes,
    toggleCompare,
    filteredCompareList,
    canAddMore: compareQuotes.length < maxCompare,
  };
}
