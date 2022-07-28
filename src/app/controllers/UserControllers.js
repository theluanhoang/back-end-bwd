const User = require("../models/User")

class UserControllers {

    // [POST] /signup
    async signup(req, res) {
        let user = new User(req.body)
        let result = await user.save()
        res.send(result)
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