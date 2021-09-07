const classRoute = require('express').Router()
const {
    index,
    currentSession,
    academicYrs,
    view,
    store,
    edit,
    update,
    deletes
} = require('../controller/classController')

const {
    createNewClass
} = require('../middleware/ClassMiddleware')

classRoute
.get('/classes', index)
.get('/current-session', currentSession)
.get('/academic-year', academicYrs)
.get('/:id', view)
.post('/create', createNewClass, store)

module.exports = classRoute