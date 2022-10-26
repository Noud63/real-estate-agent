const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const emailsSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Emails = mongoose.model('emails', emailsSchema)
module.exports = Emails