
let mongoose = require('mongoose')

let staffAttentance = new mongoose.Schema({
    username: String,
    staffId:String,
    attentanceId: String,
    StaffName: String,
    staffContact:String,
    centerId: String,
    checkDate: Date,
    checkIn: String,
    checkOut: String,
}, { timestamps: true })

module.exports = mongoose.model('staffAttentance', staffAttentance);
