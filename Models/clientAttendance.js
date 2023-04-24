
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
    batches:String,
    category:String,
    package:String,
    days:String,
    startDate:String,
    endDate:String,
    classTiming:String,
    contact:Number,
    admissionBatch:String,
    admissionPackageName:String,
    admissionDuration:String,
    attentanceCallingInfo:{
        callTimeing:String,
        discussion:String,
        followupby:String,
        followUpDate:String
    }
}, { timestamps: true })

module.exports = mongoose.model('clientAttentance', clientAttentance);
