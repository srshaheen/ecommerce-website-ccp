import { productsData } from "../data/data";
import ProductCard from "./Product";

export default function ProductList() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-4 gap-y-12 gap-x-8">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
