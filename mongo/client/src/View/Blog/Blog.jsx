import React,{useContext, useState, useEffect} from 'react'
import { RootContext } from '../ContextProvider/ContextProvider'
import axios from 'axios'
import Moment from 'react-moment';
import {
    BrowserRouter as Router, Route, Switch, useHistory, Link
} from 'react-router-dom'


function Blog() {
    const {authenticateUser} = useContext(RootContext)
    const [auth, setAuth] = authenticateUser
    const history = useHistory()
    let session = JSON.parse(localStorage.getItem('authorized'))
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('/api/blog/blogs')
        .then(blogs => {
            console.log("blogs")
            console.log(blogs.data.blogs)
            setBlogs(blogs.data.blogs)
        })
        .catch(err => {
            console.log(err)
        })
    },[setBlogs])

    return (
        <div>
            <div className="card mx-0 border-0">
                <div className="card-title border border-info my-2 px-2 py-2">
                    <div className="d-flex justify-content-between">
                        <h4>All Blogs</h4>
                        <Link to='/blog/create'><button className="btn btn-outline-primary">Create New Blog</button></Link>
                    </div>
                </div>
                <div className="row mx-0">
                {blogs.map(blog => 
                <div className="card-body col-md-4 mx-0 border border-danger">
                    <img className="card-img-top" src={blog.image} alt={blog.title} />
                    <small>{blog.user.name}</small>
                    <small> | <Moment fromNow>{blog.createdAt}</Moment></small>
                    <small> | {blog.comments.length} Comments</small>
                    <Link to={`/blog/${blog._id}`} ><h5>{blog.title}</h5></Link>
                </div>)}
                </div>
            </div>
        </div>
    )
}

export default Blog
