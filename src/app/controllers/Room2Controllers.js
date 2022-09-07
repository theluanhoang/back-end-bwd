const User = require('../models/User');
class Room2Controllers {

    async show(req, res) {
        let rooms = await Room2.find();
        if (rooms.length > 0) {
            res.send(rooms);
        }
        else {
            res.send("No rooms found");
        }
    }

    async add(req, res) {

        let user = await User.findOne({ IdCard: req.body.IdCard });

        if (user) {
            let roomData = new Room2({
                Data: user,
            })

            let result = await roomData.save();
            res.send(user);
        }
        else {
            res.send(false);
        }
    }
}

module.exports = Room2Controllers