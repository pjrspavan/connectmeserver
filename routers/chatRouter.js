const express = require('express');
const expressAsyncHandler = require('express-async-handler')
const Chat = require('../models/chatModel')

const chatRouter = express.Router();


// CORS middleware
chatRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


chatRouter.post('/', );
chatRouter.get('/', );

