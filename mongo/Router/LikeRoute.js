const likeRoute = require('express').Router()
const {
    allLikeController,
    singleLikeController,
    createLikeController,
    updateLikeController,
    deleteLikeController
} = require('../Controller/likeController')

likeRoute
.get('/likes', allLikeController)
.get('/id', singleLikeController)
.post('/create', createLikeController)
.put('/update/:id', updateLikeController)
.delete('/delete/:id', deleteLikeController)

module.exports = likeRoute