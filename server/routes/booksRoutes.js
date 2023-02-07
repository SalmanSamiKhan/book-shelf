import express, { Router } from 'express'
import Book from '../models/BookModel.js';

const booksRouter = express.Router()

// api/getbooks
booksRouter.get('/getbooks', async (req, res) => {
    try {
        const books = await Book.find() 
        res.send(books)
        // res.send(data.books)
    } catch (error) {
        res.status(500).send('Internal Server Error')

    }

})

export default booksRouter