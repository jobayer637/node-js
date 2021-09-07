const User = require('../../Model/user')

const allUserController = (req, res) => {
    User.find()
        .then(users=>{
            res.json(users)
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports = allUserController