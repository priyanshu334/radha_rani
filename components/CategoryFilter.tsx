import React, { useState } from "react";
import { FaTshirt, FaTag } from "react-icons/fa";

const CategoryFilter: React.FC = () => {
  const [category, setCategory] = useState("All Category");
  const [size, setSize] = useState("Select Your Size");

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  const categories = ["All Category", "Women", "Men", "Kids"];
  const sizes = ["Select Your Size", "S", "M", "L", "XL"];

  return (
    <div className="flex flex-col items-center space-y-6 py-6 px-4">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center">
        Explore Our Elegant Designs
      </h1>

      {/* Dropdowns Container */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row md:items-center gap-4">
        {/* Category Dropdown */}
        <div className="relative w-full">
          <div
            onClick={() => {
              setCategoryOpen(!categoryOpen);
              setSizeOpen(false); // Close size dropdown when opening category
            }}
            className="flex items-center justify-between px-10 py-3 bg-[#9C7A4D] text-white rounded-md cursor-pointer"
          >
            <span>{category}</span>
            <FaTag className="text-lg" />
          </div>
          {categoryOpen && (
            <div className="absolute top-full left-0 w-full bg-[#9C7A4D] rounded-md mt-2 shadow-lg z-10">
              <ul>
                {categories.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setCategory(item);
                      setCategoryOpen(false);
                    }}
                    className="px-10 py-3 text-white hover:bg-[#704C2E] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Size Dropdown */}
        <div className="relative w-full">
          <div
            onClick={() => {
              setSizeOpen(!sizeOpen);
              setCategoryOpen(false); // Close category dropdown when opening size
            }}
            className="flex items-center justify-between px-10 py-3 bg-[#9C7A4D] text-white rounded-md cursor-pointer"
          >
            <span>{size}</span>
            <FaTshirt className="text-lg" />
          </div>
          {sizeOpen && (
            <div className="absolute top-full left-0 w-full bg-[#9C7A4D] rounded-md mt-2 shadow-lg z-10">
              <ul>
                {sizes.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSize(item);
                      setSizeOpen(false);
                    }}
                    className="px-10 py-3 text-white hover:bg-[#704C2E] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
