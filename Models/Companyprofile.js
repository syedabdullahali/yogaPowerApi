let mongoose = require('mongoose')

let CompanyProfile = new mongoose.Schema({
    username: String,
    brandName: String,
    brandNumber: Number,
    emailAddress: String,
    areaSequerFit: String,
    currency: String,
    businessCategory: String,
    brandFullAddress: String,
    city: String,
    state: String,
    openingTime: String,
    closingTime: String,
    workingDays: Number,
    halfDay: String,
    holidays: String,
}, { timestamps: true })

module.exports = mongoose.model('CompanyProfile', CompanyProfile);