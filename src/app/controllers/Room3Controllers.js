const Room3 = require("../models/Room3")

class Room3Controllers {
    async add(req, res) {
        let roomId = req.body.RoomId
        let room = await Room.findOne({ RoomId: roomId });
        if (room) {
            let room3 = await Room3.findOne({ RoomId: roomId });
            if (room3) {
                let user = await User.findOne({ IdCard: req.body.IdCard });
                if (user) {
                    let result = await Room3.updateOne(
                        { RoomId: roomId },
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
                let newRoom3 = new Room3({
                    RoomId: roomId
                })

                let result = await newRoom3.save();

                if (result) {
                    let user = await User.findOne({ IdCard: req.body.IdCard });
                    if (user) {
                        let result = await Room3.updateOne(
                            { RoomId: roomId },
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
                    res.send("Tạo phòng 3 không thành công");
                }
            }
            

        }
        else {
            res.send("Không tìm thấy phòng");
        }
    }
}

module.exports = new Room3Controllers