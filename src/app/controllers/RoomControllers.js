const Room = require("../models/Room");
const User = require("../models/User");

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
        let user = new User({
            IdCard: req.body.IdCard,
            phoneNumber: req.body.phoneNumber,
            name: req.body.name,
            gender: req.body.gender,
            address: req.body.address,
            province: req.body.province,
            district: req.body.district,
            wards: req.body.wards,
            nationality: req.body.nationality,
            phoneNumber: req.body.phoneNumber,
            ethnic: req.body.ethnic,
            dateOfBirth: req.body.dateOfBirth,
        })
        let _result = await user.save();

        let result = await Room.updateOne(
            { RoomID: req.params.RoomID },
            {
                $set: {
                    Data: [
                        ...Data,
                        user
                    ]
                }
            }
        )
        res.send(result);
    }

}

module.exports = new RoomControllers