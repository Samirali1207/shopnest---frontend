import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white border-b border-gray-700 pb-4 mb-8">
          Return & Refund Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-300 leading-8 mb-8 text-sm sm:text-base">
          At <span className="font-semibold text-orange-500">ShopNest</span>, we
          proudly stand behind the quality of our merchandise. If for any
          reason you are completely dissatisfied with your purchase, you may
          initiate a return within <span className="text-white font-semibold">30 days</span> of
          receiving your order.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
            1. Eligibility for Returns
          </h2>

          <p className="text-gray-300 leading-8 text-sm sm:text-base">
            To be eligible for a return, the item must be unused, in the same
            condition in which it was received, and kept in its original
            packaging. A receipt or proof of purchase is required to process
            the return.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
            2. Refund Processing
          </h2>

          <p className="text-gray-300 leading-8 text-sm sm:text-base">
            Once your returned item is received and inspected, we will notify
            you by email regarding the approval or rejection of your refund.
            Approved refunds are processed back to your original payment method
            within <span className="text-white font-semibold">5–7 business days.</span>
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
            3. Non-Returnable Items
          </h2>

          <p className="text-gray-300 leading-8 text-sm sm:text-base">
            Certain products are not eligible for returns, including:
          </p>

          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>Perishable goods</li>
            <li>Custom-made products</li>
            <li>Digital downloads and software</li>
            <li>Items damaged after delivery</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
            4. Shipping Charges
          </h2>

          <p className="text-gray-300 leading-8 text-sm sm:text-base">
            Customers are responsible for return shipping costs unless the
            return is due to a damaged or incorrect product. Depending on the
            item, a restocking fee may apply.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;