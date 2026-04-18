import React from "react";
import type { ProductCard2Props } from "../types";
import cn from "../../../lib/cn";

/**
 * ProductCard2
 * @description ProductCard2
 * Feature :
 * - Disable compare button if limit reached and cursor not allowed
 *
 * Problem :
 * - Re-renders all cards when we click on compare button for one card because compareCount is updated for all cards
 */
export const ProductCard2 = React.memo(
  ({
    product,
    isCompared,
    onToggleCompare,
    maxCompare,
    compareCount,
  }: ProductCard2Props) => {
    // console log for debugging re-renders
    console.log("ProductCard2 Render:", product.name);

    const isDisabled = !!(
      maxCompare &&
      compareCount! >= maxCompare &&
      !isCompared
    );

    return (
      <div className="border rounded-xl shadow p-4 flex flex-col items-start">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>

        <label
          className={cn(
            "mt-2 flex items-center gap-2",
            isDisabled && "cursor-not-allowed opacity-50"
          )}
        >
          <input
            type="checkbox"
            checked={isCompared}
            disabled={isDisabled}
            onChange={() => onToggleCompare(product.id)}
          />
          <span>Compare</span>
        </label>
      </div>
    );
  }
);

export default ProductCard2;
