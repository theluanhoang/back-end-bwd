const express = require('express')
const router = express.Router()

const doctorControllers = require('../app/controllers/DoctorControllers')

router.post('/signup', doctorControllers.signup)
router.get('/', doctorControllers.show)

module.exports = router