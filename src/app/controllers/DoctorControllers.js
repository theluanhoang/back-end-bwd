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
                const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
                const auth_token = '7e1533788ec27e6c90f9258493771477'
                const twilio = require('twilio')(sid, auth_token)
                let otp = Math.floor(Math.random() * 999999) + 100000;

                twilio.messages.create({
                    from: "+13187082606",
                    to: '+84379124695',
                    body: `OTP: ${otp}`
                })
                    .then(() => res.send(otp))
                    .catch((err) => console.log(err))
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

    sendOTP(req, res) {
        const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
        const auth_token = '7e1533788ec27e6c90f9258493771477'
        const twilio = require('twilio')(sid, auth_token)
        let otp = Math.floor(Math.random() * 999999) + 100000;

        twilio.messages.create({
            from: "+13187082606",
            to: '+84379124695',
            body: `OTP: ${otp}`
        })
            .then(() => res.send(otp))
            .catch((err) => console.log(err))
    }


}

module.exports = new DoctorControllers