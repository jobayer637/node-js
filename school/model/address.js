const {Schema, model} = require('mongoose')

const addressSchema = new Schema({
    present: {
        type: String,
        trim: true,
        required: true
    },
    permanent: {
        type: String,
        trim: true,
        required: true
    }

}, {
    timestamps: true
})

const Address = model('Address', addressSchema)

module.exports = Address