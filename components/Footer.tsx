'use client'

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'; // Importing Image component for logo

const Footer = () => {
  return (
    <footer className="bg-[#9C7A4D] text-white py-20 font-medium">
      <div className=" mx-auto  px-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col space-y-3">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.png" // Add the path to your logo image in the public folder
                alt="Logo"
                width={80} // Set the width of the logo
                height={50} // Set the height of the logo
                className="object-contain"
              />
              <h2 className="text-4xl font-bold mb-2">Radha Rani</h2>
            </div>
            
            {/* Address and Contact Information */}
            <div>
              <p>Address: shop address near palm mall Korba, Chhattisgarh, PIN India</p>
              <p>Email: radharani@gmail.com</p>
              <p>Phone: +91 9977121212</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Navigation</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-[#9C7A4D] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#9C7A4D] text-sm">
                  Shop (categories)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#9C7A4D] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#9C7A4D] text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9C7A4D] text-sm">
                  Returns and Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#9C7A4D] text-sm">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Information */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Legal Information</h3>
            <ul>
              <li className="text-sm">Terms and Conditions</li>
              <li className="text-sm">FAQ</li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="text-xl hover:text-[#9C7A4D]">
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-xl hover:text-[#9C7A4D]">
                <FaTwitter />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-xl hover:text-[#9C7A4D]">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
      </div>
    </footer>
  );
};

export default Footer;
