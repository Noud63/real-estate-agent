const express = require('express')
const router = express.Router()
const { login } = require('../controllers/authController')

router.route('/').post(login)
module.exports = router