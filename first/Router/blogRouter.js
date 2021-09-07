const blogRouter = require('express').Router()
const createBlogMiddleware = require('../Middleware/createBlogMiddleware')

const {
    allBlog, 
    sinlgeBlog, 
    newBlog, 
    updateBlog, 
    deleteBlog
} = require('../Controller/blog/blogController')


blogRouter.get('/blogs', allBlog)
blogRouter.post('/store', createBlogMiddleware, newBlog)
blogRouter.get('/:blogId', sinlgeBlog)
blogRouter.delete('/delete/:blogId', deleteBlog)
blogRouter.put('/update/:blogId', updateBlog)

module.exports = blogRouter