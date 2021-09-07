const Classes = require("../model/classes");

module.exports = {
    createNewClass: (req, res, next) => {
        const { name, academicYear } = req.body;

        if (!name || name.length === 0) {
            res.json({
                statusCode: 400,
                status: "error",
                type: "name",
                message: "name must not be empty",
            });
        }

        if (!academicYear || academicYear.length === 0) {
            res.json({
                statusCode: 400,
                status: "error",
                type: "academicYear",
                message: "Academic year must not be empty",
            });
        }

        if (academicYear.length > 4 || academicYear.length < 4) {
            res.json({
                statusCode: 400,
                status: "error",
                type: "academicYear",
                message: "acadenuc year must be exact 4 character",
            });
        }

        Classes.find({ $and: [{ name: name }, { academicYear: academicYear }] })
            // .where({name: name, academicYear: academicYear})
            .then((find) => {
                if (find.length!==0) {
                    res.json({
                        statusCode: 400,
                        status: "error",
                        type: "classes",
                        message: "Already axists Class Name and Academic Year Combo",
                        data: find,
                    });
                } else {
                    next()
                }
            })
            .catch((error) => {
                res.json({
                    statusCode: 400,
                    status: "error",
                    error: error,
                    type: "classes",
                    message: "Error Occoured while storing data",
                });
            });
    },
};
