import React,{useContext} from 'react'
import { Redirect} from 'react-router-dom'
import { AuthContext } from './ContextProvider'

const Logout =() => {
    const [auth, setAuth] = useContext(AuthContext)

    if(auth){
        setAuth(false)
        localStorage.clear();
    } else {
        return <Redirect to='/login' />
    }

    return <div>
        {!auth.isAuthenticate ?? <Redirect to='/login' />}
    </div>

}

export default Logout
