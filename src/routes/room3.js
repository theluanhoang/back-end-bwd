const express = require('express')
const router = express.Router()
const room3Controllers = require('../app/controllers/Room3Controllers');

router.get('/firstUser/:RoomId', room3Controllers.getFirstUser);

module.exports = router