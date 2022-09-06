const Doctor = require("../models/Doctor")
const User = require("../models/User")

class DoctorControllers {

    // [POST] /signup
    async signup(req, res) {
        let doctor = new Doctor(req.body)
        let result = await doctor.save()
        if (result) {
            const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
            const auth_token = '05a64ebb6ae232c46dddf8e59364c18a'
            const twilio = require('twilio')(sid, auth_token)
            let otp = Math.floor(Math.random() * 999999) + 100000;

            twilio.messages.create({
                from: "+13187082606",
                to: '+84379124695',
                body: `OTP: ${otp}`
            })
                .then((res) => res.send(otp))
                .catch((err) => console.log(err))
        }
        else {
            res.send('false')
        }
    }

    // [POST] /login
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

    sendSMS(req, res) {
        const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
        const auth_token = '161341dd737b1ca3c55c084599410da0'
        const twilio = require('twilio')(sid, auth_token)
        let otp = Math.floor(Math.random() * 999999) + 100000;
        let str = otp + "";
        twilio.messages.create({
            from: "+13187082606",
            to: '+84379124695',
            body: `OTP: ${otp}`
        })
            .then(() => res.send(str))
            .catch((err) => console.log(err))
    }

    async finish(req, res) {
        let result = await User.updateOne(
            { IdCard: req.params.IdCard },
            {
                $set: {
                    status: 3
                }
            }
        )
        res.send(result);
    }
}

module.exports = new DoctorControllers