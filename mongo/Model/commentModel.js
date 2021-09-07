const {Schema, model} = require('mongoose')
const User = require('../Model/userModel')
const Blog = require('../Model/blogModel')

const commentSchema = new Schema({
    comment: {
        type: String,
        trim: true,
        required:  true
    },

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
},
{
    timestamps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment