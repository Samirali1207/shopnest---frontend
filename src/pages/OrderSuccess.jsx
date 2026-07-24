import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-xl border-gray-600 border-2  rounded-2xl shadow-lg p-8 sm:p-10 text-center">

                {/* Success Icon */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
                    <span className="text-4xl text-green-600">✓</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
                    Payment Successful!
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-base sm:text-lg mb-8">
                    Thank you for your order. We have securely received your payment
                    and will process your shipment shortly.
                </p>

                {/* Button */}
                <Link
                    to="/shop"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;