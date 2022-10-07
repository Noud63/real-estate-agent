const express = require('express')
const router = express.Router()
const getAllUsers = require('../controllers/getAllUsersController')

router.route('/').get(getAllUsers)
module.exports = router