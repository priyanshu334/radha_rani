import Image from 'next/image';
import React from 'react';

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#9C7A4D]">
      <div className="bg-[#E8D6BC] rounded-xl shadow-md flex h-5/6 w-4/5 max-h-9xl max-w-9xl">
        {/* Left Image Section */}
        <div className="hidden md:block w-1/3 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/women.png"
              alt="Woman Holding Flower"
              className="rounded-l-xl object-cover"
              fill
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Login / Signup</h1>
            <p className="text-sm text-gray-500 text-center mb-6">
              Be a Part of the Radha Rani Fashion Legacy Today!
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                CONTINUE
              </button>
            </form>

            <div className="flex items-center justify-center my-4">
              <span className="text-gray-500">or</span>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
              >
                Google
              </button>
              <button
                type="button"
                className="flex-1 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
              >
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
