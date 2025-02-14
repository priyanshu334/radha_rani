'use client';

import React from 'react';
import Link from 'next/link';

const ProfileTabs = () => {
  return (
    <div className="bg-[#C8AD84] text-white mx-4 sm:mx-10 lg:mx-14 md:my-6 mt-24 sm:my-10 sm:mt-20 py-4 px-4 shadow-md rounded-lg">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around gap-3 sm:gap-4 text-center">
        <Link
          href="/"
          className="w-full sm:w-auto px-4 py-2 font-extrabold text-black bg-white hover:bg-opacity-90 hover:text-[#C8AD84] rounded-lg transition"
        >
          My Profile
        </Link>
        <Link
          href="/myaddress"
          className="w-full sm:w-auto px-4 py-2 font-extrabold text-black bg-white hover:bg-opacity-90 hover:text-[#C8AD84] rounded-lg transition"
        >
          My Addresses
        </Link>
        <Link
          href="/payments"
          className="w-full sm:w-auto px-4 py-2 font-extrabold text-black bg-white hover:bg-opacity-90 hover:text-[#C8AD84] rounded-lg transition"
        >
          My Payments
        </Link>
        <Link
          href="/wishlist"
          className="w-full sm:w-auto px-4 py-2 font-extrabold text-black bg-white hover:bg-opacity-90 hover:text-[#C8AD84] rounded-lg transition"
        >
          My Orders
        </Link>
        <Link
          href="/logout"
          className="w-full sm:w-auto px-4 py-2 font-extrabold text-black bg-white hover:bg-opacity-90 hover:text-[#C8AD84] rounded-lg transition"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ProfileTabs;