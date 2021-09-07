const User = require('../../Model/user')

const singleUserController = (req, res) => {
    const {id} = req.params
    User.findById(id)
        .then(find=>{
            res.json(find)
        })
        .catch(err=>{
            console.log(err)
            res.json(err)
        })
}

module.exports = singleUserController