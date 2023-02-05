import express, { Router } from 'express'

const addbookRouter = express.Router()

// api/addbook
addbookRouter.post('/', async (req, res) => {
    try {
        const { name, author, year, genre, desc } = req.body
        console.log(name)
        res.json(req.body)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }

})

export default addbookRouter