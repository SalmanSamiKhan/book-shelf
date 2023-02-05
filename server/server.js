import express from 'express'
import addbookRouter from './routes/addbookRoutes.js'
import getbooksRouter from './routes/getbooksRoutes.js'

const app = express()

app.use(express.json()) // for using json
app.use(express.urlencoded({ extended: true }))

app.use('/api/getbooks', getbooksRouter)
app.use('/api/addbook', addbookRouter)

const localPort = process.env.PORT || 5000
app.listen(localPort, async (req,res)=>{
    console.log(`server runnign at http://localhost:${localPort}`)
})