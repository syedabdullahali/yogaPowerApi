let mongoose = require('mongoose')
let professionalinfo = new mongoose.Schema({
    Occupation: String,
    CompanyName: String,
    OfficialEmail: String,
    ContactNumber: Number,
    WhatsAppNumber: Number,
    PrimaryAddress: String,
    City: String,
    State: String,
    Pin: Number,
    country: String,
    ParentFullName: String,
    NumberParent: Number,
    HomeNumber: Number,
    Email: String,
    Relationship: String,
    address: String,
    City: String,
}, { timestamps: true })

module.exports = mongoose.model('professionalinfos', professionalinfo);
