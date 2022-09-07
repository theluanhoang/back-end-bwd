const express = require('express')
const router = express.Router()

const room2Controllers = require('../app/controllers/Room2Controllers')

router.post('/add-user', room2Controllers.add)

module.exports = router