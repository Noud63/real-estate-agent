const express = require('express')
const RealEstates = require('../models/realEstateModel')
//const asyncHandler = require('express-async-handler')

const getRealEstates = async (req, res) => {
        try {
                const realestates = await RealEstates.find({});
                res.send(realestates);
        } catch (error) {
              console.error(error)  
        }
}


module.exports = getRealEstates