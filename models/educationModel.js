const mongoose = require("mongoose")

const educationSchema = mongoose.Schema({
    schoolName: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    DegreeLevel: { type: String, required: true },
    Concentration: { type: String, required: true }
  });

const Education = mongoose.model('Education', educationSchema)

module.exports = Education