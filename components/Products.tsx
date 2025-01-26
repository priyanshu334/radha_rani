import React from 'react';
import Image from 'next/image'; // Import the Image component

interface Product {
  name: string;
  price: number;
  imageSrc: string; // Add image source
}

const products: Product[] = [
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/w1.jpeg' }, // Replace with your image paths
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/w1.jpeg' },
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/w1.jpeg' },
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/w1.jpeg' },
  { name: 'FILL DEMAD IMAONERY DRESS', price: 0, imageSrc: '/images/w1.jpeg' },
  { name: 'FALL, DEMAD BARNVADERY DRESS', price: 3830, imageSrc: '/images/w1.jpeg' },
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/w1.jpeg' },
  { name: 'FULL DEMAD EMBROIDERY DRESS', price: 3850, imageSrc: '/images/w1.jpeg' },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-6 text-white ">
        
      {products.map((product, index) => (
        <div key={index} className=" space-y-3 shadow-md ">
          {/* Image Component */}
          <div className="relative border-black  min-h-[525px] min-w-[340px] "> {/* Set a fixed height */}
            <Image
              src={product.imageSrc}
              alt={product.name}
              layout="fill" // Important for responsive image
              // s
              // objectFit="cover" // Maintain aspect ratio and cover the container
              className="rounded-t-lg border-black "
            />
          </div>
          <div className='bg-[#9C7A4D]'>
          <h3 className="text-lg font-medium text-center mb-2">{product.name}</h3>
          <p className="text-center">₹{product.price}</p>
         

          </div>

       
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;