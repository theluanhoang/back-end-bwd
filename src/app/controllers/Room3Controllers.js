const Room3 = require("../models/Room3")

class Room3Controllers {
    async getFirstUser(req, res) {
        let idCard
        let roomId = req.params.RoomId
        let room3 = await Room3.findOne({ RoomId: roomId });
        if (room3) {
            let user, firstUser
            let users = room3.Data;
            for (user of users) {
                if (user.status != 'success') {
                    firstUser = user
                    idCard = user.IdCard
                    break;
                }
            }
            if (firstUser) {
                const query = { "RoomId": `${roomId}`, "Data.IdCard": `${idCard}` }
                const updateDocument = {
                    $set: { "Data.$.status": "success" }
                };
                const result = await Room3.updateOne(query, updateDocument);
                if (result) {
                    res.send(firstUser);
                }
            }
            else {
                res.send(false);
            }
        }
        else {
            res.send(false);
        }
    }

    async delete(req, res) {
        // Xóa user đó ở vị trí đầu
        let idCard = req.body.IdCard
        let roomId = req.body.RoomId
        let removeUser = await Room3.updateOne(
            { RoomId: roomId },
            {
                $pull: {
                    Data: {
                        IdCard: idCard
                    }
                }
            }
        )

        if (removeUser) {
            res.send(true);
        }
        else {
            res.send(false)
        }
    }
}

module.exports = new Room3Controllers