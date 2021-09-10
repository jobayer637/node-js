const StdClass = require('../model/stdClass')
const Result = require('../model/result')

module.exports = {
    index : (req, res) => {
        Result.find()
        .populate({
            path: 'student',
            select: ['name', 'studentId']
        })
        .populate({
            path: 'classes',
            select: ['name', 'academicYear']
        })
        .then(result => {
            res.json({
                statusCode: 200,
                status: 'success',
                result: result,
                type: 'stdClasse'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'result'
            })
        })
    },
   
    view : (req, res) => {
        const id = req.params.id
        Result.findOn(id)
        .populate({
            path: 'student',
            select: ['name', 'studentId']
        })
        .populate({
            path: 'classes',
            select: ['name', 'academicYear']
        })
        .then(stdClass => {
            stdClass
            ? res.json({
                statusCode: 200,
                status: 'success',
                stdClass: stdClass,
                type: 'stdClass',
                message: 'find stdClass'
            })
            : res.json({
                statusCode: 200,
                status: 'success',
                stdClass: stdClass,
                type: 'stdClass',
                message: "stdClass not found"
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'stdClass',
                message: "stdClass not found"
            })
        })
    },

    store : (req, res) => {
        const {
            student, classes, academicYear, className, result
        } = req.body

        const newStdClass = new StdClass({
            student: student,
            classes: classes,
            academicYear: academicYear,
            className: className,
            result: result
        })

        try{
            Result.save()
            .then(result => {
                res.json({
                    statusCode: 200,
                    status: 'success',
                    result: result,
                    type: 'create result'
                })
            })
            .catch(error => {
                res.json({
                    statusCode: 400,
                    status: 'error',
                    error: error,
                    type: 'create result'
                })
            })
            
        } catch(error) {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'create result'
            })
        }
        
    },

    edit : (req, res) => {
        const {} = req.body
        
    },

    update : (req, res) => {
        const {} = req.body
        
    },

    deletes : (req, res) => {
        const {id} = req.params
        StdClass.findOneAndDelete({_id: id})
        .then(stdClass => {
            console.log(stdClass)
            if(StdClass) {
                res.json({
                    statusCode: 200,
                    status: 'success',
                    stdClass: stdClass,
                    type: 'delete',
                    message: 'Student Successfully Removed'
                })
            } else {
                res.json({
                    statusCode: 200,
                    status: 'success',
                    stdClass: stdClass,
                    type: 'delete',
                    message: 'Student Not Found'
                })
            }
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'delete'
            })
        })
    }
}