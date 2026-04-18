import { memo } from "react";

const CricketerCard = ({ cricketer, onRemove }) => {
  console.count("Rendering CricketerCard");
  const { id, name, runs, matches } = cricketer;

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg border">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">
          Runs: {runs} | Matches: {matches}
        </p>
      </div>

      <button
        onClick={() => onRemove(id)}
        className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

// export default CricketerCard;

export default memo(CricketerCard);
