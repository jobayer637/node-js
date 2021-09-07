const User = require('../../Model/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Login = (req, res) => {
    const {email, password} = req.body

    User.findOne({email:email})
        .then(find=>{
            bcrypt.compare(password, find.password, function(err, result) {
                result
                ?   res.json({
                        data: find,
                        status: 200,
                        message: "Authenticate User",
                        authenticate: true
                    })
                :   res.json({
                        status: 400,
                        message: "Invalid Password",
                        type: "password",
                        authenticate: false
                    })
            })
        })
        .catch(err=>{
            res.json({
                status: 400,
                error: err,
                message: "Invalid Email",
                type: "email",
                authenticate: false
            })
        })
}

module.exports = Login