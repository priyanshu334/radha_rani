"use client";

import { useState } from "react";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/PaginationComponent";
import ProductDescription from "@/components/ProductDes";
import ProductGrid from "@/components/Products";
import CategoryFilter from "@/components/CategoryFilter";

import Image from "next/image";
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Page changed to:", page);
  };

  return (
    <div className="min-h-screen ">
      {/* Navbar */}
    
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center my-20 space-y-5 text-center text-white px-4">
        <h1 className="font-extrabold text-[48px]">
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
        <Carousel />
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
