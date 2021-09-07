import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Spinner from '../spinner'
import Search from '../search'

function Blog() {
    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        axios.get('/blog/blogs')
            .then(res=>{
                setBlogs(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[setBlogs])
    
    console.log(blogs)

    const handleDeleteBlog = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete('/blog/delete/'+id)
                    .then(res => {
                        console.log(res.data)
                        let updateBlogs = blogs.filter(blog => blog._id !== id)
                        setBlogs(updateBlogs)
                    })
                }
              },
              {
                label: 'No',
                onClick: () => {
                    
                }
              }
            ]
          });
    }

    return (
        <div>
           <div className="card">
               <div className="card-header d-flex justify-content-between">
                   <h3>All Blogs</h3>
                    <Link to="/blog/create">
                        <button className="btn btn-sm btn-outline-warning">
                            <i class="fas fa-plus-circle"></i>&nbsp;
                            Create New
                        </button>
                    </Link>
               </div>
               <div className="card-boyd">
                    {blogs.map(blog=>
                        <div className="card-body mx-2 border border-info my-1 row">
                            <div className="text-muted col-md-10">
                                <h5><i class="fas fa-space-shuttle"></i> {blog.title}</h5>
                                <small><Moment fromNow>{blog.createdAt}</Moment></small>
                            </div>
                            <div className="col-md-2">
                                <button 
                                    className="btn btn-primary btn-sm">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button
                                    onClick={()=>handleDeleteBlog(blog._id)}
                                    className="btn btn-warning btn-sm mx-1">
                                    <i class="fas fa-minus-circle"></i>
                                </button>
                                <button className="btn btn-info btn-sm">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                    )}
               </div>
           </div>
        </div>
    )
}

export default Blog
