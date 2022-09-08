const Room2 = require("../models/Room2");
const Room = require("../models/Room");
const User = require("../models/User");

class RoomControllers {

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
        let room = await Room.findOne({ RoomId: req.body.RoomId });
        if (room) {
            let room2 = await Room2.findOne({ RoomId: req.body.RoomId });
            if (room2) {
                let user = await User.findOne({ IdCard: req.body.IdCard });
                if (user) {
                    let result = await Room2.updateOne(
                        { RoomId: req.body.RoomId },
                        {
                            $addToSet: {
                                Data: user
                            }
                        }
                    )
                    res.send(result)
                }
                else {
                    res.send("Không tìm thấy user");
                }
            } else {
                let newRoom2 = new Room2({
                    RoomId: req.body.RoomId
                })

                let result = await newRoom2.save();

                if (result) {
                    let user = await User.findOne({ IdCard: req.body.IdCard });
                    if (user) {
                        let result = await Room2.updateOne(
                            { RoomId: req.body.RoomId },
                            {
                                $addToSet: {
                                    Data: user
                                }
                            }
                        )
                        res.send(result)
                    }
                    else {
                        res.send("Không tìm thấy user");
                    }
                }
                else {
                    res.send("Tạo phòng 2 không thành công");
                }
            }

        }
        else {
            res.send("Không tìm thấy phòng");
        }
    }

    async finish(req, res) {
        let result = await User.updateOne(
            { IdCard: req.params.IdCard },
            {
                $set: {
                    status: '03'
                }
            }
        )
        res.send(result);
    }

    static async updateStatus(IdCard) {
        let result = await User.updateOne(
            { IdCard: IdCard },
            {
                $set: {
                    status: 'wait'
                }
            }
        )
        return result;
    }

    async handlerGetUser(req, res) {
        let data = []
        let room2 = await Room2.findOne({ RoomId: req.params.RoomId });
        if (room2) {
            let users = room2.Data;
            if (users.length > 0) {
                users.forEach(async (user, index) => {
                    if (user.status != 'wait') {
                        user.status = 'wait';
                    }
                    data.push(user);
                })
                console.log("End")
            }
            else {
                res.send('Không có móng nào!!!')
            }
        }
    }

}

module.exports = new RoomControllers
