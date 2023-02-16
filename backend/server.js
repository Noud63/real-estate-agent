const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = express.Router()
const colors = require('colors')
const path = require('path')
const PORT = process.env.REACT_APP_PORT || 5000
const connectDB = require('./config/db')
const addDataToCollection = require('./seeder')
const castleRoute = require('./routes/castleRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const allUsersRoute = require('./routes/allUsersRoute')
const userProfileRoute = require('./routes/userProfileRoute')
const updateProfileRoute = require('./routes/updateProfileRoute')
const deleteUserRoute = require('./routes/deleteUserRoute')
const addEmailRoute = require('./routes/addEmailRoute')
const allEmailsRoute = require('./routes/allEmailsRoute')
const deleteEmailRoute = require('./routes/deleteEmailRoute')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const fs = require('fs')

app.use(cors())
app.use(express.json())
dotenv.config()

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

connectDB().then(
    app.listen(PORT, () => { console.log(`Server running on port ${PORT}`.yellow) })
)

addDataToCollection()

// app.get('/', (req, res) => {
//     res.send({ message: 'Server up and running!' })
// })

app.get("/config", (req, res) => {
    res.send({
        publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    });
});


app.post("/create-payment-intent", async (req, res) => {

    let amount = 995
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "eur",
            amount: amount,
            automatic_payment_methods: { enabled: true },
        });

        // Send publishable key and PaymentIntent details to client
        res.send({
            clientSecret: paymentIntent.client_secret,
            paymentIntent: paymentIntent
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});


app.use('/castles', castleRoute)
app.use('/users', registerRoute)
app.use('/login', loginRoute)
app.use('/allusers', allUsersRoute)
app.use('/userprofile', userProfileRoute)
app.use('/updateprofile', updateProfileRoute)
app.use('/deleteuser', deleteUserRoute)
app.use('/addemail', addEmailRoute)
app.use('/allemails', allEmailsRoute)
app.use('/deleteemail', deleteEmailRoute)

// Place after routes
// Render => Serving the frontend

app.use('/', express.static(path.join(__dirname, '../frontend', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
});

// app.use(notFound)
// app.use(errorHandler)


