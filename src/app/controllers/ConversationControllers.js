const Conversation = require("../models/Conversation")

class ConversationControllers {

    // new conversation 
    async newConversation(req, res) {
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId]
        });

        try {
            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation);
        } catch(err) {
            res.status(500).json(err)
        }
    }

}

module.exports = new ConversationControllers