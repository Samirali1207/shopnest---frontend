import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const AdminOrders = () => {
    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([])

    const [status, setStatus] = useState("")

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_URL}/api/order`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                setOrders(res.data)

            } catch (error) {
                console.log(error);
            }
        };

        fetchOrders();

    }, [user]);

    const updateStatus = async (id, status) => {
        try {
            const res = await axios.put(`${import.meta.env.VITE_URL}/api/order/${id}/status`, {status}, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })

            console.log(res.data)

            if (res.ok) {
                setOrders(
                    orders.map((order) =>
                        order._id === id ? { ...order, status } : order
                    )
                );
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-7xl mx-auto my-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8">

            {/* Heading */}
            <h2 className="text-3xl font-bold text-orange-500 mb-8">
                Manage Orders
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>
                        <tr className="border-b border-zinc-700">

                            <th className="text-left p-4 text-zinc-400">
                                ORDER ID
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                USER
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                TOTAL
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                DATE
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                STATUS
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                order status
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {orders.map((order) => (
                            <tr
                                key={order._id}
                                className="border-b border-zinc-800 hover:bg-zinc-800 transition"
                            >

                                <td className="p-4">
                                    {order._id.substring(0, 8)}...
                                </td>

                                <td className="p-4">
                                    {order.user.name|| "Deleted User"}
                                </td>

                                <td className="p-4">
                                    ₹{order.totalAmount.toFixed(2)}
                                </td>

                                <td className="p-4">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </td>

                                <td className="p-4">
                                    {order.status}
                                </td>

                                <td className="p-4">

                                    <select
                                        value={order.status}
                                        onChange={(e) =>
                                            updateStatus(order._id, e.target.value)
                                        }
                                        className="bg-zinc-950 border border-zinc-700 rounded-md px-3 py-2 text-white outline-none focus:border-orange-500"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>

                                </td>

                            </tr>
                        ))}

                        {orders.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center py-10 text-zinc-400"
                                >
                                    No Orders Found
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AdminOrders;