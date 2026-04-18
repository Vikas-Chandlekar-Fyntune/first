import CheckboxTrackerProvider from "./CheckboxTracker/CheckboxTrackerProvider";
import FeatureACheckboxes from "./FeatureA/FeatureACheckboxes";
import FeatureBCheckboxes from "./FeatureB/FeatureBCheckboxes";

export default function App() {
  return (
    <CheckboxTrackerProvider>
      <FeatureACheckboxes />
      <FeatureBCheckboxes />
    </CheckboxTrackerProvider>
  );
}
