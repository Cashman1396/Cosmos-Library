import React from 'react';
import { Link } from 'react-router-dom'


const Welcome = () => {
    return (
            <div className="welcome card">
                <div className="transbox">
                    <h1>Welcome to your Library</h1>
                    <br/>
                    <h5>Choose to <Link to="/videoGames">View</Link> your games or <Link to="/videoGames/new">Add</Link> a new video game to the library</h5>
                </div>
            </div>
    );
}

export default Welcome