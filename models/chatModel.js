const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    senderId : {type:String},
    receiverId : {type:String},
    text:{type:String}
},
{
    timestamps:true,
}
)

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;