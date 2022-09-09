const Room = require("../models/Room");
const Doctor = require("../models/Doctor");

class RoomControllers {

    async create(req, res) {
        let room = new Room({
            RoomID: req.body.RoomID,
            RoomMaster: req.body.RoomMaster,
            IdCard: req.body.IdCard
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

        let roomId = req.body.RoomID
        let idCard = req.body.IdCard
        let doctor = await Doctor.findOne({ IdCard: idCard });
        let result = await Room.updateOne(
                { RoomID: roomId },
                {
                    $addToSet: {
                        Data: doctor
                    }
                }
            )
            res.send(doctor);
    }

}

module.exports = new RoomControllers
