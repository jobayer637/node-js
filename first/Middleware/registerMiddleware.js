const User = require('../Model/user')

const RegisterMiddleware = (req, res, next) => {
    const { email } = req.body
    
    User.findOne({email:email})
        .then(find=>{
            !find
            ? next()
            : res.json({
                status: 400,
                message: "This email has already been taken",
                type: "email"
            })
        })
        .catch(err=>{
            res.json({
                status: 400,
                error: error
            })
        })

}

module.exports = RegisterMiddleware