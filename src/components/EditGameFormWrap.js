import React from 'react'
import NewVideoGameForm from './NewVideoGameForm'
import { updateVideoGame, deleteVideoGame } from '../actions/videoGames'
import { presetEditFormData, resetNewVideoGameForm } from '../actions/newVideoGameForm'
import { connect } from 'react-redux'

// doing a react lifecycle process 
// edits/updaes the game form (path method)
class EditVideoGameFormWrap extends React.Component {
    componentDidMount() {
        this.props.videoGame && this.props.presetEditFormData(this.props.videoGame)
    }

    componentDidUpdate(prevProps) {
        this.props.videoGame && !prevProps.videoGame && this.props.presetEditFormData(this.props.videoGame)
    }

    componentWillUnmount() {
        this.props.resetNewVideoGameForm()
    }

    handleSubmit = (formData) => {
        const {updateVideoGame, videoGame, history} = this.props 
      
        updateVideoGame({
            ...formData,
            videoGameId: videoGame.id
        }, history)
        
    }

    render() {

        const {history, deleteVideoGame, videoGame} = this.props
        const videoGameId = videoGame ? videoGame.id : null
        return <>
                <NewVideoGameForm editMode handleSubmit={this.handleSubmit}/>
                <button className="btn btn-danger" onClick={() => deleteVideoGame(videoGameId, history)}>Delete</button>
            </>
    }

}


export default connect(null, { updateVideoGame, presetEditFormData, resetNewVideoGameForm, deleteVideoGame })(EditVideoGameFormWrap)
