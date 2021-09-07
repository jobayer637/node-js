const StdClass = require("../model/stdClass");
const Classes = require("../model/classes");
const { compareSync } = require("bcrypt");

module.exports = {
    addStudentInStdClass: (req, res, next) => {
        const { student, classes } = req.body;

        StdClass.find({ $and: [{ student }, { classes }] })
            .then((find) => {
                if (find.length !== 0) {
                    res.json({
                        statusCode: 400,
                        status: "error",
                        type: "add student",
                        message: "This Student already added in this class",
                        data: find,
                    });
                } else {
                    next();
                }
            })
            .catch((error) => {
                res.json({
                    statusCode: 400,
                    status: "error",
                    error: error,
                    type: "add student",
                    message: "Error Occoured while adding student",
                });
            });
    },

    checkExistingSameYear: (req, res, next) => {
        const { student, classes } = req.body;

        StdClass.find()
            .populate({
                path: 'classes', select: ['academicYear', 'name']
            })
            .then(stdCls => {
                // console.log(stdCls)
                Classes.findOne({ _id: classes })
                    .then(cls => {
                        // console.log(cls)
                        let i = stdCls.find(std => student == std.student && std.classes.academicYear === cls.academicYear)
                        if (i) {
                            res.json({
                                statusCode: 400,
                                status: "error",
                                type: "add student",
                                message: `This Student already added in class ${i.classes.name} academic Year ${i.classes.academicYear}`,
                            });
                        } else {
                            next()
                        }
                    })
                    .catch((err) => {
                        res.json({
                            statusCode: 400,
                            status: "error",
                            type: "add student",
                            message: `Resource Error`,
                        });
                    });
            })

    },
};
