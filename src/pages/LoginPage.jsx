import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        console.log("Sending Login Request with:", { email, pin });
        const { data } = await axios.post(
            "https://backend-owff68ik2-taahia-tahsins-projects.vercel.app/api/auth/login",
            { email, pin: pin.toString().trim() },
            { withCredentials: true }
        );
        console.log("Server Response:", data);
        login(data.token, navigate);
    } catch (error) {
        console.error("Login failed:", error.response ? error.response.data : error.message);
        alert("Login failed: " + (error.response?.data?.message || "Unknown error"));
    }
};


  return (
    <div className="body">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter your PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
