const express = require('express')
const router = express.Router()
const { login } = require('../controllers/authController')
const { verifyToken, isAdmin } = require('../middleware/verifyToken')

router.route('/').post(login)
module.exports = router