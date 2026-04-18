import FeatureA from "./FeatureA";
import FeatureB from "./FeatureB";
import { useCheckboxDeltaTracker } from "./useCheckboxDeltaTracker";

export default function App() {
  const modifiedCount = useCheckboxDeltaTracker(true); // val1 = true

  return (
    <div>
      <h3>Modified Count: {modifiedCount}</h3>
      <FeatureA />
      <FeatureB />
    </div>
  );
}