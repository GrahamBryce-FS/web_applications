const express = require('express')
const router = express.Router()
const userCtlr = require('../controllers/users')
const { email, phone, birthday, password } = require("@bgraham1/utils")

router.post('/signup', email, phone, birthday, password, userCtlr.signup)

module.exports = router