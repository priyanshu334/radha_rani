// components/ProfileTabs.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const ProfileTabs = () => {
  return (
    <div className="bg-[#C8AD84] text-white mx-14 my-10 py-4 px-4 shadow-md">
      <div className="flex justify-around">
        <Link
          href="/profile"
          className="px-4 py-2 font-extrabold text-black hover:text-white rounded-lg transition"
        >
          My Profile
        </Link>
        <Link
          href="/addresses"
          className="px-4 py-2 font-extrabold text-black hover:text-white rounded-lg transition"
        >
          My Addresses
        </Link>
        <Link
          href="/payments"
          className="px-4 py-2 font-extrabold text-black hover:text-white rounded-lg transition"
        >
          My Payments
        </Link>
        <Link
          href="/orders"
          className="px-4 py-2 font-extrabold text-black hover:text-white rounded-lg transition"
        >
          My Orders
        </Link>
        <Link
          href="/logout"
          className="px-4 py-2 font-extrabold text-black hover:text-white rounded-lg transition"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ProfileTabs;
