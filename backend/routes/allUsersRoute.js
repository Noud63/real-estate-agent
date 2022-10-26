const express = require('express')
const router = express.Router()
const { getAllUsers} = require('../controllers/getAllUsersController')
const { verifyToken } = require('../middleware/verifyToken')

router.route('/').get(verifyToken, getAllUsers )

module.exports = router