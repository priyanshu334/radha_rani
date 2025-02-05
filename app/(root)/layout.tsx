"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNav'; 
import OfferSection from '@/components/OfferSection';
import VectorImage from '@/components/VectorImage';
import React, { ReactNode, useState, useEffect } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint (768px)
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#C8AD84]">
      {isMobile ? <MobileNavbar /> : <Navbar />}
      {children}
      <VectorImage />
      <OfferSection />

      <Footer />
      <div className="bg-[#C8AD84] flex ml-5 justify-between p-[2px] mt-3">
        <h1>Copyright © 2024 All rights reserved</h1>
        <div className="flex mr-5">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Layout;
