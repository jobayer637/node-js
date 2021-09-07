const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images/student/profile')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() +"__"+ file.originalname)
    }
  })
  
  const uploadStudentProfile = multer({ storage: storage })

  module.exports = uploadStudentProfile