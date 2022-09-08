const express = require('express')
const router = express.Router()

const room2Controllers = require('../app/controllers/Room2Controllers')

router.post('/add-user', room2Controllers.add)
router.post('/submit', room2Controllers.finish)
router.get('/firstUser/:RoomId', room2Controllers.getFirstUser)
router.get('/listUser/:RoomId', room2Controllers.getListUser)

module.exports = router