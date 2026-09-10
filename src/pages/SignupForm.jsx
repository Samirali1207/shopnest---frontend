import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import axios from "axios"
const SignupForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const res = await axios.post(`${import.meta.env.VITE_URL}/api/auth/register`, formData, {
                headers: { "content-type": "application/json" }
            })

            if (res.status == 200 || res.status == 201) {
                alert(res.data.message)
                navigate("/verify-message")
            }
        }
        catch (err) {
            alert(err.response.data.message)
        }

    }

    return (
        <>
            <div className="flex justify-center items-center min-h-[70vh] px-4">
                <form onSubmit={handleSubmit} className="relative overflow-hidden flex flex-col gap-5 w-full max-w-[420px] bg-zinc-900 p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5">

                    <h2 className="text-center text-3xl font-bold text-white mb-2">
                        Register
                    </h2>


                    <input
                        type="text"
                        placeholder="Full Name"
                        onChange={handleChange}
                        name='name'
                        value={formData.name}
                        className="px-4 py-[15px] bg-zinc-950 border border-zinc-800 rounded-lg text-[15px] text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name='email'
                        value={formData.email}
                        className="px-4 py-[15px] bg-zinc-950 border border-zinc-800 rounded-lg text-[15px] text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name='password'
                        value={formData.password}
                        className="px-4 py-[15px] bg-zinc-950 border border-zinc-800 rounded-lg text-[15px] text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />

                    <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition">
                        Register
                    </button>

                    <p className="text-center mt-4 text-zinc-400">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-orange-500 font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </>

    )
}

export default SignupForm