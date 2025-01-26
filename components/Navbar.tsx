"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaBars, FaTimes, FaHeart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const username = "John Doe"; // Replace with the dynamic username if needed

  return (
    <nav className="bg-[#C8AD84] text-white mb-32">
      <div className="min-w-full flex items-center justify-between py-4 px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center -ml-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute top-16 left-0 w-full bg-white text-black rounded-full  font-bold md:static md:flex md:ml-32 md:items-center md:space-x-6 md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            className="block px-10 py-4   bg-[#9C7A4D] rounded-full text-white  transition-all duration-200"
            href="/"
          >
            Home
          </Link>
          <Link
            className="block px-10 py-4 rounded-lg  transition-all duration-200"
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className="block px-10 py-4 rounded-lg  transition-all duration-200"
            href="/offer"
          >
            Offer
          </Link>
          <Link
            className="block px-10 py-4 rounded-lg  transition-all duration-200"
            href="/blog"
          >
            Blog
          </Link>
        </div>

        {/* Shopping Cart and User Profile */}
        <div className="flex items-center space-x-8">
          <button className="relative">
            <FaHeart className="text-3xl text-black" />
          </button>
          <button className="relative">
            <FaShoppingCart className="text-3xl text-black" />
          </button>
          
          {/* User Icon with Hoverable Dropdown Menu */}
          <div className="relative group">
            <button className="relative">
              <FaUser fill="#88683e" className="text-3xl text-black" />
            </button>

            {/* Dropdown Menu */}
            <div
              className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 py-2 text-black font-medium opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
            >
              <p className="px-4 py-2 text-sm text-gray-600">Hi, {username}!</p>
              <div className="space-y-2">
                <Link
                  className="block px-4 py-2 text-sm hover:bg-[#9C7A4D] hover:text-white"
                  href="/account"
                >
                  My Account
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-[#9C7A4D] hover:text-white"
                  href="/wishlist"
                >
                  My Wishlist
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-[#9C7A4D] hover:text-white"
                  href="/order"
                >
                  My Orders
                </Link>
                <Link
                  className="block px-4 py-2 text-sm hover:bg-[#9C7A4D] hover:text-white"
                  href="/login"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
