import express, { Router } from 'express'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })
const addimageRouter = express.Router()

addimageRouter.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

export default addimageRouter