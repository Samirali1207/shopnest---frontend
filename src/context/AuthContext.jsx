import React, { createContext, useState } from 'react';
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cartsSlice";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    const [user, setUser] = useState(
        localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    );

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('userInfo', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userInfo');
        dispatch(clearCart());
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
