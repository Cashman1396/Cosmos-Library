import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm' 
import { login } from '../actions/currentUser' 
// login page component 
const Login = ({ loginForm, updateLoginForm, login, history }) => {

    const handleChange = (event) => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(loginForm, history)
    }

    return (
        <form className="login-Form card form" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={loginForm.username} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={loginForm.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={loginForm.password} onChange={handleChange} />

            <input className="btn" type="submit" value="Log In"/>
        </form>
    )
}

// maps the states to the current user and turns into props
const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
        
    } 
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)