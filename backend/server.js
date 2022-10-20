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
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const allUsersRoute = require('./routes/allUsersRoute')
const userProfileRoute = require('./routes/userProfileRoute')
const updateProfileRoute = require('./routes/updateProfileRoute')
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
app.use('/users', registerRoute)
app.use('/login', loginRoute)
app.use('/allusers', allUsersRoute)
app.use('/userprofile', userProfileRoute)
app.use('/updateprofile', updateProfileRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`.yellow)})
