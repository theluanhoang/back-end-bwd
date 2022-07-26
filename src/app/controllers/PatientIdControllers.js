const PatientId = require("../models/PatientId")

class PatientIdControllers {

    // [GET] /check
    async check(req, res) {
        let patientId = await PatientId.findOne({IdCard: req.body.IdCard});
        res.send(patientId.status);
    }

    async add(req, res) {
        let patientID = new PatientId(req.body);
        let result = await patientID.save();
        res.send(result);
    }

}

module.exports = new PatientIdControllers