// components/ProfileForm.tsx
'use client';

import React from 'react';

const ProfileForm = () => {
  return (
    <div className="bg-[#E8D6BC] min-h-screen flex  justify-center p-5">
      <form className=" w-full max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
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

          {/* Last Name */}
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

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email ID<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter Email ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
          />
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

        {/* DOB */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            DOB<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#a38b71] focus:outline-none"
          />
        </div>

        {/* Gender */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex items-center text-black space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="mr-2 focus:ring-[#a38b71]"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="mr-2 focus:ring-[#a38b71]"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Other"
                className="mr-2 focus:ring-[#a38b71]"
              />
              Other
            </label>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-4 bg-white text-black rounded-lg font-bold hover:bg-[#8c745b] transition"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
