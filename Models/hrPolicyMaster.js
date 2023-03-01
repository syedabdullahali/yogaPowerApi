let mongoose = require('mongoose')

let hrPolicyMaster = new mongoose.Schema({
    username: String,
    Title: String,
    Policy: String,
}, { timestamps: true })

module.exports = mongoose.model('hrPolicyMaster', hrPolicyMaster);
