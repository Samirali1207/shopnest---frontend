import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios"

const AdminUsers = () => {
    const { user } = useContext(AuthContext);

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`${import.meta.env.VITE_URL}/api/auth/getUsers`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            console.log(res.data)
            setUsers(res.data)
        };

        fetchUsers();
    }, [user]);


    return (
        <div className="max-w-7xl mx-auto my-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8">

            {/* Heading */}
            <h2 className="text-3xl font-bold text-orange-500 mb-8">
                User Directory
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>
                        <tr className="border-b border-zinc-700">

                            <th className="text-left p-4 text-zinc-400">
                                ID
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                NAME
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                EMAIL
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                ROLE
                            </th>

                            <th className="text-left p-4 text-zinc-400">
                                JOINED
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {users.map((u) => (
                            <tr
                                key={u._id}
                                className="border-b border-zinc-800 hover:bg-zinc-800 transition"
                            >

                                <td className="p-4">
                                    {u._id.substring(0, 8)}...
                                </td>

                                <td className="p-4">
                                    {u.name}
                                </td>

                                <td className="p-4">
                                    {u.email}
                                </td>

                                <td className="p-4">
                                    <span
                                        className={`px-3 py-1 rounded-md text-sm font-semibold ${u.role === "admin"
                                            ? "bg-orange-500/20 text-orange-500"
                                            : "bg-green-500/20 text-green-400"
                                            }`}
                                    >
                                        {u.role.toUpperCase()}
                                    </span>
                                </td>

                                <td className="p-4">
                                    {new Date(u.createdAt).toLocaleDateString()}
                                </td>

                            </tr>
                        ))}

                        {users.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center py-10 text-zinc-400"
                                >
                                    No Users Found
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AdminUsers;