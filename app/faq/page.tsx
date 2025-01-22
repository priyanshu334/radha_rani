export default function Home() {
    return (
      <div className="min-h-screen  text-gray-800 px-4 py-12">
        <div className="max-w-8xl mx-auto  p-4 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            Frequently Asked Questions (FAQs)
          </h1>
          <div className="space-y-6 text-justify">
            <h3 className="text-lg font-semibold">1. What is the estimated delivery time?</h3>
            <p>
              Our standard delivery time is 3-7 business days, depending on your
              location. Delivery times may vary for remote areas or during peak
              seasons.
            </p>
  
            <h3 className="text-lg font-semibold">2. How can I track my order?</h3>
            <p>
              Once your order is shipped, you will receive an email with the tracking
              details. You can also track your order through the "My Orders" section
              on our website.
            </p>
  
            <h3 className="text-lg font-semibold">3. What is your return policy?</h3>
            <p>
              We accept returns within 15 days of delivery for most items, provided
              they are in unused condition, with original packaging and tags intact.
              Please refer to our Returns and Refunds section for more details.
            </p>
  
            <h3 className="text-lg font-semibold">4. How do I initiate a return?</h3>
            <p>
              To initiate a return, log in to your account, go to the "My Orders"
              section, and select the item you wish to return. Follow the instructions
              provided, and our team will assist you.
            </p>
  
            <h3 className="text-lg font-semibold">5. Can I cancel my order?</h3>
            <p>
              Yes, you can cancel your order before it is shipped. Once shipped,
              cancellations are not possible. For assistance, contact our customer
              support team.
            </p>
  
            <h3 className="text-lg font-semibold">6. What payment methods do you accept?</h3>
            <p>
              We accept major credit/debit cards, net banking, and popular payment
              wallets. All payments are securely processed through our payment gateway
              partners.
            </p>
  
            <h3 className="text-lg font-semibold">7. How do I contact customer support?</h3>
            <p>
              You can reach our customer support team via email at{" "}
              <a href="mailto:support@[yourbrand].com" className="text-blue-500 underline">
                support@[yourbrand].com
              </a>{" "}
              or call us at [customer support number]. Our working hours are [insert
              hours].
            </p>
  
            <h3 className="text-lg font-semibold">8. Are your products true to size?</h3>
            <p>
              Our products are designed to fit true to size. We recommend checking the
              size chart available on each product page before placing an order.
            </p>
  
            <h3 className="text-lg font-semibold">9. Do you offer international shipping?</h3>
            <p>
              Currently, we only ship within [Your Country/Region]. International
              shipping is not available at this time.
            </p>
  
            <h3 className="text-lg font-semibold">10. Can I exchange a product?</h3>
            <p>
              Yes, we offer exchanges for size or color variations within 15 days of
              delivery. The product must be unused and in its original condition.
            </p>
          </div>
        </div>
      </div>
    );
  }
  