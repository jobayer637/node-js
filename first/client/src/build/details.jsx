import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from './spinner'


 const Details = ({match}) => {

    const [post, setPost] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${match.params.id}`)
        .then((res)=>{
            setPost(res.data)
            axios.get(`https://fakestoreapi.com/products/category/${res.data.category}`)
            .then((resp)=>{
                setPosts(resp.data)
            })
        })
    },[match.params.id])

    const changeProductEvent = (id) => {
        if(id!=match.params.id){
            setPost({})
        }
    }

     return (<div className="row mx-0">
        <div className="card col-md-4">
            {!post.title? <Spinner /> : <div><img className="card-img" src={post.image} alt="dsf" />
            <div className="card-body">
            <h3><span className="badge bg-warning">{post.category}</span></h3>
                <h5>{post.title}</h5>
                <h2>${post.price}</h2>
                <p>{post.description}</p>
            </div></div>}
        </div>

        <div className="card col-md-4">
            {posts.length === 0 ? <Spinner /> : posts.map(post=><div>
                <Link to={`/shop/details/${post.id}`}>
                    <div className="card my-2 rounded-0">
                        <div className="card-header" onClick={() => changeProductEvent(post.id)}>{post.title}</div>
                    </div>
                 </Link>
            </div>)}
        </div>
     </div>)
 }

export default Details