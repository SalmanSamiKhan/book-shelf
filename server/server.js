import express from 'express'
import bookRouter from './routes/bookRoutes.js'
import booksRouter from './routes/booksRoutes.js'
import mongoose from 'mongoose'

const app = express()

app.use(express.json()) // for using json
app.use(express.urlencoded({ extended: true }))

// mongoose

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bookshelf');
  console.log('connected to db')
}

app.use('/api', booksRouter) // for all book
app.use('/api', bookRouter) // add a book

const localPort = process.env.PORT || 5000
app.listen(localPort, async (req, res) => {
  console.log(`server runnign at http://localhost:${localPort}`)
})