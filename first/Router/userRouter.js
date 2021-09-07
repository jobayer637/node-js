const userRouter = require('express').Router()

const allUserController = require('../Controller/auth/allUserController')
const loginController = require('../Controller/auth/loginController')
const registerController = require('../Controller/auth/registerController')
const singleUserController = require('../Controller/auth/singleUserController')

const loginMiddleware = require('../Middleware/loginMiddleware')
const registerMiddleware = require('../Middleware/registerMiddleware')
const passwordMiddleware = require('../Middleware/passwordMiddleware')

userRouter.get('/users', allUserController)
userRouter.get('/:id', singleUserController)
userRouter.post('/login', loginMiddleware, loginController)
userRouter.post('/register', registerMiddleware, passwordMiddleware, registerController)

module.exports = userRouter