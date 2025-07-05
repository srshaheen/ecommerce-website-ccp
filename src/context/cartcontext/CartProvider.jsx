import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { CartReducer } from "./CartReducer";

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, []);

  const grandTotal = cart.reduce((acc, product) => acc + product.quantity * product.newPrice, 0);

  return <CartContext.Provider value={{ cart, dispatch, grandTotal }}>{children}</CartContext.Provider>;
}
