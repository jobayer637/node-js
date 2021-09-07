import React, {useContext} from 'react'
import {
    BrowserRouter as Router, Route, Switch, useHistory, Redirect
} from 'react-router-dom'
import { ContextProvider } from './ContextProvider/ContextProvider'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import Register from './Auth/Register/Register'
import Blog from './Blog/Blog'
import AuthenticateRoute from './ProtectedRouter/AuthenticateRoute'
import {RootContext} from './ContextProvider/ContextProvider'
import ViewBlog from './Blog/ViewBlog'
import CreateBlog from './Blog/Create/CreateBlog'

function View(props) {

    const history = useHistory()
    let session = JSON.parse(localStorage.getItem('authorized'))
    if(session && session.expire <= Date.now())
    {
        localStorage.clear()
        return <Redirect path='/logout' />
    }

    return (
        <div>
            <div className="container my-2">
                <ContextProvider>
                    <Router>
                        <Nav />
                        <Switch>
                            <AuthenticateRoute path="/" exact component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/blog/create" component={CreateBlog}/>
                            <Route path="/blog/:id" component={ViewBlog}/>
                            <AuthenticateRoute path="/blog" component={Blog}/>
                        </Switch>
                    </Router>
                </ContextProvider>
            </div>
        </div>
    )
}

export default View
