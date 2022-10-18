const express = require('express')
const User = require('../models/registerModel')
const generateToken = require('../utils/generateToken')
const mongoose = require('mongoose')
//const asyncHandler = require('express-async-handler')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    } catch (error) {
        console.error(error)
    }
}


const userProfile = async (req, res) => {
    try {
        let profile = await User.findById(req.params.id);
        if (profile) {
            profile = {
                _id: profile._id,
                firstname: profile.firstname,
                lastname: profile.lastname,
                address: profile.address,
                country: profile.country,
                zip: profile.zip,
                city: profile.city,
                telephone: profile.telephone,
                email: profile.email,
                number: profile.number,
                username: profile.username
            }
            res.send(profile);
        }

    } catch (error) {
        console.error(error)
    }
}

module.exports = { getAllUsers, userProfile }