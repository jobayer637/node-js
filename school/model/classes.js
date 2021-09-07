const {Schema, model} = require('mongoose')

const classSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    academicYear: {
        type: Number,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

const Classes = model('Classes', classSchema)

module.exports = Classes