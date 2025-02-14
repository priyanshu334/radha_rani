"use client";

import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/PaginationComponent";
import ProductDescription from "@/components/ProductDes";
import ProductGrid from "@/components/Products";
import CategoryFilter from "@/components/CategoryFilter";

import Image from "next/image";
import { Circle } from "lucide-react";
import CircularCarousel from "@/components/CircularCarousel";
import ImageCarousel from "@/components/CircularCarousel";
import MobileCarousel from "@/components/MobileCarousel";
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

   const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint (768px)
      };
  
      handleResize(); // Check on mount
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Page changed to:", page);
  };

  return (
    <div className="min-h-screen ">
      {/* Navbar */}
    
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center my-20 space-y-5 text-center text-white px-4">
       

       {isMobile?<Image src={"/images/logo.png"} alt="radha rani" width={150} height={150} ></Image>:<div></div>}
        
        <h1 className="font-extrabold text-[30px] md:text-[48px]">
          Where style speaks, trend resonates and
          <div className="-mt-2">
        fashion flourishes
          </div>
      
        </h1>
        <div className="mt-2">
          <h2 className="font-medium text-lg">
            Unveiling a fashion tradition where every emotion meets.
          </h2>
          <h2 className="text-lg">
            Unveiling a fashion tradition where every emotion meets.
          </h2>
        </div>
      </section>

      {/* Carousel */}
      <section className="my-8">
         {isMobile?<MobileCarousel/>:<Carousel />}
      </section>
     <CategoryFilter/>
     
   
     
      {/* Product Grid */}
      <section className="my-8">
        <ProductGrid />
      </section>

    
     
      {/* Pagination */}
      <section className="my-8 flex justify-center">
        <Pagination
          totalPages={19}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
      <div>
       
      </div>
    </div>
  );
}
