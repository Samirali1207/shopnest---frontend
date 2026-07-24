import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/Global.css";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./pages/ProductDetails";
import About from "./pages/About";
import ReturnPolicy from "./pages/ReturnPolicy";
import Disclaimer from "./pages/Disclaimer";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import OrderSuccess from "./pages/OrderSuccess";
import AdminDashboard from "./Admin/AdminDashboard";
import AddProduct from "./Admin/AddProduct";
import AdminProducts from "./Admin/AdminProducts";
import EditProduct from "./Admin/EditProduct";
import AdminOrders from "./Admin/AdminOrders";
import AdminUsers from "./Admin/AdminUsers";
import Checkout from "./pages/Checkout";
import Verify from "./pages/Verify";
import VerifyMessage from "./pages/VerifyMessage";
import ProductDetails from "./pages/ProductDetails";
import GuestRoute from "./context/GuestRoute";
const App = () => {
    return (

        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<GuestRoute> <LoginForm /> </GuestRoute>} />
                <Route path="/signup" element={<GuestRoute><SignupForm /></GuestRoute>} />
                <Route path="/verify/:token" element={<Verify />} />
                <Route path="//verify-message" element={<VerifyMessage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/return" element={< ReturnPolicy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/ordersuccess" element={<OrderSuccess />} />
                <Route path="/checkout" element={<Checkout />} />
                {/* admin routes are here  */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/add-product" element={<AddProduct />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/edit-product/:id" element={<EditProduct />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
                <Route path="/admin/users" element={<AdminUsers />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;