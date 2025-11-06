import React, { createContext, useContext, useState, useEffect } from "react";
import { getEncryptedCookie } from "../utils/cookieCrypto";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ isAuthenticated: false });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedAuth = getEncryptedCookie("auth");
        const storedProfile = getEncryptedCookie("profile");

        if (storedAuth) {
            setUser({ ...storedAuth, ...storedProfile, isAuthenticated: true });
        }
        setLoading(false);
    }, []);

    const logout = () => {
        setUser({ isAuthenticated: false });
        document.cookie = "auth=; Max-Age=0";
        document.cookie = "profile=; Max-Age=0";
        localStorage.clear();
    };

    const isAuthenticated = user?.isAuthenticated ?? false;

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
