const Classes = require('../model/classes')
const Address = require('../model/address')

module.exports = {
    index : (req, res) => {
        Classes.find()
        .then(classes => {
            res.json({
                statusCode: 200,
                status: 'success',
                classes: classes,
                type: 'class'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'class'
            })
        })
    },

    currentSession: (req, res) =>{
        const currentYear = new Date().getFullYear()
        Classes.find()
        .where({academicYear: currentYear})
        .then(classes => {
            res.json({
                statusCode: 200,
                status: 'success',
                classes: classes,
                type: 'class'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'class'
            })
        })
    },

    academicYrs: (req, res) =>{
        Classes.find()
        .distinct('academicYear')
        .then(classes => {
            res.json({
                statusCode: 200,
                status: 'success',
                classes: classes,
                type: 'class'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'class'
            })
        })
    },

    view : (req, res) => {
        const id = req.params.id
        Classes.findById(id)
        .then(classes => {
            classes
            ? res.json({
                statusCode: 200,
                status: 'success',
                classes: classes,
                type: 'classes',
                message: 'find classes'
            })
            : res.json({
                statusCode: 200,
                status: 'success',
                classes: classes,
                type: 'classes',
                message: "classes not found"
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'classes',
                message: "classes not found"
            })
        })
    },

    store : (req, res) => {
        const {
            name, 
            academicYear
        } = req.body

        const newClass = new Classes({
            name: name,
            academicYear: academicYear
        })

        try{
            newClass.save()
            .then(classes => {
                res.json({
                    statusCode: 200,
                    status: 'success',
                    classes: classes,
                    type: 'create classes'
                })
            })
            .catch(error => {
                res.json({
                    statusCode: 400,
                    status: 'error',
                    error: error,
                    type: 'create class'
                })
            })
            
        } catch(error) {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'create class'
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
        const {} = req.body
        
    }
}