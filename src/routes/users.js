const express = require('express')
const router = express.Router()

const userControllers = require('../app/controllers/UserControllers')

router.post('/signup', userControllers.signup)
router.get('/', userControllers.show)

module.exports = router