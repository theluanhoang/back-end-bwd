const router = require('express').Router();
const conversationController = require('../app/controllers/ConversationControllers');


// new conversation

router.post('/', conversationController.newConversation);
