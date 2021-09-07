const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../Model/userModel')

module.exports = {
    loginController: (req, res) => {
        const {email, password} = req.body
        User.findOne({email})
            .then((find) => {
               if(find) {
                    bcrypt.compare(password, find.password, function(err, result) {
                        if(result === true) {
                            res.json({
                                status: 'success',
                                statusCode: 200,
                                user: {
                                    _id: find._id,
                                    name: find.name,
                                    email: find.email,
                                    image: find.image
                                },
                                message: "successfully logged in"
                            })
                        } else {
                            res.json({
                                status: 'error',
                                statusCode: 400,
                                type: 'password',
                                error: err,
                                message: "Invalid Password"
                            })
                        }
                    })  
               } else {
                    res.json({
                        status: 'error',
                        statusCode: 400,
                        type: 'email',
                        message: "Invalid email"
                    })
               }
            })
            .catch((err) => {
                res.json({
                    status: 'error',
                    statusCode: 500,
                    err: err,
                    message: "server error"
                })
            })
    },


    
    registerController: (req, res) => {
        const {name, email, password} = req.body
        User.findOne({email})
            .then((find) => {
                if(find) {
                   res.json({
                        status: 'error',
                        statusCode: 400,
                        message: "Email has already exists",
                        type: 'email'
                    })
                } else {
                    bcrypt.hash(password, saltRounds, function(err, hash) {
                        const newUer = new User({
                            name: name,
                            email: email,
                            image: "/profile/"+ req.file.filename,
                            password: hash
                        })

                        newUer.save()
                        .then((user) => {
                            res.json({
                                status: 'success',
                                statusCode: 200,
                                user: user,
                                imagePath: req.file.filename,
                                message: "Successfully Registered",
                                registered: true
                            })
                        })
                        .catch(err => {
                            res.json({
                                status: 'error',
                                statusCode: 400,
                                message: "Error Occoured",
                                registered: false
                            })
                        })
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 'error',
                    statusCode: 500,
                    err: err,
                    message: "server error"
                })
            })
    }
}