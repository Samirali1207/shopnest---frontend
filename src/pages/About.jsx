import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white px-5 py-12">
            <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">

                {/* Profile Section */}
                <div className="flex flex-col items-center text-center">

                    <img
                        src="/dp.jpg"
                        alt="@theshivanshvasu"
                        className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                    />

                    <h1 className="mt-6 text-3xl sm:text-4xl font-bold">
                        About Me
                    </h1>

                    <h2 className="mt-2 text-xl sm:text-2xl text-orange-500 font-semibold">
                        Samir Ali (Mern stack Developer )
                    </h2>

                    <p className="mt-6 max-w-2xl text-gray-300 leading-8 text-base sm:text-lg">
                        <span className="font-semibold text-white">
                            Join the community and grow together!
                        </span>
                        <br />
                        Welcome to my platform where we build, deploy, and scale highly
                        engineered systems while learning modern web development and
                        software engineering together.
                    </p>

                </div>

                {/* Social Links */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <a
                        href="https://theshivanshvasu.com"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-800 hover:bg-orange-500 hover:text-white transition duration-300 rounded-lg py-3 text-center font-medium border border-gray-700"
                    >
                        🌐 Website
                    </a>

                    <a
                        href="https://youtube.com/@shivanshvasu"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-red-900/20 text-red-400 border border-red-500 hover:bg-red-500 hover:text-white transition duration-300 rounded-lg py-3 text-center font-medium"
                    >
                        📺 YouTube
                    </a>

                    <a
                        href="https://instagram.com/theshivanshvasuofficial"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-pink-900/20 text-pink-400 border border-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 rounded-lg py-3 text-center font-medium"
                    >
                        📸 Instagram
                    </a>

                    <a
                        href="https://www.linkedin.com/in/theshivanshvasu"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-900/20 text-blue-400 border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 rounded-lg py-3 text-center font-medium"
                    >
                        💼 LinkedIn
                    </a>

                    <a
                        href="https://x.com/theshivanshvasu"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-800 border border-gray-700 hover:bg-orange-500 hover:text-white transition duration-300 rounded-lg py-3 text-center font-medium"
                    >
                        ✖️ X (Twitter)
                    </a>

                    <a
                        href="https://whatsapp.com/channel/0029VbAWGE5ICVfcjjKTAS0B"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-900/20 text-green-400 border border-green-500 hover:bg-green-500 hover:text-white transition duration-300 rounded-lg py-3 text-center font-medium"
                    >
                        💬 WhatsApp
                    </a>

                    <a
                        href="https://linktr.ee/shivanshvasu"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-800 border border-gray-700 hover:bg-orange-500 hover:text-white transition duration-300 rounded-lg py-3 text-center font-medium sm:col-span-2 lg:col-span-3"
                    >
                        🔗 Linktree
                    </a>

                </div>

            </div>
        </div>
    );
};

export default About;