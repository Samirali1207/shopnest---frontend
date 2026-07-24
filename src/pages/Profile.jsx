import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [orders, setOrder] = useState([])

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        fetchMyOrders();
    }, [user, navigate]);

    const fetchMyOrders = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_URL}/api/order/myOrders`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            if (res.status == 200 || res.status == 201) {
                setOrder(res.data)
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-950 px-4 py-10">

            <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-6 md:p-10">

                {/* Profile Header */}

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-b border-gray-700 pb-8">

                    <div>

                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-5">
                            My Profile
                        </h1>

                        <p className="text-gray-300 mb-2">
                            <span className="font-semibold text-white">
                                Name :
                            </span>{" "}
                            {user.name}
                        </p>

                        <p className="text-gray-300 mb-4">
                            <span className="font-semibold text-white">
                                Email :
                            </span>{" "}
                            {user.email}
                        </p>

                        <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg font-semibold">
                            {user.role.toUpperCase()}
                        </span>

                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Logout
                    </button>

                </div>

                {/* Order Heading */}

                <div className="mt-10">

                    <h2 className="text-2xl font-bold text-orange-500 mb-6">
                        Order History
                    </h2>

                    {loading ? (
                        <div className="text-center text-gray-400 text-lg">
                            Fetching your orders...
                        </div>
                    ) : orders.length === 0 ? (

                        <div className="bg-gray-950 border border-gray-800 rounded-xl p-10 text-center">

                            <h3 className="text-xl text-white mb-3">
                                No Orders Found
                            </h3>

                            <p className="text-gray-400 mb-6">
                                You haven't placed any orders yet.
                            </p>

                            <Link
                                to="/shop"
                                className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Start Shopping
                            </Link>

                        </div>

                    ) : (

                        <div className="space-y-6">

                            {orders.map((order) => (

                                <div
                                    key={order._id}
                                    className="bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row justify-between gap-6 hover:border-orange-500 transition"
                                >

                                    <div className="space-y-2">

                                        <p className="text-gray-400 break-all">
                                            <span className="text-white font-semibold">
                                                Order ID :
                                            </span>{" "}
                                            {order._id}
                                        </p>

                                        <p className="text-gray-400">
                                            <span className="text-white font-semibold">
                                                Date :
                                            </span>{" "}
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </p>

                                        <p className="text-gray-400">
                                            <span className="text-white font-semibold">
                                                Total :
                                            </span>{" "}
                                            <span className="text-green-400 font-bold">
                                                ₹{order.totalAmount.toFixed(2)}
                                            </span>
                                        </p>

                                    </div>

                                    <div className="flex items-center">

                                        <span
                                            className={`px-5 py-2 rounded-full font-semibold
                      ${order.status === "Delivered"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : order.status === "Shipped"
                                                        ? "bg-blue-500/20 text-blue-400"
                                                        : "bg-yellow-500/20 text-yellow-400"
                                                }`}
                                        >
                                            {order.status}
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default Profile;