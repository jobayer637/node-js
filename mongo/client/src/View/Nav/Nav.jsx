import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeStyle={{color: "red"}} to='/'>
                                    <a className="navbar-brand">Home</a>
                                </NavLink>

                                <NavLink activeStyle={{color: "red"}} to='/blog'>
                                    <a className="navbar-brand">Blog</a>
                                </NavLink>

                                <NavLink activeStyle={{color: "red"}} to='/login'>
                                    <a className="navbar-brand">Login</a>
                                </NavLink>

                                <NavLink activeStyle={{color: "red"}} to='/logout'>
                                    <a className="navbar-brand">Logout</a>
                                </NavLink>

                                <NavLink activeStyle={{color: "red"}} to='/register'>
                                    <a className="navbar-brand">Register</a>
                                </NavLink>
                            </li>

                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
