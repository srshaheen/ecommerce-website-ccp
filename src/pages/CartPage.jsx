import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartcontext/CartContext";
import CartView from "../components/CartView";

export default function CartPage() {
  const { cart, grandTotal } = useContext(CartContext);

  return (
    <section>
      {/* cart intro */}
      <div className="bg-[#e7e7e7] text-center py-20">
        <h2 className="text-4xl font-bold text-gray-800">Cart</h2>
        <div className="text-gray-700 text-xl font-semibold mt-4">
          <Link to="/">Home</Link>
          <span>&nbsp;/&nbsp;</span>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      {/* cart view */}
      <div className="max-w-6xl mx-auto my-16 border-1 border-gray-300">
        <div className="grid grid-cols-6 py-6 bg-gray-200 text-center font-bold text-xl">
          <div>
            <h3>IMAGE</h3>
          </div>
          <div>
            <h3>PRODUCT NAME</h3>
          </div>
          <div>UNIT PRICE</div>
          <div>QTY</div>
          <div>SUBTOTAL</div>
          <div>ACTION</div>
        </div>

        {cart.length === 0 ? (
          <p className="text-center my-12 text-red-400">No Product found</p>
        ) : (
          cart.map((product) => <CartView key={product.id} product={product} />)
        )}
        <p>Grandtotal: {grandTotal.toFixed(2)}</p>
      </div>
    </section>
  );
}
