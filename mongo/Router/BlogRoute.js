const blogRouter = require('express').Router()
const {
    allBlogController,
    singleBlogController,
    createBlogController,
    updateBlogController,
    deleteBlogController
} = require('../Controller/blogController')

const {
    createBlogMiddleware,
    updateBlogMiddleware
} = require('../Middleware/blogMiddleware')

const blogImageUpload = require('../imageUploadHepler/blogImageUpload')

blogRouter
.get('/blogs', allBlogController)
.get('/:id', singleBlogController)
// .post('/create', createBlogMiddleware, blogImageUpload.single('image'), createBlogController)
.post('/create', blogImageUpload.single('image'), createBlogController)
.put('/update/:id', updateBlogMiddleware, updateBlogController)
.delete('/delete/:id', deleteBlogController)


module.exports = blogRouter