const mongoose = require("mongoose");
const Education = require("./educationModel");
const WorkExperience = require("./workExperienceModel");

const connectionSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    newUser: { type: Boolean, required: true },
    Education: [],
    WorkExperience: [],
    Connections: [],
    Projects: [],
    posts: [],
    Activity: {
      liked: [],
      commented: [],
      posted: []
    },
    Interests: [String],
    dp: { type: Buffer}
});

const Connection = mongoose.model("Connection", connectionSchema);

module.exports = Connection