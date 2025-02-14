"use client";

import MobileProductDetail from "@/components/MobileProductDetail";
import OfferSection from "@/components/OfferSection";
import ProductDescription from "@/components/ProductDes";
import ProductDetail from "@/components/ProductDetail";
import ProductGrid from "@/components/Products";
import ProfileTabs from "@/components/ProfileTab";
import YouMayAlsoLike from "@/components/YouLike";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div className="bg-[#C8AD84] min-h-screen">
      {/* Main Product Section */}
      <section className=" bg-[#E8D6BC] p-4 md:p-16">
        {isMobile?<MobileProductDetail/>:<ProductDetail/>}
      </section>

      {/* Product Description */}
      <section className="container mx-auto my-8 px-4">
        <ProductDescription
          fabric="Premium Mul Chanderi"
          care="Dry Clean Only"
          disclaimer="Slight color variations may occur due to different screen resolution."
        />
      </section>

      {/* You May Also Like Section */}
    
        <div className=" ">
          <YouMayAlsoLike />
        </div>
      
    </div>
  );
}
