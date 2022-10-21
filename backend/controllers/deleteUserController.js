// const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/registerModel')
// const generateToken = require('../utils/generateToken')
// const bcrypt = require('bcrypt')

const deleteUser = asyncHandler(async (req, res) => {
    
        let user = await User.findById(req.params.id);
    // if (!user) {
    //     res.status(400)
    //     throw new Error('User not found')
    // }

    // //Check for user
    // if (!req.user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // //Make sure the logged in user matches the goal user
    // if (user._id !== req.user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }

    await user.remove()
    res.status(200).json({ id: req.params.id })

   
})

module.exports = deleteUser