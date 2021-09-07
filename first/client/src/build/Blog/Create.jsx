import axios from 'axios'
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Blog from './Blog'

function Create() {
    const history = useHistory()
    const [createBlog, setCreateBlog] = useState({
        title: '', body: ''
    })
    const [isStored, setIsStored] = useState(false)
    const [blogError, setBlogError] = useState({})

    const userId = localStorage.getItem('auth')

    const handleInputForm = (event) => {
        setCreateBlog({...createBlog, [event.target.name]: event.target.value})
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        axios.post('/blog/store', {
            title : createBlog.title,
            body : createBlog.body
        })
        .then(res => {
            if(res.data.response === 'error') {
                setIsStored(false)
                res.data.type === 'title'
                ?   setBlogError({title: res.data.message})
                :   setBlogError({body: res.data.message})
            } 
            if(res.data.response === 'success') {
                console.log(res)
                setCreateBlog({ title: '', body: '' })
                setIsStored(true)
                setBlogError({})
                
                setTimeout(()=>history.push('/blogs'),1500)
            }
        })
        .then(err => {
            console.log(err)
        })
    }
   


    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <h3>Create New Blog</h3>
                <Link to="/blogs"><button className="btn btn-outline-warning">Blog</button></Link>
            </div>
            <div className="card-body">
               <div className="row">
                   <div className="col-md-6">
                    <form onSubmit={handleFormSubmit}>
                            <div className="col-md-10 mb-3">
                                <label for="staticEmail2" className="visually-hidden">Email</label>
                                <input 
                                    onChange={handleInputForm} 
                                    type="text"
                                    name="title"
                                    className="form-control" 
                                    placeholder="Enter Blog Title" 
                                    value={createBlog.title}
                                />
                                <small className="text-danger">{blogError.title}</small>
                            </div>
                            <div className="col-md-10 mb-3">
                                <label for="inputPassword2" className="visually-hidden">Password</label>
                                
                                <textarea 
                                    onChange={handleInputForm} 
                                    type="text"
                                    name="body"
                                    className="form-control" 
                                    placeholder="Enter Blog Body" 
                                    value={createBlog.body}
                                />
                                <small className="text-danger">{ blogError.body}</small>
                            </div>
                            
                            <input type="submit" className="btn btn-success" />
                        </form>
                   </div>
                   <div className="col-md-6">
                       <h4>{isStored ? "New Blog Successfully Created": ""}</h4>
                       <ul>
                           <li>[User Id] : {userId}</li>
                           <li>[Title] : {createBlog.title}</li>
                           <li>[Body] : {createBlog.body}</li>
                       </ul>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Create
