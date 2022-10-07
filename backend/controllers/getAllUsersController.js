const express = require('express')
const User = require('../models/registerModel')
//const asyncHandler = require('express-async-handler')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    } catch (error) {
        console.error(error)
    }
}

module.exports = getAllUsers