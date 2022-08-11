const Room = require("../models/Room")

class RoomControllers {

    async create(res, req) {
        let room = new Room({
            RoomID: req.body.RoomID,
            RoomMaster: req.body.RoomMaster,
        })
        let result = await room.save()
        if (result) {
            res.send(result);
        }
    }

}

module.exports = new RoomControllers