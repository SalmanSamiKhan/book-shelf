import express, { Router } from 'express'
import Book from '../models/BookModel.js'
import slugify from 'slugify'
const bookRouter = express.Router()


// api/addbook
bookRouter.post('/addbook', async (req, res) => {
    try {
        const { name, author, year, genre, desc } = req.body
        const slug = slugify(name, { lower: true })
        const newBook = new Book({ name: name, author: author, year: year, genre: genre, desc: desc, slug: slug })
        newBook.save((err) => {
            if (err) {
                return handleError(err)
            }
        })
        res.json(req.body)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }

})

export default bookRouter