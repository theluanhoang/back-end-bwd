const express = require('express')
const router = express.Router()

const temporarilyControllers = require('../app/controllers/TemporarilyControllers')

router.post('/signup', temporarilyControllers.signup)
router.get('/', temporarilyControllers.show)

module.exports = router