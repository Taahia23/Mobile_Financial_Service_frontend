import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css"; 
import axios from "axios";
import TransactionForm from "../componenrs/Form";
const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [balance, setBalance] = useState(null);
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        logout(navigate);
    };

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                if (!token) {
                    alert("No token found. Please log in.");
                    navigate("/login");
                    return;
                }
    
                const { data } = await axios.get("http://localhost:5000/api/user/balance", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setBalance(data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
                alert("Error fetching balance: " + error.response?.data?.message);
            }
        };
    
        fetchBalance();
    }, [token, balance]);
    
    

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </header>

            <main className="dashboard-content">
                <h2>Welcome <span>{user?.accountType}</span></h2>
                <h3>Balance: {balance !== null ? `${balance} Taka` : "Loading..."}</h3>

                <p>Manage your account settings, transactions, and preferences easily from here.</p>

                <div className="dashboard-cards">
                    <div className="card">
                        <h3>Profile</h3>
                        <p>View and update your profile details.</p>
                    </div>
                    <div className="card">
                        <h3>Transactions</h3>
                        <p>Check your recent transactions and history.</p>
                    </div>
                    <div className="card">
                        <h3>Settings</h3>
                        <p>Adjust your account settings and preferences.</p>
                    </div>
                </div>
                <TransactionForm type="send-money" />
                       {user?.accountType === "User" && <TransactionForm type="cash-out" />}
                       {user?.accountType === "Agent" && <TransactionForm type="cash-in" />}
            </main>
        </div>
    );
};

export default Dashboard;
