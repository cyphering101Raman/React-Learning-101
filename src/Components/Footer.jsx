import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#202e50] text-white py-10 border-t border-cyan-500 shadow-inner mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between text-sm gap-10 md:gap-0">

        {/* Company Info */}
        <div className="flex-1 px-4">
          <h2 className="text-lg font-semibold mb-2">Car Wheels</h2>
          <p className="text-gray-300">
            Providing quality services to drivers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 px-4">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 px-4">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-cyan-400">Github</a>
            <a href="#" className="hover:text-cyan-400">Twitter</a>
            <a href="#" className="hover:text-cyan-400">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © Raman Gupta {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
