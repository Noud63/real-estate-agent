const express = require('express')
const router = express.Router()
const getRealEstates = require('../controllers/realEstateController')

router.route('/').get(getRealEstates)
module.exports = router