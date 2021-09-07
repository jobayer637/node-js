const StdClass = require('../model/stdClass')
const Address = require('../model/address')

module.exports = {
    index : (req, res) => {
        StdClass.find()
        .populate({
            path: 'student',
            select: ['name', 'studentId']
        })
        .populate({
            path: 'classes',
            select: ['name', 'academicYear']
        })
        .then(stdClasses => {
            res.json({
                statusCode: 200,
                status: 'success',
                stdClasses: stdClasses,
                type: 'stdClasse'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'stdClasses'
            })
        })
    },
    singleClass: (req, res) => {
        const id = req.params.id
        StdClass.find()
        .where({
            classes: id
        })
        .populate({
            path: 'student',
            select: ['name', 'studentId']
        })
        .populate({
            path: 'classes',
            select: ['name', 'academicYear']
        })
        .then(stdClasses => {
            res.json({
                statusCode: 200,
                status: 'success',
                stdClasses: stdClasses,
                type: 'stdClasses'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'stdClasses'
            })
        })
    },

    currentYear: (req, res) => {
        StdClass.find()
        .populate({
            path: 'student',
            select: ['name', 'studentId']
        })
        .populate({
            path: 'classes',
            select: ['name', 'academicYear']
        })
        .then(stdClassed => {
            res.json({
                statusCode: 200,
                status: 'success',
                stdClassed: stdClassed,
                type: 'stdClassed'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'stdClassed'
            })
        })
    },

    view : (req, res) => {
        const id = req.params.id
        StdClass.findOn(id)
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
            student, classes
        } = req.body

        const newStdClass = new StdClass({
            student: student,
            classes: classes
        })

        try{
            newStdClass.save()
            .then(stdClass => {
                res.json({
                    statusCode: 200,
                    status: 'success',
                    stdClass: stdClass,
                    type: 'create stdClass'
                })
            })
            .catch(error => {
                res.json({
                    statusCode: 400,
                    status: 'error',
                    error: error,
                    type: 'create stdClass'
                })
            })
            
        } catch(error) {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'create stdClass'
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