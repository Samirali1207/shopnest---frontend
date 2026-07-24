import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import axios from "axios"
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/product`,)
        console.log(res)
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getFeaturedProducts();
  }, []);



  return (
    <div className="bg-gray-950 text-white">

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <p className="text-orange-500 font-semibold mb-4">
              Welcome to ShopNest
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Find Your
              <span className="text-orange-500"> Perfect Product</span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-8">
              Shop from thousands of premium products with fast delivery,
              secure payments, and the best prices.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/shop"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="border border-orange-500 hover:bg-orange-500 px-6 py-3 rounded-lg transition"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
              alt="Shopping"
              className="rounded-2xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="bg-gray-900 py-16">

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold text-xl">Free Shipping</h3>
            <p className="text-gray-400 mt-2">
              On all orders above ₹999
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-bold text-xl">Secure Payment</h3>
            <p className="text-gray-400 mt-2">
              100% secure payment gateway
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-bold text-xl">Best Quality</h3>
            <p className="text-gray-400 mt-2">
              Premium quality products
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">↩️</div>
            <h3 className="font-bold text-xl">Easy Returns</h3>
            <p className="text-gray-400 mt-2">
              30-day return policy
            </p>
          </div>

        </div>

      </section>

      {/* Featured Products */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-4xl font-bold">
              Featured Products
            </h2>

            <p className="text-gray-400 mt-2">
              Hand-picked products just for you.
            </p>

          </div>

          <Link
            to="/shop"
            className="text-orange-500 hover:underline"
          >
            View All →
          </Link>

        </div>

        {loading ? (
          <div className="text-center text-orange-500 text-xl">
            Loading Products...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        )}

      </section>

    </div>
  );
};

export default Home;