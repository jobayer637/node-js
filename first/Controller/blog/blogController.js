const Blog = require('../../Model/blog')

module.exports = {
    allBlog: (req, res) => {
        let blogs = Blog.find()
            .then((b)=>{
                res.json(b)
            })
            .catch((err)=>{
                console.log(err)
            })
        
    },

    sinlgeBlog: (req, res) => {
        let id = req.params
        Blog.findById(id.id)
        .then((b)=>{
            res.json(b)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    },

    newBlog: (req, res) => {
        let {title, body} = req.body
        let blog = new Blog({
            title, body
        })
        Blog.findOne({title: title})
            .then(existsBlog=>{
                !existsBlog
                ? blog.save()
                    .then(nb=>{
                        res.json({
                            status: 200,
                            response: 'success',
                            newBlog: nb
                        })
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                : res.json({
                    status: 400,
                    type: 'title',
                    response: 'error',
                    message: "The blog title alredy exists"
                 })
            })
            .catch(er=>{
                console.log("er:"+er)
            })
    },


    updateBlog: (req, res) => {
        let id = req.params
        console.log(id.blogId)
        Blog.findByIdAndUpdate(id.blogId)
            .then((deleteBlog)=>{
                deleteBlog
                    ? res.json({
                        data: deleteBlog,
                        status: 200,
                        message: "Successfully deleted"
                    })
                    : res.json({error: "cant find this id: "+ id.blogId})
            })
            .catch((err)=>{
                console.log(err)
            })
    },

    deleteBlog: (req, res) => {
        let id = req.params
        console.log(id.blogId)
        Blog.findByIdAndDelete(id.blogId)
            .then((deleteBlog)=>{
                deleteBlog
                    ? res.json({
                        data: deleteBlog,
                        status: 200,
                        message: "Successfully deleted"
                    })
                    : res.json({error: "cant find this id: "+ id.blogId})
            })
            .catch((err)=>{
                console.log(err)
            })
    },
}