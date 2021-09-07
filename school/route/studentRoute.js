const studentRoute = require('express').Router()
const {
    allStudent,
    singleStudent,
    searchStudent,
    createStudent,
    editStudent,
    updateStudent,
    deleteStudent
} = require('../controller/studentController')

const uploadStudentProfile = require('../ImageHepler/StudentProfile')

studentRoute
.get('/students', allStudent)
.get('/:id', singleStudent)
.post('/search', searchStudent,)
.post('/create', uploadStudentProfile.single('image'), createStudent)

module.exports = studentRoute