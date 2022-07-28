const User = require("../models/User")

class UserControllers {

    // [POST] /signup
    async signup(req, res) {
        let user = new User(req.body)
        let result = await user.save()
        res.send(result)
    }

    async sendQR(req, res) {
        const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
        const auth_token = '8898cb3229f2e8b6d1244a7b53f3266b'
        const twilio = require('twilio')(sid, auth_token)
        let otp = await Math.floor(Math.random() * 999999) + 100000;

        res.send(otp)
        // twilio.messages.create({
        //     from: "+13187082606",
        //     to: '+84379124695',
        //     body: 'OTP: 185324'
        // })
        //     .then((res) => console.log('message has sent!'))
        //     .catch((err) => console.log(err))
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