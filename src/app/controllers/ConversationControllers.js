const Conversation = require("../models/Conversation")

class ConversationControllers {

    // new conversation 
    newConversation(req, res) {
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId]
        })
    }

}

module.exports = new ConversationControllers