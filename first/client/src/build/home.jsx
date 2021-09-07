import React, { useContext, useEffect } from 'react'
import axios from 'axios'

import { AuthContext } from './ContextProvider'

const Home = () => {
    const [auth, setAuth] = useContext(AuthContext)
    useEffect(()=>{
        let stg = localStorage.getItem('auth') || ''
        
    })

    return (<div>
        Home page
        <h1>You are logged is as {auth.name}</h1>
    </div>)

}

export default Home