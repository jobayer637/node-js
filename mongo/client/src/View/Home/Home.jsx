import React, {useCallback, useContext, useState} from 'react'
import { RootContext } from '../ContextProvider/ContextProvider'
import axios from 'axios'

function Home() {
    const {authenticateUser} = useContext(RootContext)
    const [auth, setAuth] = authenticateUser

    const  session = localStorage.getItem('authorized')

    const [myImage, setMyImage] = useState(null)
    const handleImageInout = (event) => {
        setMyImage(event.target.files[0])
    }

    const handleImageForm = (event) => {
        event.preventDefault()

        const data = new FormData()
        data.append('image', myImage)
        data.append('name', "Jobayer")

        axios.post('/api/single-image/demo', data)
        .then(res => {
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <div>

        <div className="card my-4">
            <div className="body">
                <form onSubmit={handleImageForm} encType="multipart/form-data">
                    <input type="file" onChange={handleImageInout}/>
                    <input type="submit" />
                </form>
            </div>
        </div>

            {auth ? 
            <div>
                <img src={auth.user.image} alt={auth.user.name } />
                <h4>Name: {auth.user.name}</h4>
                <h4>Email: {auth.user.email}</h4> 
            </div> 
            : ''}
        </div>
    )
}

export default Home
