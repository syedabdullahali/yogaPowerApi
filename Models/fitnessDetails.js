
let mongoose = require('mongoose')

let fitnessDetails = new mongoose.Schema({
    username: String,
    Measurement_Date: Date,
    Member_ID: String,
    Fullname: String,
    ContactNumber: Number,
    Weight: Number,
    Height: Number,
    BMI: Number,
    Age: Number,
    Fat: Number,
    Neck: Number,
    Shoulder: Number,
    Chest: Number,
    ArmsR: Number,
    ArmsL: Number,
    ForArms: Number,
    Waist: Number,
    Hips: Number,
    ThighR: Number,
    ThighL: Number,
    CalfR: Number,
    CalfL: Number,
    Counseller: String,
    NextFollowup_Date: Date,
}, { timestamps: true })

module.exports = mongoose.model('fitnessDetails', fitnessDetails);

