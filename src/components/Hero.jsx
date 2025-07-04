export default function Hero() {
  return (
    <div className="bg-[#e7e7e7]">
      <div className="max-w-6xl h-screen mx-auto flex flex-col md:flex-row justify-between items-center px-2 md:px-0">
        <div className="flex-1">
          <p className="text-xl text-gray-700 font-semibold">Best Seller</p>
          <h1 className="text-7xl font-bold text-gray-800 pb-8 pt-4">Creative Sofa</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facere minus excepturi illo, ipsam quam
            quos esse ipsum. Magnam, saepe!
          </p>
          <button className="block px-8 py-3 mt-12 bg-orange-400 text-white hover:bg-orange-600 cursor-pointer transition-all duration-300">
            Shop Now
          </button>
        </div>
        <div className="flex-1">
          <img src="./slider1.png" alt="slider image sofa" />
        </div>
      </div>
    </div>
  );
}
