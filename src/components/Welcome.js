import React from 'react';
import { Link } from 'react-router-dom'


const Welcome = () => {
    return (
            <div className="welcome card">
                <div className="transbox">
                    <h1>Welcome</h1>
                    <h4>to your Library</h4>
                    <br/>
                    <h5>Choose to <Link to="/videoGames">view</Link> your games or <Link to="/videoGames/new">add</Link> a new video game to your arsenal</h5>
                </div>
            </div>
    );
}

export default Welcome