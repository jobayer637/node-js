const {Schema, model} = require('mongoose')
const Blog = require('./blogModel')
const User = require('./userModel')


const likeSchema = new Schema({
    stts: Boolean,
    typ: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },

    blog: {
        type: Schema.Types.ObjectId,
        ref: Blog,
        required: true
    }

},{
    timestamps: true
})

const Like = model("Like", likeSchema)

module.exports = Like