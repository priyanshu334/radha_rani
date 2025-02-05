import React, { useState } from "react";

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState("/images/women.png");

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  const thumbnails = [
    "/images/women.png",
    "/images/women.png",
    "/images/women.png",
    "/images/women.png",
  ];

  return (
    <div className="relative flex flex-col md:flex-row max-w-8xl mx-20 shadow-lg rounded-lg p-1 h-[800px]">
      {/* Vertical Thumbnails */}
      <div className="absolute top-4 left-[-90px]  hidden md:flex flex-col space-y-1">
        {thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover rounded-md border transition-transform transform hover:scale-105 ${
              selectedImage === image ? "border-gray-800" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="w-full md:w-1/2 pr-32 pb-1 border-r-[1px] border-gray-400 h-[800px]">
        <img
          src={selectedImage}
          alt="Golden Gazzi Dress"
          className="w-full h-full border-[1px] border-black object-cover shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/3 p-4 ml-6 h-[600px] overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-800">Golden Gazzi Dress</h1>
        <p className="text-xs text-gray-500 mt-1 tracking-wide uppercase">
          Elegant Women's Dress
        </p>

        {/* Tabs */}
        <div className="flex mt-2 space-x-3 font-bold text-gray-600 border-b text-lg">
          <button className="pb-1 border-b-2 border-black font-medium text-black">
            Overview
          </button>
          <button className="pb-1 hover:border-b-2 hover:border-gray-400">
            Features
          </button>
          <button className="pb-1 hover:border-b-2 hover:border-gray-400">
            Size Chart
          </button>
        </div>

        {/* Overview */}
        <p className="text-gray-700 text-lg mt-2 leading-relaxed">
          A stunning dress featuring a flattering silhouette with soft,
          breathable fabric. Ideal for casual outings or evening events.
        </p>

        {/* Size Selection */}
        <div className="mt-2">
          <h3 className="text-xs font-medium text-gray-800 mb-1">Select Size</h3>
          <div className="flex space-x-2">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`w-8 h-8 flex items-center justify-center border rounded-full text-xs transition-transform transform hover:scale-105 ${
                  selectedSize === size
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="mt-2">
          <h3 className="text-xs font-medium text-gray-800 mb-1">Quantity</h3>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="w-8 h-8 flex items-center justify-center border text-gray-700 hover:bg-gray-200 rounded-l-lg text-xs"
            >
              -
            </button>
            <span className="w-8 h-8 flex items-center justify-center border-t border-b text-xs">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="w-8 h-8 flex items-center justify-center border text-gray-700 hover:bg-gray-200 rounded-r-lg text-xs"
            >
              +
            </button>
          </div>
        </div>

        {/* Price & Buttons */}
        <div className="mt-4">
          <h2 className="text-xl border-b border-black mt-3 font-bold text-gray-800">₹ 1599/-</h2>
          <div className="flex space-x-2 mt-3 p-2">
            <button className="flex-1 py-5 bg-[#9C7A4D]  text-white text-center rounded-lg hover:bg-gray-700 text-lg font-bold">
              Add to Bag
            </button>
            <button className="flex-1 py-5 border bg-white text-gray-700 rounded-lg hover:bg-gray-200 text-lg font-bold">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
