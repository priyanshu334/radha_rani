import React from "react";
import Image from "next/image"; // Import the Image component

interface Product {
  name: string;
  price: number;
  imageSrc: string; // Default image source
  hoverImageSrc: string; // Hover image source
}

const products: Product[] = [
  {
    name: "FULL DEMAD EMBROIDERY DRESS",
    price: 3850,
    imageSrc: "/images/w1.jpeg",
    hoverImageSrc: "/images/p6.jpeg",
  },
  {
    name: "FULL DEMAD EMBROIDERY DRESS",
    price: 3850,
    imageSrc: "/images/w1.jpeg",
    hoverImageSrc: "/images/p6.jpeg",
  },
  {
    name: "FULL DEMAD EMBROIDERY DRESS",
    price: 3850,
    imageSrc: "/images/w1.jpeg",
    hoverImageSrc: "/images/p6.jpeg",
  },
  {
    name: "FULL DEMAD EMBROIDERY DRESS",
    price: 3850,
    imageSrc: "/images/w1.jpeg",
    hoverImageSrc: "/images/p6.jpeg",
  },
  {
    name: "FILL DEMAD IMAONERY DRESS",
    price: 0,
    imageSrc: "/images/w1.jpeg",
    hoverImageSrc: "/images/p6.jpeg",
  },
  {
    name: "FALL, DEMAD BARNVADERY DRESS",
    price: 3830,
    imageSrc: "/images/w1.jpeg",
    hoverImageSrc: "/images/p6.jpeg",
  },
  {
    name: "FULL DEMAD EMBROIDERY DRESS",
    price: 3850,
    imageSrc: "/images/w1.jpeg",
    hoverImageSrc: "/images/p6.jpeg",
  },
  {
    name: "FULL DEMAD EMBROIDERY DRESS",
    price: 3850,
    imageSrc: "/images/w1.jpeg",
    hoverImageSrc: "/images/p6.jpeg",
  },
];

const ProductGridWithButton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen sm:grid-cols-2 md:grid-cols-4 gap-2  md:gap-6 m-2 md:m-6 text-white">
      {products.map((product, index) => (
        <div key={index} className="shadow-md rounded-lg">
          {/* Image Wrapper with group class for hover effects */}
          <div className="relative h-[230px]  w-full md:h-[600px] border-black  border-[1.5px] border-b-[1px] overflow-hidden group">
            {/* Default Image */}
            <Image
              src={product.imageSrc}
              alt={product.name}
              fill
              objectFit="cover"
              className="rounded-t-lg transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src={product.hoverImageSrc}
              alt={`${product.name} hover`}
              fill
              objectFit="cover"
              className="rounded-t-lg absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </div>

          {/* Product Details */}
          <div className="bg-[#9C7A4D] p-3 border-black border-[1.5px] border-t-0">
            <h3 className="text-sm md:text-lg font-medium text-center mb-1">{product.name}</h3>
            <p className="text-center">₹{product.price}</p>
          </div>

          {/* Add to Cart Button */}
          <button className="block w-full mt-3 bg-white text-black py-2 px-4 rounded-md hover:bg-[#C8AD84] font-bold hover:text-black transition duration-300">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGridWithButton;
