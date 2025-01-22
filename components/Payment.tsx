// pages/payment.tsx
import { useState } from "react";
import { FaCreditCard, FaLock } from "react-icons/fa";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log("Payment Submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Secure Payment
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your payment details to complete your purchase.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Cardholder Name */}
          <div className="mb-4">
            <label htmlFor="cardholderName" className="block text-sm font-semibold text-gray-600 mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholderName"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-600 mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Expiry Date and CVC */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-600 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvc" className="block text-sm font-semibold text-gray-600 mb-2">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Payment Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200 focus:outline-none"
          >
            <span className="flex items-center justify-center space-x-2">
              <FaCreditCard />
              <span>Pay Now</span>
            </span>
          </button>
        </form>

        {/* Payment Security Section */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <span className="flex items-center justify-center space-x-1">
            <FaLock className="text-red-500" />
            <span>Secure payment processing. Your details are protected.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
