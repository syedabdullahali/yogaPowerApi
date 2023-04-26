let mongoose = require('mongoose')
const Package = require('./Package');

let memBerCallReports = new mongoose.Schema({
    username: String,
    callTimeing: String,
    callDiscussion:String,
    callFollowupby:String,
    callFollowUpDate:Date,
    typeOfCall:String,
    clientId:String,
    memberId:String,
    clientName:String,
    phone:Number,
    empolyeeId:String
}, { timestamps: true })


module.exports =   mongoose.model('memBerCallReports', memBerCallReports);
