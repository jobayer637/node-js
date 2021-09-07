const { find } = require("../model/student");
const Student = require("../model/student");
const Address = require("../model/address");

module.exports = {
    allStudent: (req, res) => {
        Student.find()
            .populate({
                path: "address",
                select: ["present", "permanent"],
            })
            .then((students) => {
                res.json({
                    statusCode: 200,
                    status: "success",
                    students: students,
                    type: "students",
                });
            })
            .catch((error) => {
                res.json({
                    statusCode: 400,
                    status: "error",
                    error: error,
                    type: "students",
                });
            });
    },

    searchStudent: (req, res) => {
        const { value } = req.body;
        Student.find({ studentId: { $regex: value, $options: "i" } })
            .populate({
                path: "address",
                select: ["present", "permanent"],
            })
            .then((std) => {
                if (std && std.length === 1) {
                    res.json({
                        data: std,
                        value: value,
                    });
                } else {
                    res.json({
                        data: [],
                        value: value,
                    });
                }
            })
            .catch((err) => {
                res.json({
                    error: err,
                    value: value,
                });
            });
    },

    singleStudent: (req, res) => {
        const id = req.params.id;
        Student.findById(id)
            .populate({
                path: "address",
                select: ["present", "permanent"],
            })
            .then((student) => {
                student
                    ? res.json({
                        statusCode: 200,
                        status: "success",
                        student: student,
                        type: "student",
                        message: "find student",
                    })
                    : res.json({
                        statusCode: 200,
                        status: "success",
                        student: student,
                        type: "student",
                        message: "Student not found",
                    });
            })
            .catch((error) => {
                res.json({
                    statusCode: 400,
                    status: "error",
                    error: error,
                    type: "student",
                    message: "Student not found",
                });
            });
    },

    createStudent: (req, res) => {
        const {
            studentId,
            name,
            email,
            phone,
            gender,
            religion,
            presentAddress,
            permanentAddress,
            dob,
            blood,
        } = req.body;

        const newAddress = new Address({
            present: presentAddress,
            permanent: permanentAddress,
        });

        const newStudent = new Student({
            studentId: studentId,
            name: name,
            email: email,
            phone: phone,
            address: newAddress._id,
            gender: gender,
            religion: religion,
            dob: dob,
            blood: blood,
            image: req.file? '/student/profile/'+req.file.filename : 'profile.jpg'
        });

        try {
            newStudent
                .save()
                .then((std) => {
                    newAddress.save();
                    res.json({
                        statusCode: 200,
                        status: "success",
                        student: std,
                        type: "create student",
                    });
                })
                .catch((error) => {
                    res.json({
                        statusCode: 400,
                        status: "error",
                        error: error,
                        type: "save student",
                    });
                });
        } catch (error) {
            res.json({
                statusCode: 400,
                status: "error",
                error: error,
                type: "create student",
            });
        }
    },

    editStudent: (req, res) => {
        const { } = req.body;
    },

    updateStudent: (req, res) => {
        const { } = req.body;
    },

    deleteStudent: (req, res) => {
        const { } = req.body;
    },
};
