
let mongoose = require('mongoose')

let offer = new mongoose.Schema({
    username: String,
    ServiceName: String,
    ServiceVariation: String,
    duration: String,
    fees: Number,
    dealName: String,
    startDate: Date,
    endDate: Date,
    discount: Number,
    netfees: Number,
    status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('offer', offer);

