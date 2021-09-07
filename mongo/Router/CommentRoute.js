const commentRoute = require('express').Router()

const {
    createCommentMiddleware
} = require('../Middleware/commentMiddleware')

const { 
    allCommentController, 
    singleCommentController,
    createCommentController, 
    updateCommentController, 
    deleteCommentController 
} = require('../Controller/commentController')

commentRoute
.get('/comments', allCommentController)
.get('/:id', singleCommentController)
.post('/create', createCommentMiddleware, createCommentController)
.put('/update/:id', updateCommentController)
.delete('/delete/:id', deleteCommentController)

module.exports = commentRoute