const teacherRoute = require('express').Router()
const {
    index,
    view,
    store,
    edit,
    update,
    deletes
} = require('../controller/teacherController')

teacherRoute
.get('/teachers', index)
.get('/:id', view)
.post('/create', store)

module.exports = teacherRoute