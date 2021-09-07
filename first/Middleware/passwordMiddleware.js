const PasswordMiddleware = (req, res, next) => {
    const { email, password, confirmPassword } = req.body
    console.log(password.length)
    password.length <= 5 
    ?   res.json({
            status: 400,
            message: "Password must be at least 6 character",
            type: "password"
        })

    :   password === confirmPassword
        ?   next()
        :   res.json({
                status: 400,
                message: "Password and Confirm Passwrod are not matched",
                type: "confirmPassword"
            })

    
}

module.exports = PasswordMiddleware