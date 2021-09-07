import React, { useContext } from 'react'
import { AuthContext } from './ContextProvider'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const [auth, setAuth] = useContext(AuthContext)
    let isAuth = {
        to: auth.isAuthenticate ? '/logout' : '/login',
        name: auth.isAuthenticate ? 'Logout' : 'Login'
    }

    return (<div className="card-body border border-info mb-2 bg-warning shadow-sm d-flex justify-content-between">
        <div>LOGO</div>
        <div>
            <ul class="nav">
                <NavLink to="/" exact activeStyle={{color: 'black'}} style={{margin: '0px 15px'}}> Home </NavLink>

                <NavLink to="/shop" activeStyle={{color: 'black'}} style={{margin: '0px 15px'}}>Shopping</NavLink>

                <NavLink to="/blogs" activeStyle={{color: 'black'}} style={{margin: '0px 15px'}}>Blogs</NavLink>

                <NavLink to="/about" activeStyle={{color: 'black'}} style={{margin: '0px 15px'}}>About</NavLink>

                <NavLink to={isAuth.to} activeStyle={{color: 'black'}} style={{margin: '0px 15px'}}>{isAuth.name}</NavLink>

            </ul>
        </div>
    </div>)
}


export default Nav