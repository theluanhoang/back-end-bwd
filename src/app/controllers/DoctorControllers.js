const Doctor = require("../models/Doctor")

class DoctorControllers {

    // [POST] /signup
    async signup(req, res) {
        let doctor = new Doctor(req.body)
        let result = await doctor.save()
        res.send(result)
    }

    test(req, res) {

    }

    // [GET] /
    async show(req, res) {
        let doctors = await Doctor.find();
        if (doctors.length > 0) {
            res.send(doctors);
        }
        else {
            res.send("No products found");
        }
    }


}

module.exports = new DoctorControllers