import { createContext } from "react";
import { productsData } from "../../data/data";

export const ProductContext = createContext({
  products: productsData,
  dispatch: () => {},
});
