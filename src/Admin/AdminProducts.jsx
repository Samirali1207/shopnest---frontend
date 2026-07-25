import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`${import.meta.env.VITE_URL}/api/product`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })

            setProducts(res.data)

        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            if (window.confirm("Are you sure you want to delete this product?")) {
                const res = await axios.delete(`${import.meta.env.VITE_URL}/api/product/${id}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
                if (res.status == 200 || res.status == 201) {
                    setProducts(products.filter((p) => p._id !== id));
                    alert(res.data.message)
                }
            }
        } catch (error) {
            console.log(error.response.data)
        }
    };

    return (
        <div className="max-w-7xl mx-auto my-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">

                <h2 className="text-3xl font-bold text-orange-500">
                    Manage Products
                </h2>

                <Link
                    to="/admin/add-product"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md transition"
                >
                    + Add Product
                </Link>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>
                        <tr className="border-b border-zinc-700">

                            <th className="text-left p-4 text-zinc-400">
                                ID
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                NAME
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                PRICE
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                CATEGORY
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                STOCK
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                ACTIONS
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {products.map((product) => (

                            <tr
                                key={product._id}
                                className="border-b border-zinc-800 hover:bg-zinc-800 transition"
                            >

                                <td className="p-4">
                                    {product._id.substring(0, 8)}...
                                </td>

                                <td className="p-4">
                                    {product.name}
                                </td>

                                <td className="p-4">
                                    ₹{product.price.toFixed(2)}
                                </td>

                                <td className="p-4">
                                    {product.category}
                                </td>

                                <td className="p-4">
                                    {product.stock}
                                </td>

                                <td className="p-4">

                                    <div className="flex gap-3">

                                        <Link
                                            to={`/admin/edit-product/${product._id}`}
                                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                        {products.length === 0 && (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-center py-8 text-zinc-400"
                                >
                                    No Products Found
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AdminProducts;