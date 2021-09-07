const {Schema, model} = require('mongoose')

const studentSchema = new Schema({
    studentId: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
    }, 
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    gender: {
        type: String,
        trim: true,
        required: true
    },
    religion: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: Date,
        trim: true,
        required: true
    },
    status: {
        type: Boolean,
        trim: true,
    },
    blood: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        default: 'profile.jpg'
    }

}, {
    timestamps: true
})

const Student = model('Student', studentSchema)

module.exports = Student