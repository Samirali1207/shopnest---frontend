
import React, { useState, useContext } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { clearCart } from "../redux/features/cartsSlice";

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [address, setAddress] = useState({
        fullName: "",
        street: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
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
        try {
            const keyResponse = await axios.get(
                `${import.meta.env.VITE_URL}/api/payment/getkey`
            );

            const orderResponse = await axios.post(
                `${import.meta.env.VITE_URL}/api/payment/order`,
                {
                    amount: totalPrice,
                }
            );

            const orderData = orderResponse.data;

            const options = {
                key: keyResponse.data,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Sameer Ali Corp.Ltd.",
                description: "ShopNest Order",
                order_id: orderData.id,
                handler: async function (response) {
                    setLoading(true)
                    try {
                        const verifyResponse = await axios.post(
                            `${import.meta.env.VITE_URL}/api/payment/verify`,
                            {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            }
                        );

                        if (verifyResponse.data.success) {

                            const orderResponse = await axios.post(
                                `${import.meta.env.VITE_URL}/api/order`,
                                {
                                    totalAmount: totalPrice,
                                    items: cartItems,
                                    address: address,
                                    paymentId: response.razorpay_payment_id,
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${user.token}`,
                                    },
                                }
                            );

                            alert("Order Created:", orderResponse.data);

                            dispatch(clearCart());

                            navigate(
                                `/ordersuccess?reference=${response.razorpay_payment_id}`
                            );
                        }

                    } catch (error) {
                        console.error("ERROR:", error);
                        console.error("STATUS:", error.response?.status);
                        console.error("DATA:", error.response?.data);

                        alert(
                            error.response?.data?.message ||
                            "Payment verification failed"
                        );

                        setLoading(false)
                    }
                },
                prefill: {
                    name: address.fullName,
                    email: user?.email || "",
                    contact: address.phone,
                },

                notes: {
                    address: `${address.street}, ${address.city}, ${address.postalCode}, ${address.country}`,
                },

                theme: {
                    color: "#f97316",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();


        } catch (error) {
            console.error(
                "Payment Error:",
                error.response?.data || error.message
            );

            alert(
                error.response?.data?.message ||
                "Unable to initialize payment"
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        if (cartItems.length === 0) {
            alert("Your cart is empty");
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

                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="flex flex-col gap-4">

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

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={address.phone}
                                onChange={handleChange}
                                required
                                className="p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                            />

                        </div>

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
                                type="submit"
                                disabled={loading}
                                className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
                            >
                                {loading ? "Processing Payment..." : "Pay Now"}
                            </button>

                        </div>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Checkout;

