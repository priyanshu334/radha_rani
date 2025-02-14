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

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 m-2 md:m-6 text-white">
      {products.map((product, index) => (
        <div key={index} className="shadow-md group">
          {/* Image Wrapper */}
          <div className="relative h-[220px] w-full md:h-[600px] border-black border-[1.5px] border-b-[0px] overflow-hidden">
            {/* Default Image */}
            <Image
              src={product.imageSrc}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src={product.hoverImageSrc}
              alt={`${product.name} hover`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </div>

          {/* Product Details */}
          <div className="bg-[#9C7A4D] border-black border-[1.5px] border-t-0 p-2">
            <h3 className="text-sm md:text-lg font-medium text-center mb-1">{product.name}</h3>
            <p className="text-center">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
