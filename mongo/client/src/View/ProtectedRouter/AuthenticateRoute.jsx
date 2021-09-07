import React, {useContext} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {RootContext} from '../ContextProvider/ContextProvider'

function AuthenticateRoute({component: Component, ...rest}) {
    const {authenticateUser} = useContext(RootContext)
    const [auth, setAuth] = authenticateUser

    return <Route {...rest} render={(props) => (
        auth.isAuth
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}
            />
    )} />
}

export default AuthenticateRoute
