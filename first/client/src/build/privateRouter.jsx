import React,{useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './ContextProvider'

const PrivateRouter = ({ component: Component, ...rest }) => {
    const [auth, setAuth] = useContext(AuthContext)

    return <Route {...rest} render={(props) => (
        auth.isAuthenticate
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}
            />
    )} />
}

export default PrivateRouter


/**
const ProtectedRoute = ({component: Component, ...rest }) => {
    <Route 
        {...rest}
        render = {(props) => {
            condition
            ? <Component {...props}/>
            : <Redirect to={{
                pathname: '/',
                state: {
                    from: props.location
                }
            }}/>
        }}
    />
}
01316317265
**/