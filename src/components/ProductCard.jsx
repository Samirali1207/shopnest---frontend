import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    return (
        <>
            <div className="w-full max-w-xs bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                />

                <div className="p-4">

                    <h3 className="text-xl font-semibold text-white mb-2">
                        {product.name}
                    </h3>

                    <p className="text-orange-400 text-lg font-bold mb-4">
                        ₹{product.price}
                    </p>

                    <Link
                        to={`/product/${product._id}`}
                        className="block w-full text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </>



    );
};

export default ProductCard;