const {Schema, model} = require('mongoose')
const User = require('../Model/userModel')

const blogSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required:  true
    },

    body: {
        type: String,
        trim: true,
        required:  true
    },

    image: {
        type: String,
        default: 'https://www.digitalvidya.com/wp-content/uploads/2019/03/personal-blog.jpg'
    },

    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Like'
    }],

    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    }
},
{
    timestamps: true
})

const Blog = model('Blog', blogSchema)

module.exports = Blog