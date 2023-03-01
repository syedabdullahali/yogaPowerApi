let mongoose = require('mongoose')
let allEnquiry = new mongoose.Schema({
    EnquiryID: {
        type: String,
        unique: true,
    },
    Date: Date,
    Name: String,
    Mobile: {
        type: Number,
        unique: true,
    },
    Service: String,
    AttendanceId: {
        type: String,
        unique: true,
    },
    Services: [{
        type: String
    }],
    StartDate: {
        type: Date,
        default: Date.now,
    },
    Enddate: {
        type: Date,
        default: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
    },
    CallStatus: String,
    Appointments: [{
        type: String
    }],
    Traning: String,
    Status: String,
}, { timestamps: true })

module.exports = mongoose.model('allEnquiry', allEnquiry);