import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
    });

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    if (!user || user.role !== "admin") {
        navigate("/");
        return null;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert("Please select an image");
            return;
        }

        setLoading(true);

        const data = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        data.append("image", image);

        try {
            const res = await axios.post(`${import.meta.env.VITE_URL}/api/product`, data, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })

            console.log(res.data)

            if (res.status == 200 || res.status == 201) {
                alert("Product created successfully!");
                navigate("/shop");
            } else {
                alert(res.data.message || "Error creating product");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold text-orange-500 mb-6">
                Add New Product
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Product Name */}
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                />

                {/* Description */}
                <textarea
                    rows="4"
                    name="description"
                    placeholder="Description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none resize-none focus:border-orange-500"
                />

                {/* Price */}
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                />

                {/* Category */}
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                />

                {/* Stock */}
                <input
                    type="number"
                    name="stock"
                    placeholder="Stock Quantity"
                    required
                    value={formData.stock}
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
                />

                {/* Image Upload */}
                <div className="border-2 border-dashed border-orange-500 rounded-lg p-5">

                    <label className="block text-zinc-400 mb-3">
                        Upload Product Image (Cloudinary)
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                        className="text-white"
                    />

                    {image && (
                        <p className="text-green-400 mt-3">
                            Selected: {image.name}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
                >
                    {loading ? "Uploading & Creating..." : "Publish Product"}
                </button>

            </form>
        </div>
    );
};

export default AddProduct;