import ProductCard from "./Product";
import { useContext } from "react";
import { ProductContext } from "../context/prdouctcontext/ProductContext";

export default function ProductList({ searchText, sortOption }) {
  const { products } = useContext(ProductContext);

  const filterProduct = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));

  const sortedProduct = filterProduct.sort((a, b) => {
    if (sortOption === "low-to-high") {
      return a.newPrice - b.newPrice;
    } else if (sortOption === "high-to-low") {
      return b.newPrice - a.newPrice;
    } else {
      return 0;
    }
  });

  return (
    <div className=" min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-y-12 gap-x-8">
        {sortedProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
