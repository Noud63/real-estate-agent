const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = express.Router()
const colors = require('colors')
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


connectDB()
addDataToCollection()

app.get('/', (req, res) => {
   console.log('Server up and and running....')
   res.send({message: 'Got it!'})
})

// app.use('/castles', require('./routes/castlesRoute'))
// app.use('/users', require('./routes/registerRoute'))
// app.use('/login', require('./routes/loginRoute'))

app.listen(PORT, () => console.log(`Server running on Port ${PORT} in ${process.env.NODE_ENV} mode`.yellow))

