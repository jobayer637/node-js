import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory,Redirect } from 'react-router-dom'
import { RootContext } from '../ContextProvider/ContextProvider'

const Login = (props) => {
    const [login, setLogin] = useState({ email: '', password: '' })
    const [error, setError] = useState({email: '', password: ''})
    const [isLogin, setIsLogin] = useState(false)
    const history = useHistory()

    const {authenticateUser} = useContext(RootContext)
    const [auth, setAuth] = authenticateUser
    const session = JSON.parse(localStorage.getItem('authorized'))


    const handleInputForm = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }


    const handleFormSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/auth/login', {
            email: login.email,
            password: login.password
        })
        .then(user => {
           if(user) {
            console.log(user.data)
            localStorage.setItem('authorized', JSON.stringify({
                isAuth: true,
                user: user.data.user,
                expire : Date.now() + (1000*3000)
            }))
            setAuth({
                isAuth: true,
                user: user.data.user,
                expire : Date.now() + (1000*3000)
            })
           } else {
               console.log("Log in failed")
           }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const defaultPath = { pathname: '/' }
    let { from } = props.location.state || defaultPath

    if(auth.isAuth === true) {
        return <Redirect to={from} />
    }
    
    if(session && session.isAuth){
        setAuth(session)
        history.push('/')
    }

    return (
        <div className="card">
            <div className="card-body">
                <form className="row" onSubmit={handleFormSubmit}>
                    <div className="col-md-4">
                        <label for="staticEmail2" className="visually-hidden">Email</label>
                        <input 
                            onChange={handleInputForm} 
                            type="email"
                            name="email"
                            className="form-control" 
                            placeholder="email@example.com" 
                            value={login.email}
                        />
                        <small className="text-danger">{error.email}</small>
                    </div>
                    <div className="col-md-3">
                        <label for="inputPassword2" className="visually-hidden">Password</label>
                        <input 
                            onChange={handleInputForm} 
                            type="password"
                            name="password"
                            className="form-control" 
                            placeholder="Password"
                            value={login.password}
                        />
                        <small className="text-danger">{error.password}</small>
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary mb-3 mr-5">Login</button>
                    </div>
                </form>If you are not registered. Please 
                <Link to="/register"> Register</Link>
            </div>
        </div>
    )
}

export default Login
