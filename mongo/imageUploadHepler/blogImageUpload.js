const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./image/blog")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() +"__"+ file.originalname)
    }
})

const blogImageUpload = multer({storage: fileStorageEngine})

module.exports = blogImageUpload