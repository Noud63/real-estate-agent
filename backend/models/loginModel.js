const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const loginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

const Login = mongoose.model('Login', loginSchema)
module.exports = Login