const {Schema, model} = require('mongoose')

const noticeSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        default: 'notice.jpg'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "NoticeCategory",
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        required: true
    }

}, {
    timestamps: true
})

const Notice = model('Notice', noticeSchema)

module.exports = Notice