const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')


const studentRoute = require('./route/studentRoute')
const teacherRoute = require('./route/teacherRoute')
const classRoute = require('./route/classRoute')
const stdClassRoute = require('./route/stdClassRoute')
const subjectRoute = require('./route/subjectRoute')
const resultRoute = require('./route/resultRoute')

const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())
app.use(express.static('images'))

app.use('/api/student', studentRoute)
app.use('/api/teacher', teacherRoute)
app.use('/api/class', classRoute)
app.use('/api/std-class', stdClassRoute)
app.use('/api/subject', subjectRoute)
app.use('/api/result', resultRoute)

app.get("/", (req, res) => {
    res.send("Home page")
})

app.get('*', (req, res) => {
    res.send("404 not found")
})

app.listen(PORT, () => {
    console.log("Server is running on port "+ PORT)
    mongoose.connect('mongodb://localhost:27017/school', {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log('mongoose db connected')
    });
})
