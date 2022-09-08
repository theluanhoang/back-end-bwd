const express = require('express')
const router = express.Router()

const roomControllers = require('../app/controllers/RoomControllers')

router.post('/create', roomControllers.create)
router.post('/add-user/', roomControllers.add)
router.get('/', roomControllers.show)

module.exports = router