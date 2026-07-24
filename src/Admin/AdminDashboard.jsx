import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"


const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [stats, setStats] = useState({});

    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/");
            return;
        }

        const fetchStats = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_URL}/api/analytics`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                if (res.status == 200 || res.status == 201) {
                    setStats(res.data)
                }

                else {
                    setStats({
                        totalOrders: 0,
                        totalUsers: 0,
                        totalProducts: 0,
                        totalRevenue: 0,
                    })
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchStats();
    }, [user, navigate]);

    return (
        <div className="min-h-screenpy-10 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-2">
                    <img
                        src="/ShopNestLogo.png"
                        alt="Logo"
                        className="w-12 h-12 rounded-lg shadow-md"
                    />

                    <h1 className="text-3xl font-bold ">
                        Admin Dashboard
                    </h1>

                </div>

                <p className="text-red-600 text-lg mb-10">
                    Welcome back,
                    <span className="font-semibold text-blue-600">
                        {" "}
                        {user?.name}
                    </span>
                </p>

                {/* Loading */}
                {!stats ? (
                    <div className="text-center text-xl font-semibold text-blue-600">
                        Loading metrics...
                    </div>
                ) : (
                    <>
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div className="rounded-xl bg-gray-900 shadow-md p-6 text-center">
                                <h3 className="text-gray-500 mb-3">Total Orders</h3>
                                <p className="text-4xl font-bold text-blue-600">
                                    {stats.totalOrders}
                                </p>
                            </div>

                            <div className=" rounded-xl  bg-gray-900 shadow-md p-6 text-center">
                                <h3 className="text-gray-500 mb-3">Total Products</h3>
                                <p className="text-4xl font-bold text-green-600">
                                    {stats.totalProducts}
                                </p>
                            </div>

                            <div className=" rounded-xl  bg-gray-900 shadow-md p-6 text-center">
                                <h3 className="text-gray-500 mb-3">Total Users</h3>
                                <p className="text-4xl font-bold text-purple-600">
                                    {stats.totalUsers}
                                </p>
                            </div>

                            <div className="rounded-xl  bg-gray-900 shadow-md p-6 text-center">
                                <h3 className="text-gray-500 mb-3">Total Revenue</h3>
                                <p className="text-4xl font-bold text-red-500">
                                    ₹{Number(stats.totalRevenue).toFixed(2)}
                                </p>
                            </div>
                        </div>

                        {/* Admin Controls */}
                        <div className="rounded-xl shadow-md bg-gray-900 p-8 mt-10">
                            <h2 className="text-2xl font-bold mb-6">
                                Administrative Controls
                            </h2>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate("/admin/add-product")}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                                >
                                    + Add Product
                                </button>

                                <button
                                    onClick={() => navigate("/admin/products")}
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                                >
                                    📦 Manage Products
                                </button>

                                <button
                                    onClick={() => navigate("/admin/orders")}
                                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
                                >
                                    🚚 Manage Orders
                                </button>

                                <button
                                    onClick={() => navigate("/admin/users")}
                                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
                                >
                                    👥 Users Directory
                                </button>

                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;