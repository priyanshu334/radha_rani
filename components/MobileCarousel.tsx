import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg",
  "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
  "https://images.pexels.com/photos/20787/pexels-photo.jpg",
  "https://images.pexels.com/photos/160846/frog-tiny-amphibian-green-160846.jpeg",
];

const totalSlides = images.length;
const visibleSlides = 3; // Three images shown at a time on mobile

const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - visibleSlides : prevIndex - 1
    );
  };

  return (
    <div className="carousel relative mt-24 w-full overflow-hidden flex items-center justify-center rounded-lg shadow-xl">
      <button
        className="prev absolute left-4 bg-black bg-opacity-70 text-white border-none p-3 text-2xl cursor-pointer rounded-full z-10 hover:bg-opacity-90 transition-all"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <div className="carousel-inner w-full flex justify-center transition-transform duration-500 ease-in-out">
        {images.slice(currentIndex, currentIndex + visibleSlides).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index}`}
            className={`
              transition-all duration-500 ease-in-out
              ${index === 1 ? "scale-105 opacity-100 shadow-xl" : "scale-90  opacity-50"}
              w-[150px] h-[200px] object-cover  rounded-[15px] 
              ${index === 1 ? "z-10" : "z-0"}
            `}
          />
        ))}
      </div>

      <button
        className="next absolute right-4 bg-black bg-opacity-70 text-white border-none p-3 text-2xl cursor-pointer rounded-full z-10 hover:bg-opacity-90 transition-all"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default MobileCarousel;
