const multer = require('multer')
const User = require('../Model/userModel')
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./image/profile")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() +"__"+ file.originalname)
    }
})

const profileImageUpload = multer({storage: fileStorageEngine})

module.exports = profileImageUpload