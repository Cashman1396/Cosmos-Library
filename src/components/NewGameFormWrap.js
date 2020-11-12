import React from 'react'
import NewVideoGameForm from './NewVideoGameForm'
import { createVideoGame } from '../actions/videoGames'
import { connect } from 'react-redux'

//component for creating the new video game

const NewVideoGameFormWrap = ({history, createVideoGame}) => {
    const handleSubmit = (formData, userId) => {

        createVideoGame({
            ...formData,
            userId
        })
        
    }
    return <NewVideoGameForm history={history} handleSubmit={handleSubmit}/>
}


export default connect(null, { createVideoGame })(NewVideoGameFormWrap)
