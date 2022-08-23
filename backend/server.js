const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = express.Router()
const colors = require('colors')
const PORT = process.env.REACT_APP_PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')
const castleRoute = require('./routes/castleRoute')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

app.use(cors())
app.use(express.json())
dotenv.config()

connectDB()
addDataToCollection()

// app.get('/castles', (req, res) => {
//     res.send({ message: 'Got it!' })
// })

app.use('/castles', castleRoute)
// app.use('/users', require('./routes/registerRoute'))
// app.use('/login', require('./routes/loginRoute'))
// app.use('/enquiries', require('./routes/enquiriesRoute'))

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.yellow)
})
