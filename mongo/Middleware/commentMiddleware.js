module.exports = {
    createCommentMiddleware : (req, res, next) => {
        const {comment, userId, blogId} = req.body

        if(!comment){
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'comment',
                message: "Please provide a blog comment"
            })
        }
        if(!userId){
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'userId',
                message: "Please provide authenticate userId"
            })
        }

        if(!blogId){
            res.json({
                status: 'error',
                statusCode: 400,
                type: 'blogId',
                message: "Please provide blogId"
            })
        }

        next()
    }
}