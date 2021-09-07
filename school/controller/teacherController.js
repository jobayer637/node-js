const Teacher = require('../model/teacher')
const Address = require('../model/address')

module.exports = {
    index : (req, res) => {
        Teacher.find()
        .populate({
            path: 'address',
            select: ['present', 'permanent']
        })
        .then(teachers => {
            res.json({
                statusCode: 200,
                status: 'success',
                teachers: teachers,
                type: 'teachers'
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'teachers'
            })
        })
    },

    view : (req, res) => {
        const id = req.params.id
        Teacher.findById(id)
        .populate({
            path: 'address',
            select: ['present', 'permanent']
        })
        .then(teacher => {
            teacher
            ? res.json({
                statusCode: 200,
                status: 'success',
                teacher: teacher,
                type: 'teacher',
                message: 'find teacher'
            })
            : res.json({
                statusCode: 200,
                status: 'success',
                teacher: teacher,
                type: 'teacher',
                message: "teacher not found"
            })
        })
        .catch(error => {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'teacher',
                message: "teacher not found"
            })
        })
    },

    store : (req, res) => {
        const {
            name, 
            email, 
            phone, 
            gender, 
            religion, 
            presentAddress, 
            permanentAddress, 
            dob, 
            blood,
            joinningDate
        } = req.body

        const newAddress = new Address({
            present: presentAddress,
            permanent: permanentAddress
        })

        const newTeacher = new Teacher({
            name: name,
            email: email,
            phone: phone,
            address: newAddress._id,
            gender: gender,
            religion: religion,
            dob: dob,
            joinningDate: joinningDate,
            blood: blood
        })

        try{
            newTeacher.save()
            .then(teacher => {
                newAddress.save();
                res.json({
                    statusCode: 200,
                    status: 'success',
                    teacher: teacher,
                    type: 'create teacher'
                })
            })
            .catch(error => {
                res.json({
                    statusCode: 400,
                    status: 'error',
                    error: error,
                    type: 'create teacher'
                })
            })
            
        } catch(error) {
            res.json({
                statusCode: 400,
                status: 'error',
                error: error,
                type: 'create teacher'
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