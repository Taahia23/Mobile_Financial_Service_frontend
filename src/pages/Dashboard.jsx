import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css"; 
const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(navigate);
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </header>

            <main className="dashboard-content">
                <h2>Welcome, <span>{user?.accountType}</span></h2>
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
            </main>
        </div>
    );
};

export default Dashboard;
