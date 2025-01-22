import React from 'react';

interface ProductDescriptionProps {
  fabric: string;
  care: string;
  disclaimer: string;
}

const ProductDescription = ({ fabric, care, disclaimer }: ProductDescriptionProps) => {
  return (
    <div className="mt-6 border-black text-black">
      <h3 className="text-lg font-semibold mb-4">Description</h3>
      <table className="w-full border  border-black">
        <tbody>
          <tr>
            <td className="border border-black p-2">Fabric</td>
            <td className="border border-black p-2">{fabric}</td>
          </tr>
          <tr>
            <td className="border border-black p-2">Care</td>
            <td className="border border-black p-2">{care}</td>
          </tr>
          <tr>
            <td className="border border-black p-2">Disclaimer</td>
            <td className="border border-black p-2">{disclaimer}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDescription;