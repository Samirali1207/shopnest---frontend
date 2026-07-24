import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-orange-500">
              ShopNest
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Premium E-Commerce Platform.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              to="/about"
              className="text-sm text-zinc-400 hover:text-orange-500 transition duration-300"
            >
              About Us
            </Link>

            <Link
              to="/return"
              className="text-sm text-zinc-400 hover:text-orange-500 transition duration-300"
            >
              Return Policy
            </Link>

            <Link
              to="/disclaimer"
              className="text-sm text-zinc-400 hover:text-orange-500 transition duration-300"
            >
              Disclaimer
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} ShopNest.
            </p>

            <p className="text-sm text-zinc-500">
              All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;