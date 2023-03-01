
let mongoose = require('mongoose')

let service = new mongoose.Schema({
    username: String,
    ServiceName: String,
    fees: Number,
    packages: String,
    duration: String,
    status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('service', service);