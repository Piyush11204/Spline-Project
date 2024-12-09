import  { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-600 fixed w-full text-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">🚀 Space Explorer</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none z-20"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link></li>
          <li><Link to="/rocket" className="hover:text-blue-200 transition duration-300">Rocket</Link></li>
          <li><Link to="/globe" className="hover:text-blue-200 transition duration-300">Playground</Link></li>
          <li><Link to="/computer" className="hover:text-blue-200 transition duration-300">Computer</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-teal-600 z-40 pt-20">
          <ul className="flex flex-col items-center gap-8 text-2xl">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-blue-200 transition duration-300">Home</Link></li>
            <li><Link to="/rocket" onClick={toggleMenu} className="hover:text-blue-200 transition duration-300">Rocket</Link></li>
            <li><Link to="/globe" onClick={toggleMenu} className="hover:text-blue-200 transition duration-300">Playground</Link></li>
            <li><Link to="/computer" onClick={toggleMenu} className="hover:text-blue-200 transition duration-300">Computer</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;