const Staying = require("../models/Staying")

class StayingControllers {

    // [POST] /signup
    async signup(req, res) {
        let staying = new Staying(req.body);
        let result = await staying.save();
        res.send(result);
    }


    // [GET] /
    async show(req, res) {
        let staying = await Staying.find();
        if (staying.length > 0) {
            res.send(staying);
        }
        else {
            res.send("No Staying found");
        }
    }


}

module.exports = new StayingControllers