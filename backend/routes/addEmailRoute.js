const express = require('express')
const router = express.Router()
const emails = require('../controllers/emailsController')
// const { verifyToken, admin } = require('../middleware/verifyToken')

router.route('/').post(emails)
module.exports = router