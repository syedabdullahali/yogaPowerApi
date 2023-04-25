let mongoose = require('mongoose')
const Package = require('./Package');

let memBerCallReport = new mongoose.Schema({
    username: String,
    callTimeing:String,
    callDiscussion:String,
    callFollowupby:String,
    callFollowUpDate:String
}, { timestamps: true })


module.exports =   mongoose.model('memBerCallReport', memBerCallReport);
