const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const mongoose = require('mongoose');
const cors = require('cors')
const multer = require('multer')



app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))
app.use(cors())

const authRoute = require('./Router/AuthRoute')
const userRoute = require('./Router/UserRoute')
const blogRoute = require('./Router/BlogRoute');
const commentRoute = require('./Router/CommentRoute');
const likeRoute = require('./Router/LikeRoute');

const apiDocumentation = require('./apiDocumentation');
const demoRoute = require('./Router/DemoRoute');

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/blog', blogRoute)
app.use('/api/blog/comment', commentRoute)
app.use('/api/blog/like', likeRoute)
app.use('/api/single-image', demoRoute)


app.use(express.static('image'));

app.get('/api/', (req, res) => {
    res.json({
        message: 'server port is 4000',
        documentation: apiDocumentation
    })
})

app.get('*', (req, res)=> {
    res.json({
        message: "404 not found"
    })
})


app.listen(PORT, ()=>{
    console.log('server is running on port 4000')
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
})
