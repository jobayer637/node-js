const {Schema, model} = require('mongoose')

const noticeCategorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }

}, {
    timestamps: true
})

const NoticeCategory = model('NoticeCategory', noticeCategorySchema)

module.exports = NoticeCategory