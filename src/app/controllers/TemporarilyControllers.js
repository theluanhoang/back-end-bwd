const Temporarily = require("../models/Temporarily")

class TemporarilyControllers {

    // [POST] /signup
    async signup(req, res) {
        let temporarily = new Temporarily(req.body);
        let result = await temporarily.save();
        res.send(result);
    }


    // [GET] /
    async show(req, res) {
        let temporarily = await Temporarily.find();
        if (temporarily.length > 0) {
            res.send(temporarily);
        }
        else {
            res.send("No temporarily found");
        }
    }


}

module.exports = new TemporarilyControllers