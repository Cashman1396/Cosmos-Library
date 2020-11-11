const initialState = {
    gameName: "",
    gameGenre: "",
    gameRating: "",
    imageUrl: "",
    gamePlatform: "",
    description: "",
    yearReleased: ""
}

const newVideoGameFormReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case "UPDATE_NEW_VIDEO_GAME_FORM":
        const returnValue = {
            ...state,
            [action.formData.name]: action.formData.value
        }    
        // console.log("new VG form reducer returnValue:", returnValue)
        return returnValue
            
        case "RESET_NEW_VIDEO_GAME_FORM":
            return initialState
        case "PRESET_EDIT_FORM_DATA":
            return action.vgFormData
        default:
            return state
    }
}

export default newVideoGameFormReducer