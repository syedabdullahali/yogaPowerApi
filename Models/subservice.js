let mongoose = require('mongoose')

let subservice = new mongoose.Schema({
    username: String,
    sub_Service_Name: String,
    selected_service: String,
    fees: Number,
    packages: String,
    duration: String,
    status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('subservice', subservice);