const User = require('../Model/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    allUserController: (req, res) => {
        User.find()
        .populate({
            path: 'blogs',
            select: ['title', 'body','image','createdAt','updatedAt']
        })
        .populate({
            path: 'comments',
            select: ['comment','createdAt','updatedAt']
        })
        .populate({
            path: 'likes',
            select: ['stts','typ'],
            populate: ({
                path: 'blog',
                select: ['title']
            })
        })
        .then(users => {
            res.json({
                status: 'success',
                statusCode: 200,
                users: users,
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

    singleUserController: (req, res) => {
        const {id} = req.params 
        User.findById(id)
        .populate({
            path: 'blogs',
            select: ['title', 'body','image','createdAt','updatedAt'],
            populate : ({
                path: 'comments',
                select: ['comment','createdAt','updatedAt']
            })
        })
        .populate({
            path: 'comments',
            select: ['comment','createdAt','updatedAt']
        })
        .then(user => {
            res.json({
                status: 'success',
                statusCode: 200,
                user: user,
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

    updateUserController: (req, res) => {
        const {id} = req.params 
        const {name, email} = req.body
        User.findOneAndUpdate({_id: id},{
            $set: {
                name,
                email
            }
        })
            .then(user => {
                res.json({
                    status: 'success',
                    statusCode: 200,
                    user: user,
                    message: "successfully Updated"
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

    updatePasswordController: (req, res) => {
        const {id} = req.params
        const {oldPassword, newPassword} = req.body

        bcrypt.hash(newPassword, saltRounds, function(err, hash) {
            User.findOneAndUpdate({_id: id}, {
                $set: {
                    password: hash
                }
            })
            .then((user) => {
                res.json({
                    status: 'success',
                    statusCode: 200,
                    user: user,
                    message: "successfully Updated"
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
        })
    },

    deleteUserController: (req, res) => {
        const {id} = req.params 
        User.findByIdAndDelete(id)
        .then(find => {
            if(find) {
                res.json({
                    status: 'success',
                    statusCode: 200,
                    user: find,
                    message: "User has been deleted successfully"
                })
            } else {
                res.json({
                    status: 'success',
                    statusCode: 200,
                    message: "User Not Found"
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