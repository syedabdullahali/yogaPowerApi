let mongoose = require('mongoose')
let Referral = new mongoose.Schema({
    userId: String,
    StaffName: String,
    Documenttype: String,
    UploadDocument: String,
}, { timestamps: true })
module.exports = mongoose.model('Referral', Referral);