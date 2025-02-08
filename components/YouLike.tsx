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
  const visibleItems = 4; // Number of products visible at a time

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
    <div className="py-8 bg-[#C8AD84] px-4 ">
      <h2 className="text-2xl font-semibold text-black text-center mb-6">You May Also Like</h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${scrollIndex * 100 / visibleItems}%)`,
            }}
          >
            {dresses.map((dress) => (
              <div
                key={dress.id}
                className="w-1/4 flex-shrink-0 bg-[#9C7A4D] border-[1px] border-black shadow rounded-lg overflow-hidden mx-2"
              >
                <img
                  src={dress.image}
                  alt={dress.title}
                  className="w-full h-100 object-cover"
                />
                <div className="p-4 flex-col items-center align-middle text-center justify-center">
                  <h3 className="text-sm font-medium text-white">
                    {dress.title}
                  </h3>
                  <p className="text-sm font-semibold text-white mt-2">
                    {dress.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#C8AD84] text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-[#9C7A4D] ${
            scrollIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#C8AD84] text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-[#9C7A4D] ${
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
