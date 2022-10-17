const express = require('express')
const router = express.Router()
const { userProfile } = require('../controllers/getAllUsersController')
const { verifyToken } = require('../middleware/verifyToken')

router.route('/:id').get(verifyToken, userProfile)

module.exports = router