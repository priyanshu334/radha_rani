import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import OfferSection from '@/components/OfferSection';
import VectorImage from '@/components/VectorImage';
import VectorImage2 from '@/components/VectorImage2';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#E8D6BC]">
      <Navbar/>
      {children}
      <VectorImage/>
      <OfferSection/>
      <Footer/>
    </div>
  );
};

export default Layout;
