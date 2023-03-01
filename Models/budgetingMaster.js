let mongoose = require('mongoose')

let budgetingMaster = new mongoose.Schema({
    username: String,
    CategoryName: String,
    BudgetYear: Date,
    Jan: Number,
    Feb: Number,
    Mar: Number,
    Apr: Number,
    May: Number,
    Jun: Number,
    Jul: Number,
    Aug: Number,
    Sep: Number,
    Oct: Number,
    Nov: Number,
    Dec: Number,
}, { timestamps: true })

module.exports = mongoose.model('budgetingMaster', budgetingMaster);
