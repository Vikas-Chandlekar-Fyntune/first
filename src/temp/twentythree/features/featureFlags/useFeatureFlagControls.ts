import { useFeatureContext } from "./FeatureProvider";
import type { useFeatureFlags } from "./useFeatureFlags";

export const useFeatureFlagControls = () => {
  const { setRuntimeFlags, resetRuntimeFlags } = useFeatureContext();

  return {
    enable: (key: keyof ReturnType<typeof useFeatureFlags>) =>
      setRuntimeFlags({ [key]: true }),

    disable: (key: keyof ReturnType<typeof useFeatureFlags>) =>
      setRuntimeFlags({ [key]: false }),

    setRuntimeFlags,
    resetRuntimeFlags,
  };
};
