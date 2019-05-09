
const aws = require('aws-sdk');
const multer = require('multer');
// const multerS3 = require('multer-s3');

var cloudinary = require('cloudinary');


const config = require('../config');

var cloudinary = require('cloudinary');
const cloudinaryStorage = require("multer-storage-cloudinary");
cloudinary.config({ 
  cloud_name: 'dlxbal75n', 
  api_key: '427339153737617', 
  api_secret: 'bJh_3n_YZ0XWC6CKQPMFhr4PqO8' 
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
  } else {
      cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
  }
}

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const upload = multer({
  fileFilter,
  storage: storage
})

module.exports = upload;