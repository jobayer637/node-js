const {Schema, model} = require('mongoose')

const subjectSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    className: {
        type: String,
        trim: true,
    },
    subjectType: {
        type: String,
        trim: true,
        required: true
    },
    group: {
        type: String,
        trim: true,
        required: true
    },
    marks: {
        type: Number,
        trim: true,
        required: true,
        min: 0,
        max: 100 
    }
}, {
    timestamps: true
})

const Subject = model('Subject', subjectSchema)

module.exports = Subject