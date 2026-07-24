import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const EditProduct = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/api/product/${id}`);

      const data = res.data

      setFormData({
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        stock: data.stock,
      });
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (image) {
      data.append("image", image);
    }

    const res = await axios.put(`${import.meta.env.VITE_URL}/api/product/${id}`, data, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })

    setLoading(false);

    if (res.status == 200 || res.status == 201) {
      alert("Product Updated Successfully!");
      navigate("/admin/products");
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8">

      <h2 className="text-3xl font-bold text-orange-500 mb-6">
        Edit Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
        />

        <textarea
          rows="4"
          name="description"
          placeholder="Description"
          required
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none resize-none focus:border-orange-500"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          required
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          required
          value={formData.stock}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md text-white outline-none focus:border-orange-500"
        />

        <div className="border-2 border-dashed border-orange-500 rounded-lg p-5">

          <label className="block text-zinc-400 mb-3">
            Replace Image (Optional)
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="text-white"
          />

          {image && (
            <p className="mt-3 text-green-400">
              Selected: {image.name}
            </p>
          )}

        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Product"}
        </button>

      </form>

    </div>
  );
};

export default EditProduct;