const authRoute = require('express').Router()
const {
    loginController,
    registerController
} = require('../Controller/authController')

const {
    loginMiddleware,
    registerMiddleware
} = require('../Middleware/authMiddleware')

const profileImageUpload = require('../imageUploadHepler/profileImageUploder')



authRoute
.post('/register', registerMiddleware, profileImageUpload.single('image'), registerController)
.post('/login', loginMiddleware, loginController)


module.exports = authRoute