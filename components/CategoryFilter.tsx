import React, { useState } from "react";
import { FaTshirt, FaTag } from "react-icons/fa"; // Importing FontAwesome icons

const CategoryFilter: React.FC = () => {
  const [category, setCategory] = useState("All Category");
  const [size, setSize] = useState("Select Your Size");

  const categories = ["All Category", "Women", "Men", "Kids"];
  const sizes = ["Select Your Size", "S", "M", "L", "XL"];

  return (
    <div className="flex flex-col items-center space-y-10 py-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-white text-center md:text-5xl">
        Explore Our Elegant Designs
      </h1>

      {/* Dropdowns */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 md:justify-center">
        {/* Category Dropdown */}
        <div className="relative w-full md:w-[700px] ">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2  text-white">
            <FaTag className="text-lg" />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full px-12 py-2 bg-[#9C7A4D] text-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-brown-600"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Size Dropdown */}
        <div className="relative w-full md:w-[400px]">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
            <FaTshirt className="text-lg" />
          </div>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="block w-full px-12 py-2 bg-[#9C7A4D] text-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-brown-600"
          >
            {sizes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
