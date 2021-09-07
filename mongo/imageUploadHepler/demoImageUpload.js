const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./image/demo")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() +"__"+ file.originalname)
    }
})

const demoImageUpload = multer({storage: fileStorageEngine})

module.exports = demoImageUpload