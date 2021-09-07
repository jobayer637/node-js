const Like = require('../Model/likeModel')
const User = require('../Model/userModel')
const Blog = require('../Model/blogModel')

module.exports = {
    allLikeController : (req, res) => {

    },

    singleLikeController : (req, res) => {

    },

    createLikeController : (req, res) => {
        const {status, type, userId, blogId} = req.body
        if(!userId){
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'userId',
                message: "Please provide authenticate userId"
            })
        }
        if(!blogId){
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'blogId',
                message: "Please provide a blogId" 
            })
        }

        const newLike = new Like({
            stts: status,
            typ: type,
            user: userId,
            blog: blogId
        })

        User.findOneAndUpdate({_id: userId}, {$push: {'likes': newLike._id}})
            .then(u=>{
                Blog.findOneAndUpdate({_id: blogId}, {$push: {'likes': newLike._id}})
                    .then(b=> {
                        newLike.save()
                        .then(l=>{
                            res.json({
                                status: 'success',
                                statusCode: 200,
                                type: 'like',
                                like: l,
                                message: "Like Successfully Stored"
                            })
                        })
                        .catch(err=>{
                            res.json({
                                status: 'error',
                                statusCode: 400,
                                type: 'like',
                                message: "like store error"
                            })
                        })
                    })
                    .catch(err=>[
                        res.json({
                            status: 'error',
                            statusCode: 400,
                            type: 'blogId',
                            message: "like blogId error"
                        })
                    ])
            })
            .catch(err => {
                res.json({
                    status: 'error',
                    statusCode: 400,
                    type: 'like',
                    message: "like userId error"
                })
            })
    },

    updateLikeController : (req, res) => {

    },

    deleteLikeController : (req, res) => {

    },
    
}