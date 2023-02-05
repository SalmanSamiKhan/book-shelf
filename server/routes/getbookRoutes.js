import express, { Router } from 'express'
import data from '../data.js'
import Book from '../models/BookModel.js';

const getbookRouter = express.Router()

// api/getbooks
getbookRouter.get('/:slug', async (req, res) => {
    try {
        const book = await Book.findOne({ slug: req.params.slug });  
        console.log(book.slug)
        console.log(book.year)
        res.send(book)
        // res.send(data.books)
    } catch (error) {
        res.status(500).send(error)

    }

})

export default getbookRouter