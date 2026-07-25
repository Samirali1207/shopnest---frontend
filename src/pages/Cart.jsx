import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, addToCart, updateQty } from "../redux/features/cartsSlice";


const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleUpdateQty = (item, quantity) => {
        if (quantity < 1) return

        dispatch(updateQty({ productId: item.productId, qty: quantity }))
    }

    return (
        <div className="min-h-screen bg-gray-950 px-4 py-10">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl font-bold text-white mb-10">
                    Shopping Cart
                </h1>

                {cartItems.length === 0 ? (

                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 text-center">

                        <h2 className="text-2xl text-white mb-4">
                            Your Cart is Empty
                        </h2>

                        <p className="text-gray-400 mb-6">
                            Looks like you haven't added any products yet.
                        </p>

                        <Link
                            to="/shop"
                            className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                ) : (

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Cart Items */}

                        <div className="lg:col-span-2 space-y-6">

                            {cartItems.map((item) => (

                                <div
                                    key={item.productId}
                                    className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col sm:flex-row gap-5 hover:border-orange-500 transition"
                                >

                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-full sm:w-40 h-40 object-cover rounded-lg"
                                    />

                                    <div className="flex-1">

                                        <h3 className="text-2xl font-semibold text-white">
                                            {item.name}
                                        </h3>

                                        <p className="text-orange-500 text-xl font-bold mt-2">
                                            ₹{item.price}
                                        </p>

                                        {/* Quantity */}

                                        <div className="flex items-center gap-4 mt-6">

                                            <button
                                                onClick={() =>
                                                    handleUpdateQty(item, item.qty - 1)
                                                }
                                                className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-orange-500 transition"
                                            >
                                                -
                                            </button>

                                            <span className="text-xl font-semibold">
                                                {item.qty}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    handleUpdateQty(item, item.qty + 1)
                                                }
                                                className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-orange-500 transition"
                                            >
                                                +
                                            </button>

                                        </div>

                                        <button
                                            onClick={() => handleRemove(item.productId)}
                                            className="mt-6 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* Order Summary */}

                        <div>

                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sticky top-24">

                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Order Summary
                                </h2>

                                <div className="flex justify-between text-gray-300 mb-4">
                                    <span>Total Items</span>
                                    <span>{cartItems.length}</span>
                                </div>

                                <div className="flex justify-between text-gray-300 mb-4">
                                    <span>Shipping</span>
                                    <span className="text-green-400">
                                        Free
                                    </span>
                                </div>

                                <hr className="border-gray-700 my-5" />

                                <div className="flex justify-between text-2xl font-bold text-white">

                                    <span>Total</span>

                                    {/* <span className="text-orange-500">
                                        ₹{totalPrice.toFixed(2)}
                                    </span> */}

                                </div>

                                <button
                                    onClick={() => navigate("/checkout")}
                                    className="w-full mt-8 bg-orange-500 hover:bg-orange-600 py-3 rounded-lg text-lg font-semibold transition"
                                >
                                    Proceed to Checkout
                                </button>

                                <Link
                                    to="/shop"
                                    className="block text-center mt-4 border border-orange-500 hover:bg-orange-500 py-3 rounded-lg transition"
                                >
                                    Continue Shopping
                                </Link>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
};

export default Cart;