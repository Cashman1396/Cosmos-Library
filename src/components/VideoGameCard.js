import React from 'react';
import { Link } from 'react-router-dom'

const VideoGameCard = ({ videoGame }) => {
    return (
        videoGame ? 
            <div className="card">
                <div className="gamesbox">
                    <p><img src={videoGame.attributes.image_url} alt="cover art"></img></p>
                    <h3>{videoGame.attributes.game_name}</h3>
                    <p>Year: {videoGame.attributes.year_released}</p>
                    <p>Genre: {videoGame.attributes.game_genre}</p>
                    <p>Rated: {videoGame.attributes.game_rating}</p>
                    <p>Platform: {videoGame.attributes.game_platform}</p>
                    <p>{videoGame.attributes.description}</p>
                
                    <Link className="btn" to={`/videoGames/${videoGame.id}/edit`}>Edit Game</Link>
                </div>
                
            </div> :
            <p>Nothing to show</p>
    )
} 

export default VideoGameCard