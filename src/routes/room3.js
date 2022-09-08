const express = require('express')
const router = express.Router()
const room3Controllers = require('../app/controllers/Room3Controllers');

router.post('/add-user', room3Controllers.add)

module.exports = router