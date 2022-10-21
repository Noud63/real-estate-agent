// const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/registerModel')
// const generateToken = require('../utils/generateToken')
// const bcrypt = require('bcrypt')

const deleteUser = asyncHandler(async (req, res) => {
    
        let user = await User.findById(req.params.id);
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
       await user.remove()
       res.status(200).json({ id: req.params.id })
})

module.exports = deleteUser