const {Schema, model} = require('mongoose')

const attendanceSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    status: {
        type: String,
        trim: true,
        required: true
    },

}, {
    timestamps: true
})

const Attendance = model('Attendance', attendanceSchema)

module.exports = Attendance