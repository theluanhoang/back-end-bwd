const User = require("../models/User")

class UserControllers {

    // [POST] /signup
    async signup(req, res) {
        let user = new User(req.body)
        let result = await user.save()
        res.send(result);
    }

    sendQR(req, res) {
        const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
        const auth_token = '86ed927c677dce3428c25bcd8701deec'
        const twilio = require('twilio')(sid, auth_token)
        let otp = Math.floor(Math.random() * 999999) + 100000;

        twilio.messages.create({
            from: "+13187082606",
            to: '+84379124695',
            body: `OTP: ${otp}`
        })
            .then((res) => console.log('message has sent!'))
            .catch((err) => console.log(err))
    }

    // [GET] /
    async show(req, res) {
        let user = await User.find();
        if (user.length > 0) {
            res.send(user);
        }
        else {
            res.send("No user found");
        }
    }


}

module.exports = new UserControllers