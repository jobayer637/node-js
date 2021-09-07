import React,{useContext} from 'react'
import { RootContext } from '../ContextProvider/ContextProvider'
import { useHistory } from 'react-router-dom'

function Logout() {
    const {authenticateUser} = useContext(RootContext)
    const [auth, setAuth] = authenticateUser
    const history = useHistory()

    if(auth.isAuth ===  true){
        setAuth({isAuth: false})
    }
    localStorage.clear()
    !auth.isAuth ?? history.push('/login')

    return (
        <div>
            {history.push('/login')}
        </div>
    )
}

export default Logout
