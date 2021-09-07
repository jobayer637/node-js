import React, { useState, createContext } from "react";

export const RootContext = createContext()

export const ContextProvider = (props) => {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: {}
    })

    return (
        <RootContext.Provider value={{
            authenticateUser: [auth, setAuth]
        }}>
            {props.children}
        </RootContext.Provider>
    )

}