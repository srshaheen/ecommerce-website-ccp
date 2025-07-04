import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <div className="flex gap-5">
      {cart.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => dispatch({ type: "Remove", payload: product.id })} className="text-2xl px-4">
            X
          </button>
        </div>
      ))}
    </div>
  );
}
