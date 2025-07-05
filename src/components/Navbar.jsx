import { Link } from "react-router-dom";
import Select from "./Select";
import { BaggageClaim, Search, ShoppingCart, UserRound } from "lucide-react";
import NavMenu from "./NavMenu";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="py-2 bg-gray-700 text-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-2 md:px-0">
          <p className="text-orange-500">Welcome to Bazario</p>
          <div className="flex divide-x divide-gray-600">
            <Select options={["English", "Bangla"]} />
            <Select options={["USD", "BDT"]} />
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-2 md:px-0">
          <Link to="/">
            <h2 className="font-bold text-3xl">Bazario</h2>
          </Link>
          <div className="flex justify-center items-center divide-x divide-gray-300">
            <div className="px-6 hover:text-orange-400 transition-all cursor-pointer">
              <Search strokeWidth={1} />
            </div>
            <div className="px-6 hover:text-orange-400 transition-all cursor-pointer">
              <UserRound strokeWidth={1} />
            </div>
            <Link to="/cart" className="pl-6 hover:text-orange-400 transition-all cursor-pointer relative">
              <ShoppingCart strokeWidth={1} />

              <span className="absolute -inset-y-2 -right-2 bg-orange-400 h-5 w-5 text-white text-center rounded-full">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <NavMenu />
    </>
  );
}
