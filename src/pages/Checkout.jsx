import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
    // Demo User
    const user = {
        name: "Sameer Ali",
        email: "sameer@gmail.com",
    };

    // Demo Cart Items
    const cartItems = [
        {
            _id: "1",
            name: "Wireless Headphones",
            price: 2999,
            qty: 1,
        },
        {
            _id: "2",
            name: "Gaming Mouse",
            price: 1499,
            qty: 2,
        },
        {
            _id: "3",
            name: "Mechanical Keyboard",
            price: 4599,
            qty: 1,
        },
    ];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [address, setAddress] = useState({
        fullName: "",
        street: "",
        city: "",
        postalCode: "",
        country: "",
    });


    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };

    const handlePayment = async () => {
        // Your existing Razorpay logic
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        handlePayment();
    };

    return (
        <div className="max-w-4xl mx-auto my-10 px-4">

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">

                <h2 className="text-3xl font-bold text-orange-500 mb-8">
                    Checkout
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Shipping Form */}

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >

                        <h3 className="text-xl font-semibold text-white mb-2">
                            Shipping Address
                        </h3>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={address.fullName}
                            onChange={handleChange}
                            required
                            className="p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                        />

                        <input
                            type="text"
                            name="street"
                            placeholder="Street"
                            value={address.street}
                            onChange={handleChange}
                            required
                            className="p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={address.city}
                            onChange={handleChange}
                            required
                            className="p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                        />

                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={address.postalCode}
                            onChange={handleChange}
                            required
                            className="p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                        />

                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={address.country}
                            onChange={handleChange}
                            required
                            className="p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                        />

                    </form>

                    {/* Order Summary */}

                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 h-fit">

                        <h3 className="text-xl font-semibold text-white mb-5">
                            Order Summary
                        </h3>

                        <div className="space-y-3">

                            {cartItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex justify-between text-zinc-300"
                                >
                                    <span>
                                        {item.name} × {item.qty}
                                    </span>

                                    <span>
                                        ₹{(item.price * item.qty).toFixed(2)}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <hr className="my-5 border-zinc-700" />

                        <div className="flex justify-between text-xl font-bold text-white">

                            <span>Total</span>

                            <span className="text-orange-500">
                                ₹{totalPrice.toFixed(2)}
                            </span>

                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
                        >
                            Pay Now
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Checkout;