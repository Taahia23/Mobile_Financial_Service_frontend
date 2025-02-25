import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="hero-text">Welcome to Hynex</h1>
            <p>Your trusted platform for secure transactions.</p>
            <div className="buttons-container">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Register</Link>
            </div>
        </div>
    );
};

export default HomePage;
