const express = require('express')
const router = express.Router()
const deleteEmail = require('../controllers/deleteEmailController')
const { verifyToken } = require('../middleware/verifyToken')

router.route('/:id').delete(verifyToken, deleteEmail)

module.exports = router