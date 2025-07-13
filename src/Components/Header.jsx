import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-[#202e50] text-white">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-20 rounded-xl" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="links flex-1 flex justify-center">
          <ul className="list-none flex gap-10 text-lg font-semibold tracking-wide">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="auth">
          <div className="btns flex gap-4">
            <Link to="/login">
              <button className="px-5 py-2 border border-cyan-500 rounded hover:bg-cyan-500 transition">Login</button>
            </Link>
            <Link to="/signup">
              <button className="px-5 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-400 transition">Sign-up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
