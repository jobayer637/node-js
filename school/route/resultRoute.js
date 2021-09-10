const resultRoute = require('express').Router()
const {
    index,
    view,
    store,
    edit,
    update,
    deletes
} = require('../controller/resultController')


resultRoute
.get('/results', index)
.post('/create', store)

module.exports = resultRoute