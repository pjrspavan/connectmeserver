const mongoose = require('mongoose')

const workExperienceSchema =  mongoose.Schema({
    role: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true }
  });

  
const WorkExperience = mongoose.model("WorkExperience", workExperienceSchema) 
module.exports = WorkExperience