import express from 'express'
import addbookRouter from './routes/addbookRoutes.js'
import addimageRouter from './routes/addimageRoutes.js'
import getbooksRouter from './routes/getbooksRoutes.js'
import getbookRouter from './routes/getbookRoutes.js'
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

app.use('/api/getbooks', getbooksRouter) // for all book
app.use('/api/getbook', getbookRouter) // for single book
app.use('/api/addbook', addbookRouter) // add a book
app.use('/api/addimage', addimageRouter) // add a book

const localPort = process.env.PORT || 5000
app.listen(localPort, async (req, res) => {
  console.log(`server runnign at http://localhost:${localPort}`)
})