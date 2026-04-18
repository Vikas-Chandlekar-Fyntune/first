import { ProductList } from "../components/ProductList";
import products from "../data";

const ProductPage = () => {
  return (
    <>
      <h1 className="text-5xl">Product Page</h1>

      <ProductList
        products={products}
        //   maxCompare={2}
      />
    </>
  );
};

export default ProductPage;
