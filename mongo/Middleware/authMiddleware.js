const User = require('../Model/userModel')
module.exports = {
     registerMiddleware: (req, res, next) => {
        const {name, email, password} = req.body
        User.findOne({email})
            .then((find) => {
                if(find) {
                   res.json({
                        status: 'error',
                        statusCode: 400,
                        message: "Email has already exists[middleware]",
                        type: "email",
                    })
                } else {
                   next()
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
    }, 

    loginMiddleware: (req, res, next) => {
        const {email, password} = req.body
        if(!email) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'email',
                message: "Please enter your email"
            })
        }

        // if(email.toLowerCase().includes("@gmail.com")) {
        //     res.json({
        //         status: 'error',
        //         statusCode: 400,
        //         type: 'email',
        //         message: "Please enter valid email"
        //     })
        // }

        if(!password) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'password',
                message: "Please enter your password"
            })
        }

        if(password.length <=3 ) {
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'password',
                message: "Password at least 4 character"
            })
        }

        next()

    }
}