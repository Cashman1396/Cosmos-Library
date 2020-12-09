import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// You can do this, Take a deep breath and you got this
// You are the Oracle, you know what you know
// You Will Pass

const VideoGames = (props) => {
    
    //props showing all the videogames in the array
    const videoGameCards = props.videoGames.length > 0 ?     
props.videoGames.map(vg => 
    (<div className="videoGame-card" key={vg.id}>
        <h4 ><Link to={`/videoGames/${vg.id}`}>{vg.attributes.game_name}</Link></h4>

    </div> )) : null

    return videoGameCards
}

// takes a slice of the videoGames state then maps into props
const mapStateToProps = (state) => {
    return {
        videoGames: state.videoGames
    }
}

export default connect(mapStateToProps)(VideoGames);
