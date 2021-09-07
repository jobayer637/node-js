import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Nav from './nav'
import About from './about'
import Shop from './shop'
import Home from './home'
import Details from './details'
import PrivateRouter from './privateRouter'
import Login from './login'
import Logout from './logout'
import { ContextProvider } from './ContextProvider'
import Register from './Register/Register'
import Blog from './Blog/Blog'
import Create from './Blog/Create'

const HomeShop = () => {

        return(<div className="container">
            <ContextProvider>
                <Router>
                    <Nav />
                    <Switch>
                        <PrivateRouter path="/" exact component={Home} />
                        <PrivateRouter path="/shop" exact component={Shop} />
                        <PrivateRouter path="/shop/details/:id" component={Details} />
                        <PrivateRouter path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/register" component={Register} />
                        <PrivateRouter path="/blogs" component={Blog} />
                        <PrivateRouter path="/blogs/:id" component={Blog} />
                        <PrivateRouter path="/blog/create" component={Create} />
                    </Switch>
                </Router>
            </ContextProvider>
        </div>)
    }


export default HomeShop