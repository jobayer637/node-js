import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from './spinner'
import Search from './search'

 const Shop = () => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            setPosts(res.data)
        })
    },[])

    const searchMethod = (e) => {
        setSearch(e.target.value)
    }

     return (<div>
        <Search 
            searchMethod={searchMethod}
            search={search}
        />

        <div className="text-center">
            {posts.length === 0?  <Spinner /> :''}
        </div>
        
         {posts.filter(post=>{
            if(post.title === '' || null)
                return post
            if(post.title.toLowerCase().includes(search.toLocaleLowerCase()))
                return post
         }).map(post=><div>
            <Link to={`/shop/details/${post.id}`}>
                <div className="card my-2 rounded-0">
                    <div className="card-header">{post.title}</div>
                </div>
            </Link>
         </div>)}
     </div>)
 }

export default Shop