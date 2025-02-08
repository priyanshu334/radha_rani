'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/w1.jpeg',
  '/images/w2.jpeg',
  '/images/w3.jpeg',
  '/images/w4.jpeg',
  '/images/w5.jpeg',
  '/images/w6.jpeg',
];

const ImageCarousel: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleItems = 4; // Number of visible images at a time

  const handleNext = () => {
    if (scrollIndex < images.length - visibleItems) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className="py-8 bg-[#C8AD84] px-4 relative overflow-hidden">
      <h2 className="text-2xl font-semibold text-black text-center mb-6">
    
      </h2>
      <div className="relative flex items-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`absolute left-0 bg-[#C8AD84] text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-[#9C7A4D] z-10 transition-opacity ${
            scrollIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          &lt;
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${(scrollIndex * 100) / visibleItems}%)` }}
          >
            {images.map((image, index) => (
              
             
                  <Image
                    src={image}
                    alt={`Dress ${index + 1}`}
                    layout="intrinsic"
                    width={200}
                    height={192}
                    objectFit="cover"
                    className="rounded-lg"
                  />
    
           
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`absolute right-0 bg-[#C8AD84] text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-[#9C7A4D] z-10 transition-opacity ${
            scrollIndex >= images.length - visibleItems ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
