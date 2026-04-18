import React from "react";
import type { ProductCardProps } from "../types";
import cn from "../../../lib/cn";

export const ProductCard = React.memo(
  ({ product, isCompared, onToggleCompare }: ProductCardProps) => {
    // eslint-disable-next-line no-console
    console.log("Render:", product.name); // debug re-renders

    return (
      <div className="border rounded-xl shadow p-4 flex flex-col items-start">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>

        <label className={cn("mt-2 flex items-center gap-2 cursor-pointer")}>
          <input
            type="checkbox"
            checked={isCompared}
            onChange={() => onToggleCompare(product.id)}
          />
          <span>Compare</span>
        </label>
      </div>
    );
  }
);
