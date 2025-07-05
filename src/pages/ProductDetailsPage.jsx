import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/prdouctcontext/ProductContext";

export default function ProductDetailsPage() {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  console.log(id);

  const product = products.find((product) => product.id.toLocaleString() === id);

  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
}
