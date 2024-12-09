
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 fixed w-full text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">🚀 Space Explorer</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/rocket"
              className="hover:text-blue-200 transition duration-300"
            >
              Rocket
            </Link>
          </li>
            <li>
                <Link
                to="/globe"
                className="hover:text-blue-200 transition duration-300"
                >
                Globe
                </Link>
            </li>
            <li>
                <Link
                to="/computer"
                className="hover:text-blue-200 transition duration-300"
                >
                Computer
                </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
