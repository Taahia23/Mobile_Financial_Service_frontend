import React, { createContext, useState, useEffect } from "react";  
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (error) {
                console.error("Invalid Token Error:", error);
                localStorage.removeItem("token");
            }
        }
    }, []);

    const login = (token, navigate) => {
        if (!token) return;
        localStorage.setItem("token", token);
        try {
            const decoded = jwtDecode(token);
            setUser(decoded);
            navigate("/");
        } catch (error) {
            console.error("Invalid Token on Login:", error);
            localStorage.removeItem("token");
        }
    };

    const logout = (navigate) => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
