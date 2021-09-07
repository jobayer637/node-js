module.exports = {
    demoController: (req, res) => {
        
        res.json({
            name: req.body,
            file: req.files
        })
    }
}