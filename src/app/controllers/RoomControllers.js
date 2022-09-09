const Room = require("../models/Room");
const Doctor = require("../models/Doctor");

class RoomControllers {

    async create(req, res) {
        let idCard = req.body.IdCard
        let doctor = await Doctor.findOne({ IdCard: idCard })
        if (doctor) {
            let room = new Room({
                RoomID: req.body.RoomID,
                RoomMaster: doctor.name,
                IdCard: req.body.IdCard
            })
            let result = await room.save()
            if (result) {
                res.send(doctor);
            }
        }
        else {
            res.send("Chủ phòng không hợp lệ!")
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
        if (doctor) {
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
        else {
            res.send(false);
        }
    }

}

module.exports = new RoomControllers
