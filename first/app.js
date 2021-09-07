const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || 4000
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const userRoute = require('./Router/userRouter')
const blogRouter = require('./Router/blogRouter')

app.use('/user', userRoute)
app.use('/blog', blogRouter)



app.get('/', (req, res) => {    
   res.json({
       message: "Welcome to my Blog Api Channel",
       developer: "Jobayer Hossain",
       status: "FullStack Developer",
   })
})

mongoose.connect('mongodb://localhost/Blog', {useNewUrlParser: true, useUnifiedTopology: true})
        .then((res)=>{
            app.listen(port, ()=>{
                console.log('db successfully connected')
            })
        })
        .catch((error)=>{
            console.log(error)
        })


