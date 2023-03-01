let mongoose = require('mongoose')
let Document = new mongoose.Schema({
    userId: String,
    StaffName: String,
    Documenttype: String,
    UploadDocument: String,
}, { timestamps: true })
module.exports = mongoose.model('documents', Document);