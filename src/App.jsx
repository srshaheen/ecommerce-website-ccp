import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartProvider";
import { Toaster } from "react-hot-toast";
import MobileNav from "./components/MobileNav";

export default function App() {
  return (
    <CartProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <MobileNav />
    </CartProvider>
  );
}
