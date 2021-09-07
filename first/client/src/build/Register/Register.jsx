import React, { useContext, useState } from "react";
import ManageForm from "./ManageForm";
import axios from "axios";
import {useHistory} from 'react-router-dom'

function Register() {
    const [userRegister, setUserRegister] = useState({
        name: "", email: "", password: "", confirmPassword: ""
    })

    const [error, setError] = useState({})
    const history = useHistory()

    const HandleFormInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        setUserRegister({...userRegister,[name]:value}) 
    }

    const HandleFormSubmit = event => {
        event.preventDefault()
            axios.post('/user/register', {
                email: userRegister.email,
                name: userRegister.name,
                password: userRegister.password,
                confirmPassword: userRegister.confirmPassword,
            })
            .then(res => {
                if (res.data.registered) {
                    console.log('success: '+ res.data.message) 
                    setUserRegister({name: "", email: "", password: "", confirmPassword: ""})
                    setError({}) 
                    history.push('/login')
                } else {
                   setError({
                       [res.data.type]: res.data.message
                   })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
  
    return (
        <div>
            <div className="card" style={{width:'40rem'}}>
                <div className="card-header text-center">
                    <h2>User Registraion form</h2>
                </div>
                <div className="card-body">

                    <ManageForm 
                        userRegister={userRegister}
                        HandleFormInput={HandleFormInput}
                        HandleFormSubmit={HandleFormSubmit}
                        error={error}
                    />

                </div>
            </div>
        </div>
    );
}

export default Register;
