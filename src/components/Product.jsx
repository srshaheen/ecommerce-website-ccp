import { useContext } from "react";
import { CartContext } from "../context/cartcontext/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();

    dispatch({ type: "Add", payload: product });
    toast.success("Added to Cart Successfully");
  };

  return (
    <div className="max-w-[300px] text-center  shadow rounded-lg relative group overflow-hidden">
      <Link to={`product/${product.id}`}>
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded hover:scale-110 transition" />
          <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
        </div>

        <h3 className="text-xl font-bold text-gray-700 mt-3">{product.name}</h3>

        <p className="text-lg font-semibold text-gray-500 mt-1">
          <del className="mr-2">${product.oldPrice}</del>
          <span className="text-black">${product.newPrice}</span>
        </p>
      </Link>

      <button
        onClick={handleAddToCart}
        className="py-1 bg-orange-400 w-full mt-3 text-white text-lg rounded hover:bg-orange-500 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
