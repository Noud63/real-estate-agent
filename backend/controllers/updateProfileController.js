// const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/registerModel')
// const generateToken = require('../utils/generateToken')
// const bcrypt = require('bcrypt')

const updateProfile = asyncHandler(async (req, res) => {
    const { firstname, lastname, address, country, zip, city,
        telephone, email, number, username, password, _id } = req.body;

    const updatedProfile = req.body

    await User.findOneAndUpdate({ _id }, updatedProfile, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
        // Send same request again use clone()
    }).clone().catch(function (err) { console.log(err) })
})

module.exports = updateProfile