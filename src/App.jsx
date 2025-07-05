import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartProvider from "./context/cartcontext/CartProvider";
import { Toaster } from "react-hot-toast";
import MobileNav from "./components/MobileNav";
import ProductProvider from "./context/prdouctcontext/ProductProvider";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <MobileNav />
      </CartProvider>
    </ProductProvider>
  );
}
