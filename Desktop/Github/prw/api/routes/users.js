const express = require('express')
const router = express.Router()
const userCtlr = require('../controllers/users')

router.post('/signup', userCtlr.signup)

module.exports = router