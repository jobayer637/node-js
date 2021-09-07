const mongoose = require("mongoose");
const Schema = mongoose.Schema


const blogSchema = new Schema({
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
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    }
},
{
    timestamps: true
})

blogSchema.path('user').ref('User');
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog