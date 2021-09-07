const {Schema, model} = require('mongoose')

const groupSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

const Group = model('Group', groupSchema)

module.exports = Group