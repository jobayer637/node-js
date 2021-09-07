import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './ContextProvider'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Login = (props) => {
    const [auth, setAuth] = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)
    const [login, setLogin] = useState({ email: '', password: '' })
    const [error, setError] = useState({email: '', password: ''})
    const history = useHistory()

    const handleInputForm = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        axios.post('/user/login',{
            email: login.email,
            password: login.password
        })
        .then(res => {
            if(res.data.authenticate) {
                setAuth({
                    isAuthenticate: true,
                    name: res.data.data.name,
                    email: res.data.data.email,
                    id: res.data.data._id
                })
                setIsLogin(true)
                localStorage.setItem("auth", res.data.data._id)
            } else {
                res.data.type === "email" 
                    ?   setError({email: res.data.message})
                    :   setError({password: res.data.message})
            }
        })
        .catch(err => {
            console.log(err)
        })
       
    }


    const defaultPath = { pathname: '/' }
    let { from } = props.location.state || defaultPath

    let authenticateUser = localStorage.getItem('auth') || '';
       
    useEffect(()=>{
        if(authenticateUser !== '') {
            axios.get('/user/'+authenticateUser)
                .then((res)=> {
                    setAuth({
                        isAuthenticate: true,
                        name: res.data.name,
                        email: res.data.email,
                        id: res.data._id
                    })
                    setIsLogin(true)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        
    },[])
    

    if(auth.isAuthenticate){
        if (isLogin) { return <Redirect to={from} /> }
        if (auth.isAuthenticate) { return <Redirect to='/' /> }
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
