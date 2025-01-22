"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const phoneNumber = '+91 0123456789';

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    console.log('Entered OTP:', otpValue);
    // Add OTP verification logic here
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#9C7A4D]">
      <div className="bg-[#E8D6BC] rounded-xl shadow-md p-0 flex h-5/6 w-4/5 max-h-9xl max-w-9xl">
        {/* Left Image Section */}
        <div className="hidden md:block w-1/3 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/women.png" // Replace with your image file in public folder
              alt="OTP Verification"
              className="rounded-l-xl object-cover"
              fill
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-800 flex justify-center mb-4">Verify Your Phone Number</h1>
          <p className="text-sm text-gray-500 mb-6 flex justify-center">
            Enter OTP sent to your phone number{' '}
            <span className="font-semibold text-blue-600">{phoneNumber}</span>
          </p>

          {/* OTP Inputs */}
          <div className="flex space-x-4 mb-6 justify-center">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                className="w-12 h-12 border border-gray-300 text-center text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            CONFIRM
          </button>

          {/* Alternative Actions */}
          <div className="flex items-center justify-center my-4">
            <span className="text-gray-500">or</span>
          </div>

          {/* Social Buttons (optional) */}
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
