const express = require('express')
const router = express.Router()
const getAllEmails = require('../controllers/getAllEmailsController')

router.route('/').get(getAllEmails)

module.exports = router