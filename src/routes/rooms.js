const express = require('express')
const router = express.Router()

const roomControllers = require('../app/controllers/RoomControllers')

router.post('/create', roomControllers.create)
router.put('/add-user/:RoomID', roomControllers.add)
router.get('/', roomControllers.show)

module.exports = router