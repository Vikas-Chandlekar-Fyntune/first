import { useEffect, useState } from "react";
import { CHECKBOX_CLASS } from "../CheckboxTracker/CheckboxTrackerProvider";

export default function FeatureACheckboxes() {
  const [checkedItems, setCheckedItems] = useState({ a1: false, a2: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCheckedItems({ a1: true, a2: false });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange =
    (key: "a1" | "a2") => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems((prev) => ({ ...prev, [key]: e.target.checked }));
    };

  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Feature A</h2>

      <label className="flex gap-2">
        <input
          type="checkbox"
          className={CHECKBOX_CLASS}
          data-id="a1"
          checked={checkedItems.a1}
          onChange={handleChange("a1")}
        />
        Option A1 (prefilled)
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          className={CHECKBOX_CLASS}
          data-id="a2"
          checked={checkedItems.a2}
          onChange={handleChange("a2")}
        />
        Option A2
      </label>
    </div>
  );
}
