const asyncHandler = require('express-async-handler')
const Emails = require('../models/emailsModel')


const deleteEmail = asyncHandler(async (req, res) => {

    let email = await Emails.findById(req.params.id);
    if (!email) {
        res.status(400)
        throw new Error('Email address not found')
    }
    await email.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = deleteEmail