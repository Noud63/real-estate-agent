const Emails = require('../models/emailsModel')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

const emails = asyncHandler(async (req, res) => {

    let { email } = req.body

    if (!email) {
        res.status(400).json({ message: 'Please provide valid email address!' })
    }

    let existingEmail = await Emails.findOne({ email })

    if (existingEmail) {
        res.status(400).json({ message: 'Email already exist!' })
    }

    let newEmail = await Emails.create(
        { email }
    )

    if (newEmail) {
        res.status(201).json({ email: newEmail.email })
    }
    console.log(newEmail)

})

module.exports = emails
