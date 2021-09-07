const userRouter = require('express').Router()
const {
    userUpdateMiddleware,
    updatePasswordMiddleware
} = require('../Middleware/userMiddleware')

const {
    allUserController,
    deleteUserController,
    updateUserController,
    singleUserController,
    updatePasswordController
} = require('../Controller/userController')

userRouter
.get('/users', allUserController)
.get('/:id', singleUserController)
.put('/update/:id', userUpdateMiddleware, updateUserController)
.put('/update/password/:id', updatePasswordMiddleware, updatePasswordController)
.delete('/delete/:id', deleteUserController)

module.exports = userRouter