import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  image: string;
}

const products: Product[] = [
  { id: 1, image: '/images/women.' },
  { id: 2, image: '/images/product2.jpg' },
  { id: 3, image: '/images/product3.jpg' },
  { id: 4, image: '/images/product4.jpg' },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <Image
          src={products[currentIndex].image}
          alt={`Product ${currentIndex + 1}`}
          width={300}
          height={400}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        onClick={handlePrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ProductCarousel;