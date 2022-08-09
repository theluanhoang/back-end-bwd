const Doctor = require("../models/Doctor")

class DoctorControllers {

    // [POST] /signup
    async signup(req, res) {
        let doctor = new Doctor(req.body)
        let result = await doctor.save()
        res.send(result)
    }

    // [POST] /signup
    async login(req, res) {
        if (req.body.IdCard && req.body.password) {
            let doctor = await Doctor.findOne(req.body).select("-password");
            if (doctor) {
                res.send(doctor);
            }
            else {
                res.send('false');
            }
        }
        else {
            res.send('false');
        }
    }

    // [GET] /
    async show(req, res) {
        let doctors = await Doctor.find();
        if (doctors.length > 0) {
            res.send(doctors);
        }
        else {
            res.send("No doctors found");
        }
    }


}

module.exports = new DoctorControllers