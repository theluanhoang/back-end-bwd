const express = require('express')
const router = express.Router()

const stayingControllers = require('../app/controllers/StayingControllers')

router.post('/signup', stayingControllers.signup)
router.get('/', stayingControllers.show)

module.exports = router