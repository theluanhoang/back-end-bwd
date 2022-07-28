const express = require('express')
const router = express.Router()
const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
const auth_token = '5abef8103def345fa643ba5b381bfed7'
const twilio = require('twilio')(sid, auth_token)

const userControllers = require('../app/controllers/UserControllers')

router.post('/signup', userControllers.signup)
router.get('/', userControllers.show)
router.get('/sendOTP', userControllers.sendQR)

module.exports = router