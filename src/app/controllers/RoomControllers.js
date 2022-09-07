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
        let user = new Doctor({
            IdCard: req.body.IdCard,
            phoneNumber: req.body.phoneNumber,
            name: req.body.name,
            gender: req.body.gender,
            address: req.body.address,
            dateOfBirth: req.body.dateOfBirth,
            role: req.body.role,
            image: req.body.image
        })

        let result = await Room.updateOne(
            { RoomID: req.params.RoomID },
            {
                $addToSet: {
                    Data: user
                }
            }
        )
        res.send(result);
    }

}

module.exports = new RoomControllers