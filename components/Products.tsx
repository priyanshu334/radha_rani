import React from 'react';
import Image from 'next/image'; // Import the Image component

interface Product {
  name: string;
  price: number;
  imageSrc: string; // Add image source
}

const products: Product[] = [
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/dress1.jpg' }, // Replace with your image paths
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/dress2.jpg' },
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/dress3.jpg' },
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/women.png' },
  { name: 'FILL DEMAD IMAONERY DRESS', price: 0, imageSrc: '/images/dress5.jpg' },
  { name: 'FALL, DEMAD BARNVADERY DRESS', price: 3830, imageSrc: '/images/dress6.jpg' },
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/dress7.jpg' },
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/dress8.jpg' },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-6 p-4">
        
      {products.map((product, index) => (
        <div key={index} className=" space-y-3 shadow-md p-4">
          {/* Image Component */}
          <div className="relative border-black  h-64 mb-4"> {/* Set a fixed height */}
            <Image
              src={product.imageSrc}
              alt={product.name}
              layout="fill" // Important for responsive images
              objectFit="cover" // Maintain aspect ratio and cover the container
              className="rounded-t-lg border-black "
            />
          </div>

          <h3 className="text-lg font-medium mb-2">{product.name}</h3>
          <p className="text-gray-700">₹{product.price}</p>
          <button className="mt-4 bg-white hover:bg-white text-black font-bold py-2 px-4 rounded w-full">
            ADD TO CART
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;