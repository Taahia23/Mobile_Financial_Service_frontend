import React, { useState } from "react";
import axios from "axios";
import "../styles/RegistrationPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    nid: "",
    pin: "",
    accountType: "User",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("Registration Successful! Please log in.");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="body">
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input className="input-field" name="name" type="text" placeholder="Name" onChange={handleChange} required />
        <input className="input-field" name="mobile" type="text" placeholder="Mobile Number" onChange={handleChange} required />
        <input className="input-field" name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input className="input-field" name="nid" type="text" placeholder="NID" onChange={handleChange} required />
        <input className="input-field" name="pin" type="password" placeholder="PIN (5 digits)" onChange={handleChange} required />
        <select className="custom-dropdown" name="accountType" onChange={handleChange}>
            <option value="User" className="custom-option">User</option>
            <option value="Agent" className="custom-option">Agent</option>
        </select>

        <button className="login-button" type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;
