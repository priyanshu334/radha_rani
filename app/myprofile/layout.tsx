"use client"
import Footer from '@/components/Footer';
import MobileFooter from '@/components/MobileFooter';
import MobileNavbar from '@/components/MobileNav';
import Navbar from '@/components/Navbar';
import React, { ReactNode, useEffect, useState } from 'react';

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
    <div className="min-h-screen bg-[#E8D6BC]">
      {isMobile ? <MobileNavbar /> : <Navbar />}
      {children}
      {isMobile?<MobileFooter/>:<Footer/>}
    </div>
  );
};

export default Layout;
