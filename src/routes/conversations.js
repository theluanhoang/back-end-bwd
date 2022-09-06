const express = require('express')
const router = express.Router()
const conversationController = require('../app/controllers/ConversationControllers');
// new conversation

router.post('/', conversationController.newConversation);

module.exports = router;