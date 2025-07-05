import { Delete, Edit } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext/CartContext";

export default function CartView({ product }) {
  const { dispatch } = useContext(CartContext);

  const subTotal = product.quantity * product.newPrice;

  return (
    <div className="grid grid-cols-6 text-center items-center">
      <div className="h-40">
        <img src={product.image} alt="image" className="h-full p-4" />
      </div>
      <p className="text-lg font-bold">{product.name}</p>
      <p className="text-lg">{product.newPrice}</p>
      <div className="flex justify-center">
        <div className="bg-gray-300">
          <button
            onClick={() =>
              product.quantity === 0
                ? dispatch({ type: "Remove", payload: product.id })
                : dispatch({ type: "Decrement", payload: product.id })
            }
            className="text-3xl font-bold px-6 py-2"
          >
            -
          </button>
          <span className="text-xl">{product.quantity}</span>
          <button
            onClick={() => dispatch({ type: "Increment", payload: product.id })}
            className="text-3xl font-bold px-6 py-2"
          >
            +
          </button>
        </div>
      </div>
      <p className="text-lg">{subTotal.toFixed(2)}</p>
      <div className="space-x-3">
        <button>
          <Edit />
        </button>
        <button onClick={() => dispatch({ type: "Remove", payload: product.id })}>
          <Delete />
        </button>
      </div>
    </div>
  );
}
