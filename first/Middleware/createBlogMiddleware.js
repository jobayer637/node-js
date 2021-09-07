const createBlogMiddleware = (req, res, next) => {
    const {title, body} = req.body
    if(title.length === 0) {
        res.json({
            status: 400,
            type: 'title',
            message: 'Please Enter Title',
            response: 'error'
        })
    }

    if(body.length === 0) {
        res.json({
            status: 400,
            type: 'body',
            message: 'Please Enter body',
            response: 'error'
        })
    }
    
    next()
}

module.exports = createBlogMiddleware