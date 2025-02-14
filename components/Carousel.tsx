import { useState } from "react";
import "./Carousel.css";

const images = [
  "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg",
  "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
  "https://images.pexels.com/photos/20787/pexels-photo.jpg",
  "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
  "https://images.pexels.com/photos/160846/frog-tiny-amphibian-green-160846.jpeg",
];

const totalSlides = images.length;
const visibleSlides = 5; // Number of images shown at a time

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > totalSlides - visibleSlides ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - visibleSlides : prevIndex - 1
    );
  };

  return (
    <div className="carousel relative mt-24 w-full overflow-hidden flex items-center justify-center rounded-lg">
      <button
        className="prev absolute left-4 bg-black bg-opacity-70 text-white border-none p-3 text-2xl cursor-pointer rounded-full z-10 hover:bg-opacity-90"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <div className="carousel-inner w-full flex justify-between mb-8">
        {images.slice(currentIndex, currentIndex + visibleSlides).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index}`}
            className={`carousel-image w-[18%] h-auto aspect-[3/4] object-cover transition-transform duration-300 ease-in-out rounded-[10%] ${
              index === 0
                ? "mt-[8%] rotate-[-10deg]"
                : index === 1
                ? "mt-[5%] rotate-[-5deg]"
                : index === 2
                ? "mt-[3%] shadow-[0px_12px_12px_rgba(156,122,78,0.8)]"
                : index === 3
                ? "mt-[5%] rotate-[5deg]"
                : index === 4
                ? "mt-[8%] rotate-[10deg]"
                : ""
            }`}
          />
        ))}
      </div>
      <button
        className="next absolute right-4 bg-black bg-opacity-70 text-white border-none p-3 text-2xl cursor-pointer rounded-full z-10 hover:bg-opacity-90"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
