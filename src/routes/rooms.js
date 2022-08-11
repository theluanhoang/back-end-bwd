const express = require('express')
const router = express.Router()

const roomControllers = require('../app/controllers/RoomControllers')

router.post('/add', roomControllers.create)
router.get('/', roomControllers.show)

module.exports = router