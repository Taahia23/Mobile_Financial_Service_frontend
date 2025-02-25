import React, { useState } from "react";
import axios from "axios";

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
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
        <input name="mobile" type="text" placeholder="Mobile Number" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="nid" type="text" placeholder="NID" onChange={handleChange} required />
        <input name="pin" type="password" placeholder="PIN (5 digits)" onChange={handleChange} required />
        <select name="accountType" onChange={handleChange}>
          <option value="User">User</option>
          <option value="Agent">Agent</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
