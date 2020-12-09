// component for Navigation Bar
import React from 'react'
import Logout from './Logout'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'


// controls the current User's navigation bar
const NavBar = ({currentUser, loggedIn}) => {
    return (
        <nav className="nav-wrapper">
            <div className="collapse navbar-collapse">
                <Link className="logo left" to='/Welcome'>🌑 <span role="img" aria-label=""></span>Oracle Library</Link>
                <ul className="collapse navbar-collapse right">
                    <li className="nav-item"> <NavLink exact to="/videoGames">My Media Library</NavLink></li>
                    <li className="nav-item"> <NavLink exact to="/videoGames/new">Add Item</NavLink></li>
                    <li className="nav-item"> {currentUser ? `Welcome ${currentUser.attributes.username}!` : ""}</li>
                    <li className="nav-item"> { loggedIn ? <Logout/> : null }</li>
                </ul>
            </div>
        </nav>
    )
}


// currentUser reducer 
const mapStateToProps = ({currentUser}) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)
