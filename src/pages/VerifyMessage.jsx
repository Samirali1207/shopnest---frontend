import React from "react";
import { Link } from "react-router-dom";

const VerifyMessage = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-8 text-center">

                {/* Email Icon */}
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-orange-500/20 text-4xl mb-6">
                    📧
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold text-white mb-4">
                    Check Your Email
                </h1>

                {/* Description */}
                <p className="text-gray-400 leading-7 text-sm sm:text-base">
                    Thank you for signing up with{" "}
                    <span className="text-orange-500 font-semibold">ShopNest</span>.
                    <br />
                    We've sent a verification link to your email address.
                    <br />
                    Please open your inbox and click the link to activate your account.
                </p>

                {/* Info Box */}
                <div className="mt-6 bg-zinc-800 border border-zinc-700 rounded-xl p-4">
                    <p className="text-white font-medium">
                        Didn't receive the email?
                    </p>

                    <p className="text-gray-400 text-sm mt-2">
                        Check your <span className="text-orange-500">Spam</span> or{" "}
                        <span className="text-orange-500">Promotions</span> folder.
                        If it's still missing, click the button below to resend it.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                        Resend Email
                    </button>

                    <Link
                        to="/login"
                        className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center"
                    >
                        Go to Login
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default VerifyMessage;