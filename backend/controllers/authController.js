const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/authModel')

// @desc    Register new user
// @route   POST /users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const {firstname, lastname, address, country, zip, city, 
        telephone, email, number, username, password, isAdmin} = req.body;

     const userExist = await User.findOne({ email })   

     if(userExist){
         res.status(400)
         throw new Error('User already exist!')
     }
})

moduler.exports = registerUser

