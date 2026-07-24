import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_URL}/api/product`,)
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Filter products based on search
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen  px-4 py-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center  mb-8">
                All Products
            </h2>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            {/* Loading */}
            {loading ? (
                <div className="text-center text-lg font-medium text-gray-600">
                    Loading...
                </div>
            ) : (
                <>
                    {filteredProducts.length > 0 ? (
                        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-red-500 text-lg">
                            No products found.
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Shop;