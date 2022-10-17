const express = require('express')
const router = express.Router()
const { registerUser, login } = require('../controllers/authController')
// const { verifyToken } = require('../middleware/verifyToken')


router.route('/').post(registerUser)

module.exports = router