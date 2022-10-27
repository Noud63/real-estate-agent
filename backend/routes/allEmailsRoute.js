const express = require('express')
const router = express.Router()
const getAllEmails = require('../controllers/getAllEmailsController')
const { verifyToken } = require('../middleware/verifyToken')

router.route('/').get(getAllEmails)

module.exports = router