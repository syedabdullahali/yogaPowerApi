let mongoose = require('mongoose')

let expenseMaster = new mongoose.Schema({
    username: String,
    CategoryName: String,
    ApprovalLevel1: String,
    ApprovalLevel2: String,
}, { timestamps: true })

module.exports = mongoose.model('expenseMaster', expenseMaster);
