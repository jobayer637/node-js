const Blog = require('../Model/blogModel')
const User = require('../Model/userModel')

module.exports = {
    createBlogMiddleware: (req, res, next) => {
        const { title, body, userId } = req.body
        next()
        if(!title) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'title',
                message: "Please provide a blog title"
            })
        }

        if(title.length < 10) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'title',
                message: "Title at least 10 character"
            })
        }

        if(!body) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'body',
                message: "Please provide a blog body"
            })
        }

        if(body.length < 20) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'body',
                message: "Body at least 20 character"
            })
        }

        if(!userId) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'userId',
                message: "Please provide userId"
            })
        }

        Blog.findOne({title: title})
        .then(find => {
            if(find){
                res.json({
                    status: 'error',
                    statusCode: 400,
                    type: 'title',
                    message: "The title has already exists"
                })
            } else {
                User.findOne({_id: userId})
                .then(find => {
                    if (find) {
                        next()
                    } else {
                        res.json({
                            status: 'error',
                            statusCode: 400,
                            type: 'userId',
                            message: "You provide invalid userId"
                        })
                    } 
                })
                .catch(err => {
                    res.json({
                        status: 'error',
                        statusCode: 500,
                        type: 'server',
                        message: "Please provide a valid userId",
                    })
                })
            }
        })
        .catch(err=>{
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'server',
                error: err,
                message: "server error"
            })
        })
    },

    updateBlogMiddleware: (req, res, next) => {
        const { title, body, userId } = req.body

        if(!title) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'title',
                message: "Please provide a blog title"
            })
        }

        if(title.length < 10) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'title',
                message: "Title at least 10 character"
            })
        }

        if(!body) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'body',
                message: "Please provide a blog body"
            })
        }

        if(body.length < 20) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'body',
                message: "Body at least 20 character"
            })
        }

        // Blog.findOne({title: title})
        // .then(find => {
        //     if(find){
        //         res.json({
        //             status: 'error',
        //             statusCode: 400,
        //             type: 'title',
        //             message: "The title has already exists"
        //         })
        //     } else {
        //         next()
        //     }
        // })
        // .catch(err=>{
        //     res.json({
        //         status: 'error',
        //         statusCode: 400,
        //         type: 'server',
        //         error: err,
        //         message: "server error"
        //     })
        // })

        next()
    }
}