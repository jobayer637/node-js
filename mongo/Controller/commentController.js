const Comment = require('../Model/commentModel')
const User = require('../Model/userModel')
const Blog = require('../Model/blogModel')

module.exports = {
    allCommentController: (req, res) => {
        Comment.find()
        .populate ({
            path: 'user',
            select: ['name','email','createdAt', 'updatedAt'],
        })
        .populate ({
            path: 'blog',
            select: ['title','body','createdAt', 'updatedAt'],
        })
        .then(com=>{
            res.json({
                status: 'success',
                statusCode: 200,
                type: 'all comments',
                comments: com,
            })
        })
        .catch(err=>{
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'all comments',
                comment: c,
                message: "error occoured all comments query"
            })
        })
    },

    singleCommentController: (req, res) => {
        const {id} = req.params
        Comment.findById(id)
        .populate ({
            path: 'user',
            select: ['name','email','createdAt', 'updatedAt'],
        })
        .populate ({
            path: 'blog',
            select: ['title','body','createdAt', 'updatedAt'],
            populate: ({
                path: 'user',
                select: ['name','email','createdAt', 'updatedAt'],
            })
        })
        .then(com=>{
            res.json({
                status: 'success',
                statusCode: 200,
                type: 'comment',
                comment: com,
            })
        })
        .catch(err=>{
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'comment',
                comment: c,
                message: "error occoured single comment query"
            })
        })
    },

    createCommentController: (req,res) => {
        const {comment, userId, blogId} = req.body
        newComment = new Comment({
            comment,
            user: userId,
            blog: blogId
        })

        User.findOneAndUpdate({_id: userId}, {$push: {'comments': newComment._id}})
            .then(u=>{
                Blog.findOneAndUpdate({_id: blogId}, {$push: {'comments': newComment._id}})
                    .then(b=> {
                        newComment.save()
                        .then(c=>{
                            res.json({
                                status: 'success',
                                statusCode: 200,
                                type: 'comment',
                                comment: c,
                                message: "Comment Successfully Stored"
                            })
                        })
                        .catch(err=>{
                            res.json({
                                status: 'error',
                                statusCode: 400,
                                type: 'comment',
                                message: "Comment store error"
                            })
                        })
                    })
                    .catch(err=>[
                        res.json({
                            status: 'error',
                            statusCode: 400,
                            type: 'comment',
                            message: "Comment blogId error"
                        })
                    ])
            })
            .catch(err => {
                res.json({
                    status: 'error',
                    statusCode: 400,
                    type: 'comment',
                    message: "Comment userId error"
                })
            })
    },

    updateCommentController: (req, res) => {
        const {id} = req.params
        const {comment} = req.body
        if(!comment){
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'comment',
                message: "Please provide a blog comment"
            })
        }

        Comment.findOneAndUpdate({_id: id},{
            $set: {
                comment
            }
        })
        .then(c=>{
            res.json({
                status: 'success',
                statusCode: 200,
                type: 'comment',
                comment: c,
                message: "Comment Successfully Updated"
            })
        })
        .catch(err=>{
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'comment',
                message: "Comment update error"
            })
        })
    },

    deleteCommentController: (req, res) => {
        const {id} = req.params
        Comment.findByIdAndDelete(id)
        .then(com=>{
            com
            ?res.json({
                status: 'success',
                statusCode: 200,
                type: 'comment',
                comment: com,
                message: 'Comment successfylly deleted'
            })
            :res.json({
                status: 'error',
                statusCode: 400,
                type: 'comment',
                comment: com,
                message: 'Comment Not Found'
            })
        })
        .catch(err=>{
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'comment',
                comment: c,
                message: "error occoured delete comment query"
            })
        })
    },
}