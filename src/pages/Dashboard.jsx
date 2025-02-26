import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(navigate)
    }
  
    return (
      <div>
        <h1>Welcome, {user?.accountType}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  

export default Dashboard;