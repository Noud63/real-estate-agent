const mongoose = require('mongoose')

const realEstateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    departement: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    bedrooms: {
        type: String,
        required: true,
    },
    bathrooms: {
        type: String,
        required: true,
    },
    livingspace: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true
    },
    located: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const RealEstates = mongoose.model('realestates', realEstateSchema)
module.exports = RealEstates