const {Schema, model} = require('mongoose')

const stdClassSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    classes: {
        type: Schema.Types.ObjectId,
        ref: "Classes",
        required: true
    },
    status: {
        type: String,
        trim: true,
        default: false
    },

}, {
    timestamps: true
})

const StdClass = model('StdClass', stdClassSchema)

module.exports = StdClass