import React from 'react';
import { Link } from 'react-router-dom'


const Welcome = () => {
    return (
            <div className="welcome card">
                <div className="gamesbox">
                    <h1>Welcome to your Library</h1>
                    <br/>
                    <h5>Choose to <Link to="/videoGames">View</Link> your Library or <Link to="/videoGames/new">Add</Link> a new item to the library</h5>
                </div>
            </div>
    );
}

export default Welcome