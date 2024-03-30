const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String, required: true },
    password:{type:String, required:true},
    mobile: { type: String},
    newUser: { type: Boolean, required: true },
    Education: [],
    WorkExperience: [],
    Connections: [],
    Projects: [{
      name: { type: String, required: true },
      description: { type: String, required: true }
    }],
    Activity: {
      liked: [],
      commented: [],
      posted: []
    },
    Interests: [String],
    dp: { type: Buffer},
    userType:{type:String},
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;