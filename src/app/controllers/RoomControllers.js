const Room = require("../models/Room");
const Doctor = require("../models/Doctor");

class RoomControllers {

    async create(req, res) {
        let room = new Room({
            RoomID: req.body.RoomID,
            RoomMaster: req.body.RoomMaster,
        })
        let result = await room.save()
        if (result) {
            res.send(result);
        }
    }

    async show(req, res) {
        let rooms = await Room.find();
        if (rooms.length > 0) {
            res.send(rooms);
        }
        else {
            res.send("No rooms found");
        }
    }

    async add(req, res) {
        let doctor = Doctor.findOne({ IdCard: req.body.IdCard });

        if (doctor) {
            let result = await Room.updateOne(
                { RoomID: req.params.RoomID },
                {
                    $addToSet: {
                        Data: doctor
                    }
                }
            )
            res.send(result);
        }
        else {
            res.send(false);
        }

    }

}

module.exports = new RoomControllers
