const stdClassRoute = require('express').Router()
const {
    index,
    currentYear,
    singleClass,
    view,
    store,
    edit,
    update,
    deletes
} = require('../controller/stdClassController')

const {
    addStudentInStdClass,
    checkExistingSameYear
} = require('../middleware/StdClassMiddleware')

stdClassRoute
.get('/classes', index)
.get('/current-year', currentYear)
.get('/single-class/:id', singleClass)
.get('/:id', view)
.post('/create', addStudentInStdClass, checkExistingSameYear, store)
.delete('/delete/:id', deletes)

module.exports = stdClassRoute