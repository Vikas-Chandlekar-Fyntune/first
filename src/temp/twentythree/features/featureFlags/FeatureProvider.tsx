import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import { resolveFeatureFlags } from "./service";
import type { FeatureFlags } from "./types";

type FeatureContextType = {
  flags: FeatureFlags;
  setRuntimeFlags: (flags: Partial<FeatureFlags>) => void;
  resetRuntimeFlags: () => void;
};

type FeatureProviderProps = {
  children: ReactNode;
};

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

export function FeatureProvider({ children }: FeatureProviderProps) {
  const [runtimeFlags, setRuntimeFlagsState] = useState<Partial<FeatureFlags>>(
    {},
  );

  // Use useCallback to prevent the function from being recreated on every render
  const setRuntimeFlags = useCallback((flags: Partial<FeatureFlags>) => {
    setRuntimeFlagsState((prev) => ({
      ...prev,
      ...flags,
    }));
  }, []);

  const resetRuntimeFlags = useCallback(() => {
    setRuntimeFlagsState({});
  }, []);

  // Compute the flags whenever runtimeFlags change
  const flags = useMemo(() => {
    return resolveFeatureFlags(runtimeFlags);
  }, [runtimeFlags]);

  // Combine flags and stable functions into the context value
  const value = useMemo(() => {
    return {
      flags,
      setRuntimeFlags,
      resetRuntimeFlags,
    };
  }, [flags, setRuntimeFlags, resetRuntimeFlags]);

  return (
    <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>
  );
}

export function useFeatureContext() {
  const context = useContext(FeatureContext);

  if (context === undefined) {
    throw new Error("useFeatureContext must be used within a FeatureProvider");
  }

  return context;
}
