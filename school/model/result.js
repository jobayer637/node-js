const {Schema, model} = require('mongoose')

const resultSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        trim: true
    },

    classes: {
        type: Schema.Types.ObjectId,
        ref: 'StdClass',
        trim: true
    },

    academicYear: {
        type: String,
        trim: true,
        required: true
    },

    className: {
        type: String,
        trim: true,
        required: true
    },

    result: {
        type: String,
        trim: true,
        required: true
    }

}, {
    timestamps: true
})

const Result = model('Result', resultSchema)

module.exports = Result