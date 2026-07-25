import React, { useEffect, useState } from "react";
import { useParams, Link, data } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartsSlice";
import axios from "axios"
const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // ---------------- Fetch Product ----------------
    useEffect(() => {
        getProduct();
    }, [id]);

    const getProduct = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${import.meta.env.VITE_URL}/api/product/${id}`,)
            console.log(res.data)
            setProduct(res.data);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    // ---------------- Add To Cart ----------------
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                productId: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                qty: 1,
            })
        );

        alert("Product Added Successfully");
    };

    // ---------------- Buy Now ----------------
    const handleBuyNow = () => {
        handleAddToCart();
        navigate("/checkout")
    };

    // ---------------- Wishlist ----------------
    const handleWishlist = () => {
        console.log("Wishlist Function");
    };

    // ---------------- Share ----------------
    const handleShare = () => {
        console.log("Share Product");
    };

    if (loading) {
        return (
            <div className="text-center text-orange-500 text-2xl mt-32">
                Loading...
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center text-red-500 text-2xl mt-32">
                Product Not Found
            </div>
        );
    }

    return (
        <div className="bg-gray-950 min-h-screen text-white py-10 px-5">

            {/* Breadcrumb */}

            <div className="max-w-6xl mx-auto mb-8 text-sm text-gray-400">
                <Link to="/" className="text-orange-500">
                    Home
                </Link>

                {" / "}

                <Link to="/shop" className="text-orange-500">
                    Shop
                </Link>

                {" / "}

                {product.category}
            </div>

            {/* Product Section */}

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Image */}

                <div className="bg-gray-900 rounded-xl p-6 shadow-lg">

                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-[450px] object-contain"
                    />

                </div>

                {/* Details */}

                <div>

                    <h1 className="text-4xl font-bold mb-5">
                        {product.name}
                    </h1>

                    <p className="text-3xl text-orange-500 font-semibold mb-5">
                        ₹{product.price}
                    </p>

                    <p className="text-gray-300 leading-8 mb-8">
                        {product.description}
                    </p>

                    <div className="mb-6">

                        {product.stock > 0 ? (
                            <p className="text-green-400 font-semibold">
                                In Stock ({product.stock} Left)
                            </p>
                        ) : (
                            <p className="text-red-500 font-semibold">
                                Out Of Stock
                            </p>
                        )}

                    </div>

                    {/* Buttons */}

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleAddToCart}
                            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
                        >
                            Add To Cart
                        </button>

                        <button
                            onClick={handleBuyNow}
                            className="bg-white text-black hover:bg-gray-300 px-6 py-3 rounded-lg font-semibold transition"
                        >
                            Buy Now
                        </button>

                    </div>

                    {/* Extra Buttons */}

                    <div className="flex gap-4 mt-6">

                        <button
                            onClick={handleWishlist}
                            className="border border-orange-500 px-5 py-2 rounded-lg hover:bg-orange-500 transition"
                        >
                            Wishlist
                        </button>

                        <button
                            onClick={handleShare}
                            className="border border-orange-500 px-5 py-2 rounded-lg hover:bg-orange-500 transition"
                        >
                            Share
                        </button>

                    </div>

                    {/* Extra Information */}

                    <div className="mt-10 border-t border-gray-700 pt-6 space-y-3 text-gray-300">

                        <p>
                            <span className="font-semibold text-white">
                                Category :
                            </span>{" "}
                            {product.category}
                        </p>

                        <p>
                            <span className="font-semibold text-white">
                                Product ID :
                            </span>{" "}
                            {product._id}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;