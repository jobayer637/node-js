import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Moment from 'react-moment';

function ViewBlog({match}) {
    const [blog, setBlog] = useState({})

    useEffect(() => {
        const id = match.params.id
        axios.get('/api/blog/'+id)
        .then(blog => {
            // console.log(blog.data.blog)
            setBlog(blog.data.blog)
        })
    },[setBlog])
console.log(blog)
    return (
        <div>
            <div className="card">
               {Object.keys(blog).length !== 0 ?
               <div>
                    <div className="card-header">
                    <h4>{blog.title}</h4>
                </div>
                <div className="card-body">
                    <img className="card-img" src={blog.image} alt={blog.title} />
                    <span>
                    <small>{blog.user.name}</small>
                    <small> | <Moment fromNow>{blog.createdAt}</Moment></small>
                    <small> | {blog.comments.length} Comments</small>
                    </span>
                    <p>{blog.body}</p>
                </div>
               </div>
               :''}
            </div>
        </div>
    )
}

export default ViewBlog
