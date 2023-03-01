let mongoose = require('mongoose')

let taxMaster = new mongoose.Schema({
    username: String,
    Date: Date,
    TaxName: String,
    Tax: Number,
    Status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('taxMaster', taxMaster);
