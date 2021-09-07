const User = require('../../Model/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Register = (req, res) => {
    const {name, email, password} = req.body
    bcrypt.hash(password, saltRounds, function(err, hash) {
        let newUser = new User({
            name, email, password:hash
        })
        
        newUser.save()
            .then(nu=>{
                res.json({
                    status: 200,
                    data: nu,
                    message: "Successfully Registered",
                    type: "success",
                    registered: true
                })
            })
            .catch(err=>{
                res.json({
                    status: 400,
                    error: err,
                    message: "Registered Failed"
                })
            })
    });
    
}

module.exports = Register