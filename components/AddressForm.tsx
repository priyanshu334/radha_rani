// components/AddressForm.tsx
'use client';

import React from 'react';

const AddressForm = () => {
  return (
    <div className=" min-h-screen flex  justify-center p-2 -mb-[320px]">
      <form className=" w-full max-w-10xl    p-8">
        {/* Country */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Country"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
          />
        </div>

        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
          />
          <div className="absolute right-3 top-3 text-gray-500 cursor-pointer">
            ✏️
          </div>
        </div>

        {/* PIN Code */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PIN Code / Postal Code / ZIP Code<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter PIN Code"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
          />
        </div>

        {/* City & State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter State"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-20">
          <button
            type="submit"
            className="px-9 py-4 bg-white text-black rounded-lg font-bold hover:bg-[#8c745b] transition"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
