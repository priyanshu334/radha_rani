"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaBars, FaTimes, FaHeart, FaUser } from "react-icons/fa";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = "Akshat"; // Replace with dynamic username if needed

  return (
    <nav className="bg-[#C8AD84] text-white  -mb-16">
      <div className="w-full flex items-center justify-between py-4 px-6 md:px-8">
        
        {/* Logo (Hidden on Small Screens) */}
        <div className="hidden sm:flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Mobile Menu Button (Visible on Small Screens) */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
            <FaBars className="text-[20px] text-black" />
          </button>
        </div>

        {/* Desktop Navigation (Visible on Medium Screens and Larger) */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/product" },
            { name: "Offer", path: "/shopingbag" },
            { name: "Blog", path: "/blog" },
          ].map((item) => (
            <Link
              key={item.path}
              className="px-4 py-2 rounded-lg hover:font-extrabold transition-all duration-200"
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icons (Always Visible) */}
        <div className="flex items-center space-x-6">
          {[
            { icon: FaShoppingCart, path: "/shopingbag" },
            { icon: FaHeart, path: "/wishlist" },
          ].map(({ icon: Icon, path }) => (
            <Link key={path} href={path}>
              <button className="relative">
                <Icon className="text-[20px] text-black" />
              </button>
            </Link>
          ))}

          {/* User Dropdown */}
          <div className="relative group">
            <button className="relative">
              <FaUser fill="#88683e" className="text-[20px] text-black" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 py-2 text-black font-medium opacity-0 z-50   group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
              <p className="px-4 py-2 text-sm text-gray-600">Hi, {username}!</p>
              <div className="space-y-2">
                {[
                  { name: "My Account", path: "/myprofile" },
                  { name: "My Wishlist", path: "/wishlist" },
                  { name: "My Orders", path: "/order" },
                  { name: "Logout", path: "/login" },
                ].map(({ name, path }) => (
                  <Link
                    key={path}
                    className="block px-4 py-2 text-sm hover:bg-[#9C7A4D] hover:text-white"
                    href={path}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Only for Small Screens) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          {/* Sidebar */}
          <div className="w-4/5 max-w-sm bg-white h-full shadow-lg p-6 flex flex-col">
            <button
              className="self-end text-2xl text-black mb-6"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>
            <nav className="flex flex-col space-y-6 text-black font-semibold">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/product" },
                { name: "Offer", path: "/shopingbag" },
                { name: "Blog", path: "/blog" },
              ].map(({ name, path }) => (
                <Link
                  key={path}
                  className="px-4 py-2 text-lg hover:text-[#9C7A4D]"
                  href={path}
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
