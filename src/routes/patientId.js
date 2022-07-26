const express = require('express')
const router = express.Router()

const patientIdController = require('../app/controllers/PatientIdControllers')

router.get('/:cccd', patientIdController.check)
router.post('/add-patientID', patientIdController.add)

module.exports = router