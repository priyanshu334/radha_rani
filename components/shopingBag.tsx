import React from "react";

const ShoppingBag: React.FC = () => {
  const items = [
    { id: 1, name: "Golden Gazzi Dress", price: 1599, size: "S", quantity: 1, image: "/images/p6.jpeg" },
    { id: 2, name: "Golden Gazzi Dress", price: 1599, size: "S", quantity: 1, image: "/images/p6.jpeg" },
    { id: 3, name: "Golden Gazzi Dress", price: 1599, size: "S", quantity: 1, image: "/images/p6.jpeg" },
    { id: 4, name: "Golden Gazzi Dress", price: 1599, size: "S", quantity: 1, image: "/images/p6.jpeg" },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 120;

  return (
    <div className="flex flex-col lg:flex-row gap-8  text-black p-8  min-h-screen">
      {/* Shopping Bag Section */}
      <div className="flex-1   rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 border-b pb-4">Shopping Bag</h1>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4 last:border-none"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-1/2 h-1/2 rounded-md object-cover" />
              <div>
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <p className="text-lg font-bold">₹ {item.price}</p>
              <button className="text-sm text-red-500 hover:underline">Remove</button>
              <button className="text-sm text-blue-500 hover:underline">Edit</button>
              <button className="text-sm text-green-500 hover:underline">Move to Pay</button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <hr className="my-8 bg-black" />
      <div className="w-full lg:w-1/3  rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-4">Summary</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Coupon Code</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter coupon code"
          />
        </div>
        <div className="flex justify-between mb-2 text-gray-600">
          <p>Items</p>
          <p>{items.length}</p>
        </div>
        <div className="flex justify-between mb-2 text-gray-600">
          <p>Subtotal</p>
          <p>₹ {subtotal}</p>
        </div>
        <div className="flex justify-between mb-4 text-gray-600">
          <p>Shipping</p>
          <p>₹ {shipping}</p>
        </div>
        <div className="flex justify-between font-semibold text-lg mb-6">
          <p>Total</p>
          <p>₹ {subtotal + shipping}</p>
        </div>
        <button className="w-full bg-[#9C7A4D] text-white py-3 rounded-lg hover:bg-[#88683e] transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingBag;
