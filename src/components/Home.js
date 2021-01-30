//Home Page component 
import React from 'react';
import { Link } from 'react-router-dom'

//home page
const Home = () => {
    return (
            <div className="home card">
                <div className="gamesbox">
                    <h1>Welcome to the Cos-mos!</h1>
                    <h5>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h5>
                </div>
            </div>
    );
}

export default Home;