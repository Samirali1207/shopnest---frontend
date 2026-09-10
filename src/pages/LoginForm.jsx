
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import axios from "axios"

const LoginForm = () => {

    const { login } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [showResend, setShowResend] = useState(false)
    const [resending, setResending] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const res = await axios.post(
                `${import.meta.env.VITE_URL}/api/auth/login`,
                formData,
                {
                    headers: {
                        "content-type": "application/json"
                    }
                }
            )

            if (res.status == 200 || res.status == 201) {
                alert(res.data.message)
                login(res.data)
                navigate("/")
            }

        } catch (error) {

            alert(error.response?.data?.message)

            if (error.response?.status === 401) {
                setShowResend(true)
            } else {
                setShowResend(false)
            }
        }
    }

    const resendVerification = async () => {
        try {

            setResending(true)

            const res = await axios.post(
                `${import.meta.env.VITE_URL}/api/auth/resend-verification`,
                {
                    email: formData.email
                }
            )

            alert(res.data.message)

            
            setShowResend(false)

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Failed to resend verification email"|| error.response.data.message
            )

        } finally {
            setResending(false)
        }
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-[70vh] px-4">

                <form
                    onSubmit={handleSubmit}
                    className="relative overflow-hidden flex flex-col gap-5 w-full max-w-[420px] bg-zinc-900 p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5"
                >

                    <h2 className="text-center text-3xl font-bold text-white mb-2">
                        Login Account
                    </h2>

                    <input
                        type="text"
                        placeholder="Full Name"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                        className="px-4 py-[15px] bg-zinc-950 border border-zinc-800 rounded-lg text-[15px] text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        className="px-4 py-[15px] bg-zinc-950 border border-zinc-800 rounded-lg text-[15px] text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
                        className="px-4 py-[15px] bg-zinc-950 border border-zinc-800 rounded-lg text-[15px] text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />

                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition"
                    >
                        Login
                    </button>

                    {showResend && (
                        <button
                            type="button"
                            onClick={resendVerification}
                            disabled={resending}
                            className="bg-zinc-800 hover:bg-zinc-700 text-orange-500 py-3 rounded-lg transition"
                        >
                            {resending
                                ? "Sending..."
                                : "Resend Verification Email"}
                        </button>
                    )}

                    <p className="text-center mt-4 text-zinc-400">
                        Dont have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-orange-500 font-semibold hover:underline"
                        >
                            SignUp
                        </Link>
                    </p>

                </form>
            </div>
        </>
    )
}

export default LoginForm 
