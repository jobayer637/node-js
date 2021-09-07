const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Blog = require('../Model/blog')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    blogs: [{
        type: Schema.ObjectId,
        ref: 'Blog'
    }]
})
userSchema.path('blogs').ref('Blog'); // Can set ref to a model name
const User = mongoose.model("User", userSchema)

module.exports = User