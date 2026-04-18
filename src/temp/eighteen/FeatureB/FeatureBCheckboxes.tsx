import { useEffect, useState } from "react";
import { CHECKBOX_CLASS } from "../CheckboxTracker/CheckboxTrackerProvider";

export default function FeatureBCheckboxes() {
  const [checked, setChecked] = useState({ b1: false, b2: false, b3: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      setChecked({ b1: true, b2: true, b3: false });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange =
    (key: "b1" | "b2" | "b3") => (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked((prev) => ({ ...prev, [key]: e.target.checked }));
    };

  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Feature B</h2>

      <label className="flex gap-2">
        <input
          type="checkbox"
          className={CHECKBOX_CLASS}
          data-id="b1"
          checked={checked.b1}
          onChange={handleChange("b1")}
        />
        Option B1
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          className={CHECKBOX_CLASS}
          data-id="b2"
          checked={checked.b2}
          onChange={handleChange("b2")}
        />
        Option B2
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          className={CHECKBOX_CLASS}
          data-id="b3"
          checked={checked.b3}
          onChange={handleChange("b3")}
        />
        Option B3
      </label>
    </div>
  );
}
