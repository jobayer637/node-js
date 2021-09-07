const Subject = require('../model/subject')

module.exports = {
    index : (req, res) => {
        Subject.find()
        .then(subject => {
            res.json({
                statusCode: 200,
                status: 'success',
                subject: subject,
                type: 'subject'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'subject'
            })
        })
    },

    view : (req, res) => {
        const id = req.params.id
        Subject.findById(id)
        .then(subject => {
            subject
            ? res.json({
                statusCode: 200,
                status: 'success',
                subject: subject,
                type: 'subject',
                message: 'find subject'
            })
            : res.json({
                statusCode: 200,
                status: 'success',
                subject: subject,
                type: 'subject',
                message: "subject not found"
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'subject',
                message: "subject not found"
            })
        })
    },

    classView : (req, res) => {
        const className = req.params.name

        Subject.find()
        .where({className})
        .then(subject => {
            subject
            ? res.json({
                statusCode: 200,
                status: 'success',
                subject: subject,
                type: 'subject',
                message: 'find subject'
            })
            : res.json({
                statusCode: 200,
                status: 'success',
                subject: subject,
                type: 'subject',
                message: "subject not found"
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'subject',
                message: "subject not found"
            })
        })
    },

    store : (req, res) => {
        const {
            name, 
            className, 
            subjectType, 
            group,
            marks
        } = req.body

        const newSubject = new Subject({
            name: name,
            className: className,
            subjectType: subjectType,
            group: group,
            marks: marks
        })

        try{
            newSubject.save()
            .then(subject => {
                res.json({
                    statusCode: 200,
                    status: 'success',
                    subject: subject,
                    type: 'create subject'
                })
            })
            .catch(error => {
                res.json({
                    statusCode: 400,
                    status: 'error',
                    error: error,
                    type: 'create subject'
                })
            })
            
        } catch(error) {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'create subject'
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