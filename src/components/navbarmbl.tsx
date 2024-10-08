import React, { useState } from "react";
import Link from "next/link";

export default function NavbarMbl() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:hidden bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-lg">
          <Link href="/">MTS Tech Solutions</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block absolute lg:relative top-16 left-0 right-0 lg:top-0 lg:flex lg:space-x-6 bg-gray-800 lg:bg-transparent p-4 lg:p-0 z-50`}
        >
          <Link href="/" className="block text-white py-2 lg:inline">
            Home
          </Link>
          <Link href="/about" className="block text-white py-2 lg:inline">
            About
          </Link>
          <Link href="/services" className="block text-white py-2 lg:inline">
            Services
          </Link>
          <Link href="/contact" className="block text-white py-2 lg:inline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
