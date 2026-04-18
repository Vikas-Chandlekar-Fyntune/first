import { useFeatureContext } from "./FeatureProvider";

export const useFeatureFlags = () => {
  const { flags } = useFeatureContext();
  return flags;
};
