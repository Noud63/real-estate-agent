const RealEstates = require('./models/realEstateModel')
const data = require('./data/data')
const mongoose = require('mongoose')

const addDataToCollection = async () => {
    try {
        await RealEstates.deleteMany()
        await RealEstates.insertMany(data, function (err, result) {
            console.log('Data imported!'.green.inverse)
            console.log("Number of documents inserted: " + result.length);
        })
    } catch (error) {
        console.error(`${error}`.red)
    }
}

module.exports = addDataToCollection