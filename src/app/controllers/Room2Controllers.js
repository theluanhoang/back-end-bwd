const Room2 = require("../models/Room2");
const Room3 = require("../models/Room3");
const Room = require("../models/Room");
const User = require("../models/User");

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
        } const query = { "RoomId": `${roomId}`, "Data.IdCard": `${idCard}` }
        const updateDocument = {
            $set: { "Data.$.status": "02" }
        };
        const result = await Room2.updateOne(query, updateDocument);
        if (result) {
            res.send(firstUser);
        }
    }

    async finish(req, res) {
        let roomId = req.body.RoomId
        let idCard = req.body.IdCard

        // thêm người dùng vào phòng ba
        // --------------------------------------------------------------------------
        let room3 = await Room3.findOne({ RoomId: roomId })
        if (room3) {
            let user = await User.findOne({ IdCard: idCard })
            if (user) {
                let userRoom2 = await Room2.findOne(
                    { RoomId: roomId },
                    {
                        Data: {
                            $elemMatch: {
                                IdCard: idCard
                            }
                        }
                    }
                )
                let statusUser = (userRoom2.Data)[0].status
                if (statusUser == '02') {
                    let updatedRoom3 = await Room3.updateOne(
                        { RoomId: req.body.RoomId },
                        {
                            $addToSet: {
                                Data: user
                            }
                        }
                    )
                    if (updatedRoom3) {
                        res.send(true);
                    }
                    else {
                        res.send(false);
                    }
                }
                else {
                    res.send('Theo tuần tự')
                }
            }
            else {
                res.send('Không tìm thấy người tiêm chủng')
            }
        }
        else {
            let user = await User.findOne({ IdCard: idCard })
            if (user) {
                let newRoom3 = await Room3({
                    RoomId: roomId,
                    Data: user
                });

                let createdRoom3 = await newRoom3.save()
                res.send(createdRoom3);
            }
            else {
                res.send('Không có user');
            }
        }

        // Xóa người dùng khỏi room2
        const query = { "RoomId": `${roomId}`, "Data.IdCard": `${idCard}` }
        const updateDocument = {
            $set: { "Data.$.status": "03" }
        };
        const result = await Room3.updateOne(query, updateDocument);
        if (result) {
            res.send(firstUser);
        }
    }

    async getFirstUser(req, res) {
        let idCard
        let roomId = req.params.RoomId
        let room2 = await Room2.findOne({ RoomId: roomId });
        if (room2) {
            let user, firstUser
            let users = room2.Data;
            for (user of users) {
                if (user.status != '02') {
                    firstUser = user
                    idCard = user.IdCard
                    break;
                }
            }
            if (firstUser) {
                const query = { "RoomId": `${roomId}`, "Data.IdCard": `${idCard}` }
                const updateDocument = {
                    $set: { "Data.$.status": "02" }
                };
                const result = await Room2.updateOne(query, updateDocument);
                if (result) {
                    res.send(firstUser);
                }
            }
            else {
                res.send(false);
            }
        }
        else {
            res.send(false)
        }
    }

}

module.exports = new Room2Controllers
