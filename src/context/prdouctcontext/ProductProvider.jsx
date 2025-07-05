import { useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { ProductReducer } from "./ProductReducer";
import { productsData } from "../../data/data";

export default function ProductProvider({ children }) {
  const [products, dispatch] = useReducer(ProductReducer, productsData);

  return <ProductContext.Provider value={{ products, dispatch }}>{children}</ProductContext.Provider>;
}
