// works in tandem with the videogame to edit and change the form data that gets entered into it
export const updateNewVideoGameForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_VIDEO_GAME_FORM",
        formData
    }
}
export const resetNewVideoGameForm = () => {
    return {
        type: "RESET_NEW_VIDEO_GAME_FORM"
    }
}

export const presetEditFormData = videoGame => {
    const vgFormData = {
        gameName: videoGame.attributes.game_name,
        gameGenre: videoGame.attributes.game_genre,
        gameRating: videoGame.attributes.game_rating,
        gamePlatform: videoGame.attributes.game_platform,
        imageUrl: videoGame.attributes.image_url,
        description: videoGame.attributes.description,
        yearReleased: videoGame.attributes.year_released
    }
    return {
        type: "PRESET_EDIT_FORM_DATA",
        vgFormData
    }
}
