import React, { useState } from "react";

const dresses = [
  {
    id: 1,
    image: "/images/w1.jpeg",
    title: "Full Demand Embroidery Dress",
    price: "₹ 2850",
  },
  {
    id: 2,
    image: "/images/w1.jpeg",
    title: "Full Demand Embroidery Dress",
    price: "₹ 3850",
  },
  {
    id: 3,
    image: "/images/w1.jpeg",
    title: "Full Demand Embroidery Dress",
    price: "₹ 3050",
  },
  {
    id: 4,
    image: "/images/w1.jpeg",
    title: "Full Demand Embroidery Dress",
    price: "₹ 2850",
  },
  {
    id: 5,
    image: "/images/w1.jpeg",
    title: "Full Demand Embroidery Dress",
    price: "₹ 3650",
  },
  {
    id: 6,
    image: "/images/w1.jpeg",
    title: "Full Demand Embroidery Dress",
    price: "₹ 3250",
  },
];

const YouMayAlsoLike: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleItems = 2; // Adjusted for better mobile view

  const handleNext = () => {
    if (scrollIndex < dresses.length - visibleItems) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className="py-6 bg-[#C8AD84] px-4">
      <h2 className="text-xl font-semibold text-black text-center mb-4">You May Also Like</h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${scrollIndex * 100 / visibleItems}%)` }}
        >
          {dresses.map((dress) => (
            <div
              key={dress.id}
              className="w-1/2 flex-shrink-0 bg-[#9C7A4D] border border-black shadow rounded-lg overflow-hidden mx-1"
            >
              <img
                src={dress.image}
                alt={dress.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-center">
                <h3 className="text-xs font-medium text-white">{dress.title}</h3>
                <p className="text-sm font-semibold text-white mt-1">{dress.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#C8AD84] text-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-[#9C7A4D] ${
            scrollIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#C8AD84] text-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-[#9C7A4D] ${
            scrollIndex >= dresses.length - visibleItems
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
