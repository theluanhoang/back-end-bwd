const PatientId = require("../models/PatientId")

class PatientIdControllers {

    // [GET] /check
    async check(req, res) {
        let patientId = await PatientId.findOne({IdCard: req.body.IdCard});
        if (patientId.length > 0) {
            res.send(patientId.status);
        }
        else {
            res.send(req.body.IdCard);
        }
    }

    async add(req, res) {
        let patientID = new PatientId(req.body);
        let result = await patientID.save();
        res.send(result);
    }

}

module.exports = new PatientIdControllers