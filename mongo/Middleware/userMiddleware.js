const User = require('../Model/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    userUpdateMiddleware: (req, res, next) => {
        const {name, email, password} = req.body

        if(!name) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'name',
                message: "Please enter your Name"
            })
        }

        if(!email) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'email',
                message: "Please enter your email"
            })
        }

        next()
     },

     updatePasswordMiddleware: (req, res, next) => {
        const {id} = req.params
        const {oldPassword, newPassword} = req.body

        if(!oldPassword) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'password',
                message: "Please Enter Old Password"
            })
        }

        User.findById(id)
        .then(find => {
            if(find) {
                bcrypt.compare(oldPassword, find.password, function(err, result) {
                    if(result === true) {
                        if(newPassword.length <=3) {
                            res.json({
                                status: 'error',
                                statusCode: 400,
                                type: 'password',
                                message: "new password at least 4 character"
                            })
                        }

                        if(oldPassword === newPassword) {
                            res.json({
                                status: 'error',
                                statusCode: 400,
                                type: 'password',
                                message: "new password cannot same with old password"
                            })
                        }
                        
                        next()
                    } else {
                        res.json({
                            status: 'error',
                            statusCode: 400,
                            type: 'password',
                            error: err,
                            message: "Invalid Old Password"
                        })
                    }
                })  
           } else {
                res.json({
                    status: 'error',
                    statusCode: 400,
                    type: 'user',
                    message: "User Not Found"
                })
           }
        })
        .catch(err => {
            res.json({
                status: 'error',
                statusCode: 500,
                message: "Server error"
            })
        })
     }
}