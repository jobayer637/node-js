const subjectRoute = require('express').Router()
const {
    index,
    view,
    classView,
    store,
    edit,
    update,
    deletes
} = require('../controller/subjectController')


subjectRoute
.get('/subjects', index)
.get('/class/:name', classView)
.get('/:id', view)
.post('/create', store)
.delete('/delete/:id', deletes)

module.exports = subjectRoute