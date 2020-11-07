//sychronous
import { resetNewVideoGameForm } from './newVideoGameForm'

export const setVideoGames = videoGames => {
    return {
        type: "SET_VIDEO_GAMES",
        videoGames
    }
} 

export const clearVideoGames = () => {
    return {
        type: "CLEAR_VIDEO_GAMES"
    }
} 

export const addVideoGame = (videoGame) => {
    return {
        type: "ADD_VIDEO_GAME",
        videoGame
    } 
}

export const updateVideoGameApprove = (videoGame) => {
    return {
        type: "UPDATE_VIDEO_GAME",
        videoGame
    } 
}

//only fires on successful update
export const deleteVideoGameApprove = (videoGameId) => {
    return {
        type: "DELETE_VIDEO_GAME",
        videoGameId
    } 
}

//asynchronous fetch is always async
export const getVideoGames = () => {
    return dispatch => {
        return fetch("http://localhost:3002/video_games", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setVideoGames(resp.data))
            }
        }
            
        )
        .catch(console.log)
    }
}

//POST REQUEST TO CREATE A NEW GAME TO THE LIBRARY
export const createVideoGame = (videoGameData, history) => {
    return dispatch => {
        const updatedRailsData = {
            video_game: {
                game_name: videoGameData.gameName,
                game_genre: videoGameData.gameGenre,
                game_rating: videoGameData.gameRating,
                game_platform: videoGameData.gamePlatform,
                image_url: videoGameData.imageUrl,
                description: videoGameData.description,
                year_released: videoGameData.yearReleased,
                user_id: videoGameData.userId
            }
        }

        // GET REQUEST to the VIDEO GAME API TO FETCH ALL GAMES IN SEED AND CREATED
        return fetch("http://localhost:3002/video_games/", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRailsData) 
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                // console.log("this is resp.data for create VG", resp.data) 
                dispatch(addVideoGame(resp.data))
                dispatch(getVideoGames()) 
                dispatch(resetNewVideoGameForm())
                history.push(`/videoGames/${resp.data.id}`) 
                alert("Game has been added!")
              
            }
        })
        .catch(console.log)
    }
}

//UPDATE REQUEST WHEN EDITING VIDEO GAME FORM
export const updateVideoGame = (videoGameData, history) => {
    return dispatch => {
        const updatedRailsData = {
            video_game: {
                game_name: videoGameData.gameName,
                game_genre: videoGameData.gameGenre,
                game_rating: videoGameData.gameRating,
                image_url: videoGameData.imageUrl,
                game_platform: videoGameData.gamePlatform,
                description: videoGameData.description,
                year_released: videoGameData.yearReleased
            }
        }
        return fetch(`http://localhost:3002/video_games/${videoGameData.videoGameId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRailsData) 
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(updateVideoGameApprove(resp.data))
                
                history.push(`/videoGames/${resp.data.id}`) 
            }
        })
        .catch(console.log)
    }
}

//DELETE REQUEST TO DELETE A GAME IN THE CURRENT USER LIBRARY
export const deleteVideoGame = (videoGameId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3002/video_games/${videoGameId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(deleteVideoGameApprove(videoGameId))
                
                history.push('/videoGames') 
            }
        })
        .catch(console.log)
    }
}