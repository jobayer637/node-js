import React, { useContext, useState } from "react";
import ManageForm from "./ManageForm";
import axios from "axios";
import {useHistory} from 'react-router-dom'

function Register() {
    const [userRegister, setUserRegister] = useState({
        name: "", email: "", password: ""
    })
    const [myFile, setMyFile] = useState(null)

    const [error, setError] = useState({})
    const history = useHistory()

    const HandleFormInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        setUserRegister({...userRegister,[name]:value}) 
        if(event.target.files){
            setMyFile(event.target.files[0])
        }
    }

    const HandleFormSubmit = event => {
        event.preventDefault()

        const data = new FormData()
        data.append('name', userRegister.name)
        data.append('email', userRegister.email)
        data.append('password', userRegister.password)
        data.append('image', myFile, myFile.name)

            axios.post('/api/auth/register',data)
            .then(res => {
               console.log(res.data)
               if(res.data.status==='error'){
                   setError({
                       [res.data.type] : res.data.message
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
