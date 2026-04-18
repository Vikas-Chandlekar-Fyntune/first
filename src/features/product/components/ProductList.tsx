import { useState, useCallback, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import type { Product, ProductListProps } from "../types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ProductCard2 from "./ProdcutCard2";

export const ProductList = ({ products, maxCompare }: ProductListProps) => {
  const [compareProducts, setCompareProducts] = useState<number[]>([]);

  const toggleCompare = useCallback(
    (productId: number) => {
      // setCompareProducts((prev) =>
      //   prev.includes(productId) ? prev.filter((pid) => pid !== productId) : [...prev, productId]
      // );

      // Max compare
      setCompareProducts((prev) => {
        const isAlreadySelected = prev.includes(productId);

        // 1️⃣ If already selected — remove it
        if (isAlreadySelected) {
          return prev.filter((id) => id !== productId);
        }

        // 2️⃣ If limit exists and reached — prevent adding
        if (typeof maxCompare === "number" && prev.length >= maxCompare) {
          // eslint-disable-next-line no-console
          console.warn(`Maximum ${maxCompare} products can be compared`);
          return prev;
        }

        // 3️⃣ Add product (keeps selection order)
        return [...prev, productId];
      });
    },
    [maxCompare]
  );

  //   const filteredCompareList = useMemo(
  //     () => products.filter((p) => compareProducts.includes(p.id)),
  //     [products, compareProducts]
  //   );

  // 🧠 Precompute lookup map for O(1) lookups
  const productMap = useMemo(() => {
    const map = new Map<number, Product>();
    for (const p of products) map.set(p.id, p);
    return map;
  }, [products]);

  // ⚡ Efficiently derive compare list
  const filteredCompareList = useMemo(() => {
    return compareProducts
      .map((id) => productMap.get(id))
      .filter((p): p is Product => !!p);
  }, [compareProducts, productMap]);

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isCompared={compareProducts.includes(product.id)}
            onToggleCompare={toggleCompare}
          />
        ))}
      </div>

      {/* <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard2
            key={product.id}
            product={product}
            isCompared={compareProducts.includes(product.id)}
            onToggleCompare={toggleCompare}
            maxCompare={maxCompare}
            compareCount={compareProducts.length}
          />
        ))}
      </div> */}

      {/* Compare List Filter (example) */}
      <div className="col-span-full mt-6">
        <h3 className="font-semibold">Compare Products:</h3>
        {filteredCompareList.length === 0 ? (
          <p>No products selected</p>
        ) : (
          <ul>
            {filteredCompareList.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
