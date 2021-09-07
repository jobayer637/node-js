const demoRoute = require('express').Router()



const demoImageUpload = require('../imageUploadHepler/demoImageUpload')

const {demoController} = require('../Controller/demoController')
const { demoMiddleware } = require('../Middleware/demoMiddlware')

demoRoute.post('/demo', demoMiddleware, demoImageUpload.single('image'), demoController)


module.exports = demoRoute