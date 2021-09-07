const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required:  true
    },

    email: {
        type: String,
        trim: true,
        required:  true
    },

    image: {
        type: String,
        trim: true
    },

    password: {
        type: String,
        trim: true,
        required:  true
    },

    blogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }], 

    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],

    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Like'
    }]
},
{
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User