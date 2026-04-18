import { useState } from "react";
import { cricketers as initialData } from "./data";
import CricketerCard from "./components/CricketerCard";

export default function One() {
  const [players, setPlayers] = useState(initialData);

  const handleRemove = (id) => {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      {players.map((player, index) => (
        <CricketerCard
          key={index} // as requested (but not recommended)
          cricketer={player}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
}
