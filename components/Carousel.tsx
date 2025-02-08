"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3; // Adjust for different screen sizes

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-6">
      {/* Image Wrapper */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-1/3 px-2">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="text-white" size={24} />
      </button>
    </div>
  );
};

export default Carousel;
