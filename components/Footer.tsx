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
            <div className="flex items-center  space-x-3">
              <Image
                src="/images/logo.png" // Add the path to your logo image in the public folder
                alt="Logo"
                width={100} // Set the width of the logo
                height={70} // Set the height of the logo
                className="object-contain mb-8"
              />
              <h2 className="text-4xl font-bold mb-2">Radha Rani</h2>
            </div>
            
            {/* Address and Contact Information */}
            <div className='flex flex-col space-y-3'>
              <p>Address: shop address near palm mall Korba, Chhattisgarh, PIN India</p>
              <p>Email: radharani@gmail.com</p>
              <p>Phone: +91 9977121212</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col my-5">
            <h3 className="text-xl font-semibold mb-3">Navigation</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-[black] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[black] text-sm">
                  Shop (categories)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[black] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[black] text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[black] text-sm">
                  Returns and Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[black] text-sm">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Information */}
          <div className="flex flex-col my-5">
            <h3 className="text-xl font-semibold mb-3">Legal Information</h3>
            <ul>
              <li className="text-sm">Terms and Conditions</li>
              <li className="text-sm">FAQ</li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="flex  flex-col my-5">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex flex-col ">
              <Link href="https://facebook.com" target="_blank" className="text-xl hover:text-[black]  flex space-x-2">
                <FaFacebook />
                <h1>Facebook</h1>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-xl hover:text-[black] flex space-x-2">
                <FaTwitter />
                <h1>Twitter</h1>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-xl hover:text-[black] flex space-x-2">
                <FaInstagram />
                <h1>Instagram</h1>
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
