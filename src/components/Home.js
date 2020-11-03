import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
            <div className="home-card card">
                <div className="transbox">
                    <h1>Welcome to the Oracle Library!</h1>
                    <h5>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h5>
                </div>
            </div>
    );
}

export default Home;