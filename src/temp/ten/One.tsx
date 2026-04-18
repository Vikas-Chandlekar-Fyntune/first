import { useEffect, useRef, useState } from "react";

type TItems = number[];

function CounterWithItems({
  items,
  onClick,
}: {
  items: TItems;
  onClick: () => void;
}) {
  console.log("CounterWithItems re render...........");
  const [count, setCount] = useState(0);
  //   const [items, setItems] = useState([]);
  //   const items: number[] = [];
  const itemsRef = useRef<number[]>(items); // ✅ stable reference

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //   useEffect(() => {
  //     console.log("Api called...........");
  //   }, [items]);

  useEffect(() => {
    console.log("Api called...........");
  }, [items]); // ✅ will NOT re-run on count change

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function One() {
  console.log("One re render...........");
  const [items, setItems] = useState<TItems>([]);
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <button onClick={() => setIsToggle((p) => !p)}>
        {isToggle ? "ON" : "OFF"}
      </button>
      <CounterWithItems items={items} onClick={() => {}} />
    </div>
  );
}

export default One;
