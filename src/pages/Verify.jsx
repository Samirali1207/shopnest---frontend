import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Verify = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [status, setStatus] = useState("verifying");
    const [message, setMessage] = useState("Verifying your email...");

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const res = await axios.post(
                    `${import.meta.env.VITE_URL}/api/auth/verify/${token}`
                );

                if (res.status == 200 || res.status == 201) {
                    setStatus("success");
                    setMessage(res.data.message || "Email Verified Successfully!");

                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                }

            } catch (err) {
                setStatus("error");
                setMessage(
                    err.response?.data?.message || "Verification failed."
                );
            }
        };

        verifyUser();
    }, [token, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">

                {status === "verifying" && (
                    <>
                        <div className="mx-auto w-14 h-14 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

                        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
                            {message}
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Please wait while we verify your email.
                        </p>
                    </>
                )}

                {status === "success" && (
                    <>
                        <div className="text-6xl">✅</div>

                        <h2 className="mt-4 text-2xl font-bold text-green-600">
                            {message}
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Redirecting to Login...
                        </p>
                    </>
                )}

                {status === "error" && (
                    <>
                        <div className="text-6xl">❌</div>

                        <h2 className="mt-4 text-2xl font-bold text-red-600">
                            Verification Failed
                        </h2>

                        <p className="mt-2 text-gray-500">
                            {message}
                        </p>
                    </>
                )}

            </div>
        </div>
    );
};

export default Verify;