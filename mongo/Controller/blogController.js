const Blog = require('../Model/blogModel')
const User = require('../Model/userModel')

module.exports = {
    allBlogController: (req, res) => {
        Blog.find()
        .populate({
            path: 'user',
            select: ['name','email']
        })
        .populate({
            path: 'comments'
        })
        .populate({
            path: 'likes',
            // select: ['stts','typ']
        })
        .then(blogs => {
            res.json({
                status: 'success',
                statusCode: 200,
                blogs: blogs,
            })
        })
        .catch(err => {
            res.json({
                status: 'error',
                statusCode: 500,
                error: err,
            })
        })
    },

    singleBlogController: (req, res) => {
        const {id} = req.params 
        Blog.findById(id)
        .populate({
            path: 'user',
            select: ['name','email']
        })
        .populate({
            path: 'comments',
            select: ['comment','createdAt','updatedAt'],
            populate: {
                path: 'user',
                select: ['name','email']
            }
        })
        .then(blog => {
            res.json({
                status: 'success',
                statusCode: 200,
                blog: blog,
            })
        })
        .catch(err => {
            res.json({
                status: 'error',
                statusCode: 500,
                error: err,
            })
        })
    },

    createBlogController: (req, res) => {
        const { title, body, userId } = req.body

        newBlog = new Blog({
            title,
            body,
            image: "/blog/"+req.file.filename,
            user: userId
        })
        User.findByIdAndUpdate(userId, {
            $push: {
                "blogs": newBlog._id
            }
        })
        .then(u=>{
            newBlog.save()
            .then(blog => {
                res.json({
                    status: 'success',
                    statusCode: 200,
                    blog: blog,
                })
            })
            .catch(err => {
                res.json({
                    status: 'error',
                    statusCode: 500,
                    error: err,
                })
            })
        })
        .catch(err => {
            res.json({
                status: 'error',
                statusCode: 500,
                error: err,
            })
        })
        

        
    },

    updateBlogController: (req, res) => {
        const {id} = req.params
        const {title, body} = req.body

        Blog.findOneAndUpdate({_id: id}, {
            $set: {
                title, body
            }
        })
        .then((blog) => {
            blog
            ?res.json({
                status: 'success',
                statusCode: 200,
                blog: blog,
                message: "successfully Updated"
            })
            :res.json({
                status: 'error',
                statusCode: 400,
                message: "Blog not found"
            })
        })
        .catch((err) => {
            res.json({
                status: 'error',
                statusCode: 500,
                err: err,
                message: "server error (controller page)"
            })
        })
    },

    deleteBlogController: (req, res) => {
        const {id} = req.params 
        Blog.findByIdAndDelete(id)
            .then(blog => {
                if(blog) {
                    res.json({
                        status: 'success',
                        statusCode: 200,
                        blog: blog,
                        message: "Blog has been deleted successfully"
                    })
                } else {
                    res.json({
                        status: 'success',
                        statusCode: 200,
                        message: "Blog Not Found"
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 'error',
                    statusCode: 500,
                    error: err,
                })
            })
    }
}