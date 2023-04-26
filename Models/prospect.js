let mongoose = require('mongoose')
let prospect = new mongoose.Schema({
    username: String,
    EnquiryID: String,
    CallDate: Date,
    Time: String,
    Name: String,
    Email: String,
    Contact: Number,
    ServiceName: String,
    CallStatus: String,
    FollowupDate: Date,
    NextFollowupDate: Date,
    TimeFollowp: String,
    AppointmentDate: Date,
    AppointmentTime: String,
    Discussion: String,
    Counseller: String,
    enquiryStage: String,
    typeOfCall: String,
    status: String,
    EmployeeId:String,
}, { timestamps: true })

module.exports = mongoose.model('prospect', prospect);
