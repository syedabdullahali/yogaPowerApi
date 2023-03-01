
let mongoose = require('mongoose')

let clientAttentance = new mongoose.Schema({
    username: String,
    attentanceId: String,
    clientId:String,
    ClientName: String,
    ClientMobile: Number,
    ServiceName: String,
    Group: String,
    PT: String,
    Condcuted: String,
    Alert: String,
    Branch: String,
    centerId: String,
    checkDate: Date,
    checkIn: String,
    checkOut: String,
}, { timestamps: true })

module.exports = mongoose.model('clientAttentance', clientAttentance);
