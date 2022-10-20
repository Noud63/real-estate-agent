const express = require('express')
const router = express.Router()
const updateProfile = require('../controllers/updateProfileController')

router.route('/').post(updateProfile)

module.exports = router