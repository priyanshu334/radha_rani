'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const MobileFooter = () => {
  return (
    <footer className="bg-[#9C7A4D] text-white py-5 font-medium">
      <div className="container mx-auto px-8 text-center">
        {/* Logo and Contact Info */}
        <div className="flex flex-col items-center space-y-2 mb-10">
          <Image src="/images/logo.png" alt="Logo" width={120} height={70} className="object-contain" />
          <h2 className="text-3xl  font-extrabold tracking-wide uppercase">Radha Rani</h2>
          <p className="text-base opacity-90 ">Shop address near Palm Mall, Korba, Chhattisgarh, India</p>
          <p className="text-base opacity-90">Email: radharani@gmail.com</p>
          <p className="text-base opacity-90">Phone: +91 9977121212</p>
        </div>

        {/* Navigation and Links */}
        <div className="grid grid-cols-2 gap-8 text-base text-white/90 mb-10">
          <div>
            <h3 className="text-xl font-semibold mb-1">Navigation</h3>
            <ul className="space-y-1 flex flex-col  justify-center items-center">
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-gray-300 transition-colors">Shop (categories)</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/shop" className="hover:text-gray-300 transition-colors">Shipping Information</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Legal</h3>
            <ul className="space-y-1">
              <li className="hover:text-gray-300 cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-gray-300 cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center space-y-5">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-6 text-3xl">
            <Link href="https://facebook.com" target="_blank" className="hover:text-gray-300 transition-colors">
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-gray-300 transition-colors">
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-gray-300 transition-colors">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;