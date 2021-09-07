import React, { useContext, useState } from "react";
import ManageForm from "./ManageForm";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import { RootContext } from '../../ContextProvider/ContextProvider'

function CreateBlog() {
    const {authenticateUser} = useContext(RootContext)
    const [auth, setAuth] = authenticateUser

    console.log(auth.user)

    const [blog, setBlog] = useState({
        title: "", body: ""
    })
    const [myFile, setMyFile] = useState(null)

    const [error, setError] = useState({})
    const history = useHistory()

    const HandleFormInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        setBlog({...blog,[name]:value}) 
        if(event.target.files){
            setMyFile(event.target.files[0])
        }
    }

    const HandleFormSubmit = event => {
        event.preventDefault()
        console.log(blog)
        const data = new FormData()
        data.append('title', blog.title)
        data.append('body', blog.body)
        data.append('userId', auth.user._id)
        data.append('image', myFile)

        console.log(data)

            axios.post('/api/blog/create',data)
            .then(res => {
               console.log(res.data)
            //    if(res.data.status==='error'){
            //        setError({
            //            [res.data.type] : res.data.message
            //        })
            //    }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>Create New Blog Form</h3>
            </div>
            <div className="card-body">
                <ManageForm 
                    blog={blog}
                    HandleFormInput={HandleFormInput}
                    HandleFormSubmit={HandleFormSubmit}
                    error={error}
                />
            </div>
        </div>
    )
}

export default CreateBlog
