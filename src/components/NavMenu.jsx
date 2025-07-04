import { Link } from "react-router-dom";
import { navLinks } from "../data/data";

export default function NavMenu() {
  return (
    <div className="bg-gray-700">
      <nav className="max-w-6xl mx-auto text-white">
        <ul className="flex gap-12 justify-center items-center py-4">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="hover:text-orange-400 transition-all">
              <Link to={navLink.path}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
