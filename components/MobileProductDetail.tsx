import { Heart, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

const MobileProductDetail: React.FC = () => {
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
    <div className="flex flex-col max-w-md mx-auto my-24  ">
      {/* Main Image */}
      <div className="w-full flex justify-center">
        <img
          src={selectedImage}
          alt="Golden Gazzi Dress"
          className="w-96 h-80 object-cover rounded-lg border"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-2 space-x-2">
        {thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-12 h-12 object-cover rounded-md border cursor-pointer transition-transform transform hover:scale-105 ${
              selectedImage === image ? "border-gray-800" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Product Details */}
      <div className="mt-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">Golden Gazzi Dress</h1>
        <p className="text-sm text-gray-500 mt-1">Elegant Women's Dress</p>

        {/* Size Selection */}
        <div className="mt-2">
          <h3 className="text-lg font-extrabold text-gray-800 mb-1">Select Size</h3>
          <div className="flex justify-center space-x-2">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`w-10 h-10 flex items-center justify-center border rounded-full text-sm transition-transform transform hover:scale-105 ${
                  selectedSize === size ? "bg-gray-800 text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="mt-2">
          <h3 className="text-lg font-extrabold text-gray-800 mb-2">Quantity</h3>
          <div className="flex items-center justify-center">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="w-8 h-8 flex items-center justify-center border text-gray-700 hover:bg-gray-200 rounded-l-lg"
            >
              -
            </button>
            <span className="w-10 h-8 flex items-center justify-center border-t border-b text-sm">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="w-8 h-8 flex items-center justify-center border text-gray-700 hover:bg-gray-200 rounded-r-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Price & Buttons */}
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800">₹ 1599/-</h2>
          <div className="flex flex-col space-y-2 mt-3">
            <button className="flex items-center justify-center gap-2 py-3 bg-[#9C7A4D] text-white rounded-lg hover:bg-gray-700 text-base font-bold">
              <ShoppingBag size={18} />
              Add to Bag
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border bg-white text-gray-700 rounded-lg hover:bg-gray-200 text-base font-bold">
              <Heart size={18} />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProductDetail;
