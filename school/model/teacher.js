const {Schema, model} = require('mongoose')

const teacherSchema = new Schema({
    role: {
        type: Number,
        trim: true,
        default: 2
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true
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
        default: false
    },
    blood: {
        type: String,
        trim: true,
        required: true
    },
    joinningDate: {
        type: Date,
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

const Teacher = model('Teacher', teacherSchema)

module.exports = Teacher