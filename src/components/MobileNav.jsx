import { GitCompareArrows, Heart, HomeIcon, ShoppingCart, User } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="bg-gray-800 fixed inset-x-0 bottom-0 md:hidden">
      <div className="max-w-6xl mx-auto flex justify-between py-3 text-white px-2 md:px-0">
        <div className="flex flex-col items-center">
          <Heart />
          <p>Wishlist</p>
        </div>

        <GitCompareArrows />
        <HomeIcon />
        <ShoppingCart />
        <User />
      </div>
    </div>
  );
}
