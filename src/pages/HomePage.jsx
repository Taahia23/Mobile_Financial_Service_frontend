import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>home is cretaed</h1>
            <Link to="/login">Go to Login</Link>
            <br />
            <Link to="/register">Go to register</Link>
        </div>
    );
};

export default HomePage;