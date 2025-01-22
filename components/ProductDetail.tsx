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
    "/path-to-thumbnail-1.jpg",
    "/path-to-thumbnail-2.jpg",
    "/path-to-thumbnail-3.jpg",
    "/path-to-thumbnail-4.jpg",
  ];

  return (
    <div className="relative flex flex-col bg-white md:flex-row max-w-7xl mx-auto shadow-lg rounded-lg">
      {/* Vertical Thumbnail Images (Outside the Box) */}
      <div className="absolute top-6 left-[-70px] hidden md:flex flex-col space-y-2">
        {thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 object-cover rounded-md border transition-transform transform hover:scale-105 ${
              selectedImage === image ? "border-gray-800" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-2/3">
        <img
          src={selectedImage}
          alt="Golden Gazzi Dress"
          className="w-full rounded-lg mb-4 object-cover shadow-md"
        />
      </div>

      {/* Product Details Section */}
      <div className="w-full md:w-1/2 p-6 md:pl-8 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold text-gray-800">Golden Gazzi Dress</h1>
        <p className="text-sm text-gray-500 mt-2 tracking-wide uppercase">
          Elegant Women's Dress
        </p>

        {/* Tabs */}
        <div className="flex mt-6 space-x-6 text-gray-600 border-b">
          <button className="pb-2 border-b-2 border-black font-medium text-black">
            Overview
          </button>
          <button className="pb-2 hover:border-b-2 hover:border-gray-400">
            Features
          </button>
          <button className="pb-2 hover:border-b-2 hover:border-gray-400">
            Size Chart
          </button>
        </div>

        {/* Overview */}
        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          This stunning dress features a flattering silhouette with soft,
          breathable fabric, making it perfect for any occasion. Designed with
          intricate details and timeless style, it ensures comfort and
          sophistication for all-day wear. Ideal for casual outings or evening
          events.
        </p>

        {/* Size Selection */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Select Size</h3>
          <div className="flex space-x-4">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`w-12 h-12 flex items-center justify-center border rounded-full transition-transform transform hover:scale-105 ${
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
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Quantity</h3>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="w-12 h-12 flex items-center justify-center border text-gray-700 hover:bg-gray-200 rounded-l-lg"
            >
              -
            </button>
            <span className="w-12 h-12 flex items-center justify-center border-t border-b">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="w-12 h-12 flex items-center justify-center border text-gray-700 hover:bg-gray-200 rounded-r-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Price and Action Buttons */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800">₹ 1599/-</h2>
          <div className="flex space-x-4 mt-6">
            <button className="flex-1 py-3 bg-gray-800 text-white text-center rounded-lg hover:bg-gray-700 shadow-md">
              Add to Bag
            </button>
            <button className="flex-1 py-3 border text-gray-700 rounded-lg hover:bg-gray-200 shadow-md">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Thumbnail Images (Mobile) */}
      <div className="mt-6 md:hidden flex space-x-2 justify-center">
        {thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 object-cover rounded-md border transition-transform transform hover:scale-105 ${
              selectedImage === image ? "border-gray-800" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
