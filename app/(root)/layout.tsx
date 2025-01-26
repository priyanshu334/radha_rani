import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import OfferSection from '@/components/OfferSection';
import VectorImage from '@/components/VectorImage';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#C8AD84]">
      <Navbar/>
      {children}
      <VectorImage/>
      <OfferSection/>
       
      <Footer/>
      <div className='bg-[#C8AD84] flex ml-28 p-[2px] mt-3'>
        <h1>Copyright © 2024 All rights resesrved</h1>

      </div>
    </div>
  );
};

export default Layout;
