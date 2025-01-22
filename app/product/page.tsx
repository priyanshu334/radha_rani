"use client";

import OfferSection from "@/components/OfferSection";
import ProductDescription from "@/components/ProductDes";
import ProductDetail from "@/components/ProductDetail";
import ProductGrid from "@/components/Products";
import ProfileTabs from "@/components/ProfileTab";
import YouMayAlsoLike from "@/components/YouLike";

export default function Home() {
  return (
    <div className="bg-[#C8AD84] min-h-screen">
      {/* Main Product Section */}
      <section className=" bg-[#E8D6BC]  p-16">
        <ProductDetail />
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
