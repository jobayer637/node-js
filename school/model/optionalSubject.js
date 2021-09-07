const {Schema, model} = require('mongoose')

const optionalSubjectSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }

}, {
    timestamps: true
})

const OptionalSubject = model('OptionalSubject', optionalSubjectSchema)

module.exports = OptionalSubject