import { useState } from "react";
import useInterval from "./hooks/useInterval";

const logger = (data: any) => console.log(`logger : ${data}`);

const One = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setCount((p) => p + 1);

  const logger2 = () => console.log(`logger2 : ${count}`);

  // useInterval(logger, 1000, [count]);
  useInterval(logger2, 3000, [count]);

  return (
    <>
      <div>One</div>
      <div>{count}</div>
      <button onClick={handleClick} className="bg-blue-500 cursor-pointer">
        +
      </button>
      <button onClick={() => setToggle((p) => !p)}>
        Toggle {toggle ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default One;
