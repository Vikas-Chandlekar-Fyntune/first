import { useEffect, useState } from "react";

const One = () => {
  const [toggled, setToggled] = useState(false);

  useWatchWithDelay(
    toggled,
    (val) => {
      console.log("Execute action with:", val);
    },
    500,
  );

  return (
    <>
      <button onClick={() => setToggled((p) => !p)}>
        {toggled ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default One;

function useWatchWithDelay(value, action, delay = 300) {
  useEffect(() => {
    const timer = setTimeout(() => {
      action(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, action, delay]);
}
