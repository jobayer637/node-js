module.exports = {
    demoMiddleware: (req, res, next) => {
        console.log(req)
        // const {name} =  req.body
        // if(!name) {
        //     req.json({
        //         error: "name is null"
        //     })
        // }
         next()
    }
}