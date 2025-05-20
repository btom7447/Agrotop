import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("userData") || sessionStorage.getItem("userData");
        if (storedUser) {
            setIsLoggedIn(true);
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    const login = (token, user, remember) => {
        if (remember) {
            localStorage.setItem("token", token);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userData", JSON.stringify(user));
        } else {
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("userData", JSON.stringify(user));
        }
        setIsLoggedIn(true);
        setUserData(user);
    };

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        setIsLoggedIn(false);
        setUserData(null);
        window.location.href = "/";
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
