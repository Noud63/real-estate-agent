const express = require('express')
const router = express.Router()
const { getAllUsers} = require('../controllers/getAllUsersController')
const { verifyToken, admin } = require('../middleware/verifyToken')

router.route('/').get( getAllUsers )

module.exports = router