import { baseFeatureFlags } from "./config";
import type { FeatureFlags } from "./types";

type FeatureMode = "all_on" | "all_off" | "custom";

const GLOBAL_MODE = (import.meta.env.VITE_FEATURE_MODE ||
  "custom") as FeatureMode;

const applyGlobalMode = (flags: FeatureFlags): FeatureFlags => {
  if (GLOBAL_MODE === "all_on") {
    return Object.keys(flags).reduce((acc, key) => {
      acc[key as keyof FeatureFlags] = true;
      return acc;
    }, {} as FeatureFlags);
  }

  if (GLOBAL_MODE === "all_off") {
    return Object.keys(flags).reduce((acc, key) => {
      acc[key as keyof FeatureFlags] = false;
      return acc;
    }, {} as FeatureFlags);
  }

  return flags;
};

export const resolveFeatureFlags = (
  runtimeOverrides: Partial<FeatureFlags> = {},
): FeatureFlags => {
  const globalApplied = applyGlobalMode(baseFeatureFlags);

  return {
    ...globalApplied,
    ...runtimeOverrides, // highest priority
  };
};
