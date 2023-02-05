import express, { Router } from 'express'
import data from '../data.js'
import Book from '../models/BookModel.js';

const getbooksRouter = express.Router()

// api/getbooks
getbooksRouter.get('/', async (req, res) => {
    try {
        const books = await Book.find() 
        res.send(books)
        // res.send(data.books)
    } catch (error) {
        res.status(500).send('Internal Server Error')

    }

})

export default getbooksRouter